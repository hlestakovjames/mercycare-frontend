import {
  sectionNavigation,
  type NavigationItem,
} from "@/components/navigation/navigation";

export type BlogRelationship = {
  name: string;
  href: string;
  description: string;
};

export type BlogRelationshipContext = {
  title: string;
  description: string;
  related: BlogRelationship[];
  back: {
    name: string;
    href: string;
  };
};

const blogNavigation = sectionNavigation.blog.items;

const mediaCenterRelated: BlogRelationship[] = [
  {
    name: "Featured",
    href: "/blog/featured",
    description: "Highlighted stories and selected perspectives from MercyCare.",
  },
  {
    name: "Stories",
    href: "/blog/stories",
    description: "Human stories, experiences and community narratives.",
  },
  {
    name: "Care & Wellness",
    href: "/blog/care-wellness",
    description: "Practical insights on health, wellbeing and caregiving.",
  },
  {
    name: "Family & Community",
    href: "/blog/family-community",
    description: "Perspectives on family life, community health and social wellbeing.",
  },
  {
    name: "Programs & Projects",
    href: "/blog/programs-projects",
    description: "Stories and insights connected to MercyCare initiatives.",
  },
  {
    name: "Voices",
    href: "/blog/voices",
    description: "Community, caregiver, professional and partner perspectives.",
  },
  {
    name: "Interviews",
    href: "/blog/interviews",
    description: "Conversations with people shaping care and community wellbeing.",
  },
  {
    name: "Features",
    href: "/blog/features",
    description: "Long-form stories, field features and special coverage.",
  },
  {
    name: "Media",
    href: "/blog/media",
    description: "Videos, podcasts, photo stories and multimedia content.",
  },
  {
    name: "Resources",
    href: "/blog/resources",
    description: "Guides and useful resources for families and caregivers.",
  },
  {
    name: "Editorial",
    href: "/blog/editorial",
    description: "Editorial standards, contributors and publishing information.",
  },
  {
    name: "Archive",
    href: "/blog/archive",
    description: "Explore the wider MercyCare Media Center archive.",
  },
];

const relatedBySection: Record<string, BlogRelationship[]> = {
  "/blog/care-wellness": [
    {
      name: "Family & Community",
      href: "/blog/family-community",
      description: "Explore the family and community dimensions of wellbeing.",
    },
    {
      name: "Voices",
      href: "/blog/voices",
      description: "Hear perspectives from caregivers, professionals and communities.",
    },
    {
      name: "Resources",
      href: "/blog/resources",
      description: "Find practical guides that complement care and wellness topics.",
    },
    {
      name: "Stories",
      href: "/blog/stories",
      description: "Discover real stories connected to care and wellbeing.",
    },
    {
      name: "Interviews",
      href: "/blog/interviews",
      description: "Explore conversations around health, care and wellbeing.",
    },
  ],

  "/blog/care-wellness/caregiving": [
    {
      name: "Family Caregiving",
      href: "/blog/care-wellness/caregiving/family-caregiving",
      description: "Insights for people supporting loved ones at home.",
    },
    {
      name: "Caregiver Wellbeing",
      href: "/blog/care-wellness/caregiving/caregiver-wellbeing",
      description: "Support and wellbeing considerations for caregivers.",
    },
    {
      name: "Practical Caregiving",
      href: "/blog/care-wellness/caregiving/practical-caregiving",
      description: "Practical guidance for everyday caregiving situations.",
    },
    {
      name: "Caregiver Resources",
      href: "/blog/care-wellness/caregiving/caregiver-resources",
      description: "Useful resources for caregivers and families.",
    },
    {
      name: "Resources",
      href: "/blog/resources",
      description: "Browse wider MercyCare guides and resources.",
    },
    {
      name: "Voices",
      href: "/blog/voices",
      description: "Hear experiences from caregivers and the wider community.",
    },
  ],

  "/blog/family-community": [
    {
      name: "Care & Wellness",
      href: "/blog/care-wellness",
      description: "Explore health, wellness and caregiving perspectives.",
    },
    {
      name: "Voices",
      href: "/blog/voices",
      description: "Hear directly from communities, caregivers and partners.",
    },
    {
      name: "Interviews",
      href: "/blog/interviews",
      description: "Discover conversations around family and community wellbeing.",
    },
    {
      name: "Stories",
      href: "/blog/stories",
      description: "Read stories from families and communities.",
    },
    {
      name: "Resources",
      href: "/blog/resources",
      description: "Find useful family and caregiver resources.",
    },
  ],

  "/blog/programs-projects": [
    {
      name: "Tuko Pamoja",
      href: "/blog/programs-projects/tuko-pamoja",
      description: "Explore stories and updates from Tuko Pamoja.",
    },
    {
      name: "Mama na Mtoto",
      href: "/blog/programs-projects/mama-na-mtoto",
      description: "Explore maternal and child wellbeing stories.",
    },
    {
      name: "Stories",
      href: "/blog/stories",
      description: "Discover stories connected to MercyCare's work.",
    },
    {
      name: "Features",
      href: "/blog/features",
      description: "Explore deeper stories and special features.",
    },
    {
      name: "Media",
      href: "/blog/media",
      description: "Explore multimedia coverage of MercyCare work.",
    },
  ],

  "/blog/programs-projects/tuko-pamoja": [
    {
      name: "Stories",
      href: "/blog/programs-projects/tuko-pamoja/stories",
      description: "Stories from the Tuko Pamoja initiative.",
    },
    {
      name: "Wellness",
      href: "/blog/programs-projects/tuko-pamoja/wellness",
      description: "Wellness-focused content from Tuko Pamoja.",
    },
    {
      name: "Community",
      href: "/blog/programs-projects/tuko-pamoja/community",
      description: "Community perspectives and experiences.",
    },
    {
      name: "Updates",
      href: "/blog/programs-projects/tuko-pamoja/updates",
      description: "Updates and developments from the initiative.",
    },
    {
      name: "Voices",
      href: "/blog/voices",
      description: "Hear perspectives connected to community work.",
    },
    {
      name: "Features",
      href: "/blog/features",
      description: "Explore wider MercyCare features and field stories.",
    },
  ],

  "/blog/programs-projects/mama-na-mtoto": [
    {
      name: "Stories",
      href: "/blog/programs-projects/mama-na-mtoto/stories",
      description: "Stories from the Mama na Mtoto initiative.",
    },
    {
      name: "Maternal Wellbeing",
      href: "/blog/programs-projects/mama-na-mtoto/maternal-wellbeing",
      description: "Content focused on maternal wellbeing.",
    },
    {
      name: "Child Wellbeing",
      href: "/blog/programs-projects/mama-na-mtoto/child-wellbeing",
      description: "Content focused on child wellbeing.",
    },
    {
      name: "Community",
      href: "/blog/programs-projects/mama-na-mtoto/community",
      description: "Community stories and experiences.",
    },
    {
      name: "Family & Community",
      href: "/blog/family-community",
      description: "Explore wider family and community perspectives.",
    },
    {
      name: "Resources",
      href: "/blog/resources",
      description: "Find useful family and caregiver resources.",
    },
  ],

  "/blog/voices": [
    {
      name: "Stories",
      href: "/blog/stories",
      description: "Discover stories from people and communities.",
    },
    {
      name: "Interviews",
      href: "/blog/interviews",
      description: "Explore conversations with people shaping care.",
    },
    {
      name: "Care & Wellness",
      href: "/blog/care-wellness",
      description: "Connect voices with practical care and wellness topics.",
    },
    {
      name: "Family & Community",
      href: "/blog/family-community",
      description: "Explore family and community perspectives.",
    },
    {
      name: "Features",
      href: "/blog/features",
      description: "Explore deeper stories and special features.",
    },
  ],

  "/blog/interviews": [
    {
      name: "Voices",
      href: "/blog/voices",
      description: "Explore perspectives from the people behind the stories.",
    },
    {
      name: "Care & Wellness",
      href: "/blog/care-wellness",
      description: "Explore practical care and wellness topics.",
    },
    {
      name: "Family & Community",
      href: "/blog/family-community",
      description: "Discover conversations around family and community.",
    },
    {
      name: "Features",
      href: "/blog/features",
      description: "Explore deeper stories and special coverage.",
    },
    {
      name: "Media",
      href: "/blog/media",
      description: "Explore multimedia conversations and stories.",
    },
  ],

  "/blog/features": [
    {
      name: "Stories",
      href: "/blog/stories",
      description: "Explore the stories behind MercyCare's work.",
    },
    {
      name: "Voices",
      href: "/blog/voices",
      description: "Hear perspectives from communities and caregivers.",
    },
    {
      name: "Interviews",
      href: "/blog/interviews",
      description: "Explore conversations and expert perspectives.",
    },
    {
      name: "Media",
      href: "/blog/media",
      description: "Explore visual and multimedia storytelling.",
    },
    {
      name: "Programs & Projects",
      href: "/blog/programs-projects",
      description: "Discover stories connected to MercyCare initiatives.",
    },
  ],

  "/blog/media": [
    {
      name: "Stories",
      href: "/blog/stories",
      description: "Explore written stories from MercyCare and its communities.",
    },
    {
      name: "Features",
      href: "/blog/features",
      description: "Discover deeper visual and editorial features.",
    },
    {
      name: "Voices",
      href: "/blog/voices",
      description: "Hear from caregivers, professionals and communities.",
    },
    {
      name: "Interviews",
      href: "/blog/interviews",
      description: "Explore conversations through different media formats.",
    },
    {
      name: "Archive",
      href: "/blog/archive",
      description: "Browse the wider MercyCare Media Center archive.",
    },
  ],

  "/blog/resources": [
    {
      name: "Care & Wellness",
      href: "/blog/care-wellness",
      description: "Explore practical health, care and wellness topics.",
    },
    {
      name: "Family & Community",
      href: "/blog/family-community",
      description: "Find content related to families and communities.",
    },
    {
      name: "Stories",
      href: "/blog/stories",
      description: "Read experiences that bring care topics to life.",
    },
    {
      name: "Voices",
      href: "/blog/voices",
      description: "Explore perspectives from caregivers and communities.",
    },
    {
      name: "Archive",
      href: "/blog/archive",
      description: "Browse older resources and published content.",
    },
  ],

  "/blog/editorial": [
    {
      name: "Stories",
      href: "/blog/stories",
      description: "Explore the content published through the Media Center.",
    },
    {
      name: "Features",
      href: "/blog/features",
      description: "Explore long-form and special editorial work.",
    },
    {
      name: "Voices",
      href: "/blog/voices",
      description: "Explore perspectives published by the Media Center.",
    },
    {
      name: "Resources",
      href: "/blog/resources",
      description: "Explore the Media Center's resource content.",
    },
    {
      name: "Archive",
      href: "/blog/archive",
      description: "Browse the wider publication archive.",
    },
  ],

  "/blog/archive": mediaCenterRelated,
};

function findNavigationItem(
  pathname: string,
  items: NavigationItem[],
  parent: NavigationItem | null = null,
): {
  item: NavigationItem;
  parent: NavigationItem | null;
} | null {
  for (const item of items) {
    if (item.href === pathname) {
      return {
        item,
        parent,
      };
    }

    if (item.children) {
      const found = findNavigationItem(pathname, item.children, item);

      if (found) {
        return found;
      }
    }
  }

  return null;
}

function getFallbackContext(): BlogRelationshipContext {
  return {
    title: "Explore the Media Center",
    description:
      "Move between stories, perspectives, resources and other parts of the MercyCare Media Center.",
    related: mediaCenterRelated,
    back: {
      name: "Back to Media Center",
      href: "/blog",
    },
  };
}

function getRelatedForContext(
  contextPath: string,
  children: NavigationItem[] | undefined,
): BlogRelationship[] {
  if (relatedBySection[contextPath]) {
    return relatedBySection[contextPath];
  }

  if (children?.length) {
    return children.map((child) => ({
      name: child.name,
      href: child.href,
      description: `Explore ${child.name.toLowerCase()} within this MercyCare Media Center section.`,
    }));
  }

  return mediaCenterRelated;
}

export function getBlogRelationshipContext(
  pathname: string,
): BlogRelationshipContext | null {
  if (pathname === "/blog") {
    return null;
  }

  const match = findNavigationItem(pathname, blogNavigation);

  if (!match) {
    return getFallbackContext();
  }

  const { item, parent } = match;

  if (parent) {
    const parentChildren = parent.children;

    return {
      title: `Explore ${parent.name}`,
      description: `Continue exploring ${parent.name.toLowerCase()} or discover related MercyCare Media Center content.`,
      related: getRelatedForContext(parent.href, parentChildren),
      back: {
        name: `Back to ${parent.name}`,
        href: parent.href,
      },
    };
  }

  return {
    title: `Explore ${item.name}`,
    description: `Continue exploring ${item.name.toLowerCase()} or discover related areas of the MercyCare Media Center.`,
    related: getRelatedForContext(item.href, item.children),
    back: {
      name: "Back to Media Center",
      href: "/blog",
    },
  };
}
