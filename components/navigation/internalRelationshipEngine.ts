import {
  sectionNavigation,
  type NavigationItem,
} from "@/components/navigation/navigation";

export type InternalRelationship = {
  name: string;
  href: string;
  description: string;
};

export type InternalRelationshipContext = {
  sectionLabel: string;
  title: string;
  description: string;
  related: InternalRelationship[];
  back: {
    name: string;
    href: string;
  };
};

type NavigationMatch = {
  item: NavigationItem;
  parent: NavigationItem | null;
};

function normalizePath(path: string): string {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }

  return path;
}

function findNavigationItem(
  pathname: string,
  items: NavigationItem[],
  parent: NavigationItem | null = null,
): NavigationMatch | null {
  const normalizedPath = normalizePath(pathname);

  for (const item of items) {
    const normalizedHref = normalizePath(item.href);

    if (normalizedHref === normalizedPath) {
      return {
        item,
        parent,
      };
    }

    if (item.children?.length) {
      const found = findNavigationItem(
        normalizedPath,
        item.children,
        item,
      );

      if (found) {
        return found;
      }
    }
  }

  return null;
}

function getDescription(
  item: NavigationItem,
  sectionLabel: string,
): string {
  return `Explore ${item.name.toLowerCase()} within ${sectionLabel.toLowerCase()}.`;
}

function getSiblingRelationships(
  item: NavigationItem,
  parent: NavigationItem | null,
  sectionItems: NavigationItem[],
  sectionLabel: string,
): InternalRelationship[] {
  const siblings = parent?.children ?? sectionItems;

  return siblings
    .filter((sibling) => sibling.href !== item.href)
    .map((sibling) => ({
      name: sibling.name,
      href: sibling.href,
      description: getDescription(sibling, sectionLabel),
    }));
}

export function getInternalRelationshipContext(
  pathname: string,
): InternalRelationshipContext | null {
  const normalizedPath = normalizePath(pathname);
  const segments = normalizedPath.split("/").filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  const sectionKey = segments[0];
  const section = sectionNavigation[sectionKey];

  if (!section) {
    return null;
  }

  const sectionPath = normalizePath(section.href);

  // Section overview pages do not need a "back to parent"
  // relationship block. Their contextual navigation already
  // represents the section.
  if (normalizedPath === sectionPath) {
    return null;
  }

  const match = findNavigationItem(
    normalizedPath,
    section.items,
  );

  if (!match) {
    return null;
  }

  const { item, parent } = match;

  // If the current item has children, those children become
  // the primary related destinations.
  if (item.children?.length) {
    return {
      sectionLabel: section.label,
      title: `Explore ${item.name}`,
      description: `Continue exploring ${item.name.toLowerCase()} within ${section.label.toLowerCase()}.`,
      related: item.children.map((child) => ({
        name: child.name,
        href: child.href,
        description: getDescription(child, item.name),
      })),
      back: {
        name: parent
          ? `Back to ${parent.name}`
          : `Back to ${section.label}`,
        href: parent?.href ?? section.href,
      },
    };
  }

  // For a normal subsection, show its siblings and provide
  // a direct route back to the parent.
  const related = getSiblingRelationships(
    item,
    parent,
    section.items,
    section.label,
  );

  return {
    sectionLabel: section.label,
    title: `Explore ${item.name}`,
    description: parent
      ? `Continue exploring ${parent.name.toLowerCase()} or discover another related area of ${section.label.toLowerCase()}.`
      : `Continue exploring ${section.label.toLowerCase()} through related areas.`,
    related,
    back: {
      name: parent
        ? `Back to ${parent.name}`
        : `Back to ${section.label}`,
      href: parent?.href ?? section.href,
    },
  };
}
