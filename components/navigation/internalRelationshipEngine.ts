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
  crossSection: InternalRelationship[];
  back: {
    name: string;
    href: string;
  };
};

type NavigationMatch = {
  item: NavigationItem;
  parent: NavigationItem | null;
};

type CrossSectionDefinition = {
  name: string;
  href: string;
  description: string;
};

const crossSectionRelationships: Record<
  string,
  CrossSectionDefinition[]
> = {
  about: [
    {
      name: "Our Programs",
      href: "/programs",
      description:
        "Discover the programs through which MercyCare supports people and communities.",
    },
    {
      name: "Our Services",
      href: "/services",
      description:
        "Explore MercyCare's home health services and care pathways.",
    },
    {
      name: "Our Projects",
      href: "/projects",
      description:
        "See how MercyCare projects turn ideas and partnerships into action.",
    },
    {
      name: "Get Involved",
      href: "/volunteer",
      description:
        "Find ways to participate, volunteer, and support MercyCare.",
    },
  ],

  programs: [
    {
      name: "Our Projects",
      href: "/projects",
      description:
        "Explore projects connected to MercyCare's wider community work.",
    },
    {
      name: "Events",
      href: "/events",
      description:
        "Discover events and opportunities to participate in the MercyCare community.",
    },
    {
      name: "Resources",
      href: "/resources",
      description:
        "Find care guides, health information, and family resources.",
    },
    {
      name: "Get Involved",
      href: "/volunteer",
      description:
        "Explore ways to support and participate in MercyCare programs.",
    },
  ],

  projects: [
    {
      name: "Our Programs",
      href: "/programs",
      description:
        "Explore the programs that connect with MercyCare's project work.",
    },
    {
      name: "Activities",
      href: "/activities",
      description:
        "Discover community activities connected to MercyCare's work.",
    },
    {
      name: "Events",
      href: "/events",
      description:
        "Find upcoming and past events across the MercyCare community.",
    },
    {
      name: "Volunteer",
      href: "/volunteer",
      description:
        "Find opportunities to contribute your time and skills.",
    },
  ],

  services: [
    {
      name: "Our Programs",
      href: "/programs",
      description:
        "Discover programs supporting wellbeing, families, and communities.",
    },
    {
      name: "Care Resources",
      href: "/resources",
      description:
        "Access practical care, health, family, and community resources.",
    },
    {
      name: "Get Started",
      href: "/services/get-started",
      description:
        "Learn how to begin exploring MercyCare services.",
    },
    {
      name: "Contact MercyCare",
      href: "/contact/service-enquiries",
      description:
        "Send a service enquiry or ask about available support.",
    },
  ],

  events: [
    {
      name: "Activities",
      href: "/activities",
      description:
        "Explore the wider community activities taking place through MercyCare.",
    },
    {
      name: "News",
      href: "/news",
      description:
        "Keep up with MercyCare announcements, updates, and community stories.",
    },
    {
      name: "Volunteer",
      href: "/volunteer",
      description:
        "Find ways to participate in MercyCare events and activities.",
    },
    {
      name: "Contact MercyCare",
      href: "/contact",
      description:
        "Get in touch about events, participation, or general enquiries.",
    },
  ],

  activities: [
    {
      name: "Events",
      href: "/events",
      description:
        "Discover upcoming and past MercyCare events.",
    },
    {
      name: "Programs",
      href: "/programs",
      description:
        "Explore the programs connected to MercyCare's community activities.",
    },
    {
      name: "Volunteer",
      href: "/volunteer",
      description:
        "Explore opportunities to participate in community activities.",
    },
    {
      name: "News",
      href: "/news",
      description:
        "Follow updates and stories from MercyCare activities.",
    },
  ],

  news: [
    {
      name: "Programs",
      href: "/programs",
      description:
        "Learn more about the programs behind MercyCare's community work.",
    },
    {
      name: "Projects",
      href: "/projects",
      description:
        "Explore MercyCare projects and their community focus.",
    },
    {
      name: "Resources",
      href: "/resources",
      description:
        "Find practical resources related to care, health, and wellbeing.",
    },
    {
      name: "Get Involved",
      href: "/volunteer",
      description:
        "Discover ways to participate in MercyCare's work.",
    },
  ],

  blog: [
    {
      name: "Programs",
      href: "/programs",
      description:
        "Explore the programs behind MercyCare's stories and initiatives.",
    },
    {
      name: "Projects",
      href: "/projects",
      description:
        "Discover the projects featured across MercyCare's work.",
    },
    {
      name: "Resources",
      href: "/resources",
      description:
        "Find practical resources and information for families and communities.",
    },
    {
      name: "News",
      href: "/news",
      description:
        "Read official MercyCare updates and announcements.",
    },
  ],

  resources: [
    {
      name: "Services",
      href: "/services",
      description:
        "Explore MercyCare services and available care pathways.",
    },
    {
      name: "Programs",
      href: "/programs",
      description:
        "Discover MercyCare's community-focused programs.",
    },
    {
      name: "Contact MercyCare",
      href: "/contact",
      description:
        "Contact MercyCare if you need help finding the right information.",
    },
    {
      name: "Frequently Asked Questions",
      href: "/resources/faq",
      description:
        "Find answers to common questions about MercyCare.",
    },
  ],

  gallery: [
    {
      name: "Programs",
      href: "/programs",
      description:
        "Explore the programs represented through MercyCare's stories.",
    },
    {
      name: "Events",
      href: "/events",
      description:
        "Discover the events and moments featured in the gallery.",
    },
    {
      name: "Activities",
      href: "/activities",
      description:
        "Explore community activities captured across MercyCare's work.",
    },
    {
      name: "News",
      href: "/news",
      description:
        "Read the latest stories and updates from MercyCare.",
    },
  ],

  volunteer: [
    {
      name: "Activities",
      href: "/activities",
      description:
        "Find community activities where volunteers can participate.",
    },
    {
      name: "Events",
      href: "/events",
      description:
        "Discover events and opportunities to get involved.",
    },
    {
      name: "Projects",
      href: "/projects",
      description:
        "Learn about projects where community participation can make a difference.",
    },
    {
      name: "Contact MercyCare",
      href: "/contact",
      description:
        "Contact MercyCare about volunteering and participation.",
    },
  ],

  careers: [
    {
      name: "About MercyCare",
      href: "/about",
      description:
        "Learn more about MercyCare, our story, values, and leadership.",
    },
    {
      name: "Leadership",
      href: "/about/leadership",
      description:
        "Meet the leadership behind MercyCare.",
    },
    {
      name: "Contact MercyCare",
      href: "/contact",
      description:
        "Contact MercyCare about career opportunities and enquiries.",
    },
  ],

  donate: [
    {
      name: "Programs",
      href: "/programs",
      description:
        "See the programs that your support can help strengthen.",
    },
    {
      name: "Projects",
      href: "/projects",
      description:
        "Explore MercyCare projects and community initiatives.",
    },
    {
      name: "Your Impact",
      href: "/donate/impact",
      description:
        "Learn about the difference support can help create.",
    },
    {
      name: "Contact MercyCare",
      href: "/contact",
      description:
        "Contact MercyCare about giving, partnerships, or support.",
    },
  ],

  contact: [
    {
      name: "Services",
      href: "/services",
      description:
        "Explore MercyCare's home health services.",
    },
    {
      name: "Programs",
      href: "/programs",
      description:
        "Discover MercyCare's programs and initiatives.",
    },
    {
      name: "Volunteer",
      href: "/volunteer",
      description:
        "Find ways to participate and support MercyCare.",
    },
    {
      name: "Resources",
      href: "/resources",
      description:
        "Find useful care, health, and community resources.",
    },
  ],
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
    .filter(
      (sibling) =>
        normalizePath(sibling.href) !== normalizePath(item.href),
    )
    .map((sibling) => ({
      name: sibling.name,
      href: sibling.href,
      description: getDescription(sibling, sectionLabel),
    }));
}

function getCrossSectionRelationships(
  sectionKey: string,
  currentPath: string,
): InternalRelationship[] {
  const relationships = crossSectionRelationships[sectionKey] ?? [];

  return relationships.filter(
    (relationship) =>
      normalizePath(relationship.href) !== normalizePath(currentPath),
  );
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

  const crossSection = getCrossSectionRelationships(
    sectionKey,
    normalizedPath,
  );

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
      crossSection,
      back: {
        name: parent
          ? `Back to ${parent.name}`
          : `Back to ${section.label}`,
        href: parent?.href ?? section.href,
      },
    };
  }

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
    crossSection,
    back: {
      name: parent
        ? `Back to ${parent.name}`
        : `Back to ${section.label}`,
      href: parent?.href ?? section.href,
    },
  };
}
