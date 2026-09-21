export type NavigationItem = {
  name: string;
  href: string;
  children?: NavigationItem[];
};

export type SectionNavigation = {
  label: string;
  href: string;
  items: NavigationItem[];
};

export const mainNavigation: NavigationItem[] = [
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Events", href: "/events" },
  { name: "Activities", href: "/activities" },
  { name: "News", href: "/news" },
  { name: "Blog", href: "/blog" },
  { name: "Resources", href: "/resources" },
  { name: "Gallery", href: "/gallery" },
  { name: "Volunteer", href: "/volunteer" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export const sectionNavigation: Record<string, SectionNavigation> = {
  about: {
    label: "About MercyCare",
    href: "/about",
    items: [
      { name: "Who We Are", href: "/about" },
      { name: "Our Story", href: "/about/our-story" },
      { name: "Mission & Vision", href: "/about/mission-vision" },
      { name: "Core Values", href: "/about/values" },
      { name: "Objectives", href: "/about/objectives" },
      { name: "Leadership", href: "/about/leadership" },
      { name: "Our Team", href: "/about/our-team" },
      { name: "Partnerships", href: "/about/partnerships" },
    ],
  },

  programs: {
    label: "MercyCare Programs",
    href: "/programs",
    items: [
      { name: "Overview", href: "/programs" },
      { name: "Our Approach", href: "/programs/approach" },
      { name: "Program Areas", href: "/programs/areas" },
      { name: "Our Programs", href: "/programs/our-programs" },
      { name: "How We Work", href: "/programs/how-we-work" },
      { name: "Impact", href: "/programs/impact" },
      { name: "Partnerships", href: "/programs/partnerships" },
      { name: "Get Involved", href: "/programs/get-involved" },
    ],
  },

  projects: {
    label: "MercyCare Projects",
    href: "/projects",
    items: [
      { name: "Overview", href: "/projects" },
      { name: "Project Areas", href: "/projects/areas" },
      {
        name: "Our Projects",
        href: "/projects/our-projects",
        children: [
          { name: "Tuko Pamoja", href: "/projects/tuko-pamoja" },
          { name: "Mama na Mtoto", href: "/projects/mama-na-mtoto" },
        ],
      },
      { name: "How We Work", href: "/projects/how-we-work" },
      { name: "Impact", href: "/projects/impact" },
      { name: "Partnerships", href: "/projects/partnerships" },
      { name: "Get Involved", href: "/projects/get-involved" },
    ],
  },

  services: {
    label: "Home Health Services",
    href: "/services",
    items: [
      { name: "Overview", href: "/services" },
      { name: "Service Areas", href: "/services/areas" },
      {
        name: "Our Services",
        href: "/services/our-services",
        children: [
          { name: "Home Nursing", href: "/services/home-nursing" },
          { name: "Senior & Elderly Care", href: "/services/senior-elderly-care" },
          {
            name: "Special Needs Children",
            href: "/services/special-needs-children",
          },
          {
            name: "Post-Hospital & Recovery Care",
            href: "/services/post-hospital-recovery",
          },
          { name: "Chronic Care Support", href: "/services/chronic-care" },
          {
            name: "Palliative & Comfort Care",
            href: "/services/palliative-comfort-care",
          },
          { name: "Personal Care Assistance", href: "/services/personal-care" },
          {
            name: "Family & Caregiver Support",
            href: "/services/family-caregiver-support",
          },
        ],
      },
      { name: "How We Work", href: "/services/how-we-work" },
      { name: "Care Approach", href: "/services/care-approach" },
      { name: "Who We Serve", href: "/services/who-we-serve" },
      { name: "Quality & Safety", href: "/services/quality-safety" },
      { name: "Partnerships", href: "/services/partnerships" },
      { name: "Get Started", href: "/services/get-started" },
    ],
  },

  events: {
    label: "MercyCare Events",
    href: "/events",
    items: [
      { name: "Overview", href: "/events" },
      { name: "Upcoming Events", href: "/events/upcoming" },
      { name: "Past Events", href: "/events/past" },
      { name: "Event Calendar", href: "/events/calendar" },
      { name: "Community Events", href: "/events/community" },
      { name: "Health & Wellness Events", href: "/events/health-wellness" },
      { name: "Awareness Events", href: "/events/awareness" },
      { name: "Get Involved", href: "/events/get-involved" },
    ],
  },

  activities: {
    label: "MercyCare Activities",
    href: "/activities",
    items: [
      { name: "Overview", href: "/activities" },
      {
        name: "Community Outreach",
        href: "/activities/community-outreach",
      },
      {
        name: "Health & Wellness Activities",
        href: "/activities/health-wellness",
      },
      {
        name: "Senior Support Activities",
        href: "/activities/senior-support",
      },
      {
        name: "Family & Caregiver Activities",
        href: "/activities/family-caregiver",
      },
      {
        name: "Awareness & Education",
        href: "/activities/awareness-education",
      },
      {
        name: "Volunteer Activities",
        href: "/activities/volunteer",
      },
      {
        name: "Past Activities",
        href: "/activities/past",
      },
      {
        name: "Get Involved",
        href: "/activities/get-involved",
      },
    ],
  },

  news: {
    label: "MercyCare News",
    href: "/news",
    items: [
      { name: "Overview", href: "/news" },
      { name: "Latest News", href: "/news/latest" },
      { name: "Community News", href: "/news/community" },
      {
        name: "Health & Wellness News",
        href: "/news/health-wellness",
      },
      {
        name: "MercyCare Updates",
        href: "/news/updates",
      },
      {
        name: "Announcements",
        href: "/news/announcements",
      },
      {
        name: "Media & Press",
        href: "/news/media-press",
      },
      {
        name: "News Archive",
        href: "/news/archive",
      },
      {
        name: "Get Involved",
        href: "/news/get-involved",
      },
    ],
  },

  blog: {
    label: "MercyCare Media Center",
    href: "/blog",
    items: [
      { name: "Overview", href: "/blog" },
      { name: "Featured", href: "/blog/featured" },
      { name: "Stories", href: "/blog/stories" },

      {
        name: "Care & Wellness",
        href: "/blog/care-wellness",
        children: [
          { name: "Overview", href: "/blog/care-wellness" },
          {
            name: "Healthy Living",
            href: "/blog/care-wellness/healthy-living",
          },
          {
            name: "Senior Wellness",
            href: "/blog/care-wellness/senior-wellness",
          },
          {
            name: "Caregiving",
            href: "/blog/care-wellness/caregiving",
            children: [
              {
                name: "Family Caregiving",
                href: "/blog/care-wellness/caregiving/family-caregiving",
              },
              {
                name: "Caregiver Wellbeing",
                href: "/blog/care-wellness/caregiving/caregiver-wellbeing",
              },
              {
                name: "Practical Caregiving",
                href: "/blog/care-wellness/caregiving/practical-caregiving",
              },
              {
                name: "Caregiver Resources",
                href: "/blog/care-wellness/caregiving/caregiver-resources",
              },
            ],
          },
          {
            name: "Home-Based Care",
            href: "/blog/care-wellness/home-based-care",
          },
          {
            name: "Palliative & Comfort Care",
            href: "/blog/care-wellness/palliative-comfort-care",
          },
        ],
      },

      {
        name: "Family & Community",
        href: "/blog/family-community",
        children: [
          { name: "Overview", href: "/blog/family-community" },
          {
            name: "Family Life",
            href: "/blog/family-community/family-life",
          },
          {
            name: "Parenting & Child Wellbeing",
            href: "/blog/family-community/parenting-child-wellbeing",
          },
          {
            name: "Community Health",
            href: "/blog/family-community/community-health",
          },
          {
            name: "Community Voices",
            href: "/blog/family-community/community-voices",
          },
          {
            name: "Social Wellbeing",
            href: "/blog/family-community/social-wellbeing",
          },
        ],
      },

      {
        name: "Programs & Projects",
        href: "/blog/programs-projects",
        children: [
          {
            name: "Overview",
            href: "/blog/programs-projects",
          },
          {
            name: "Tuko Pamoja",
            href: "/blog/programs-projects/tuko-pamoja",
            children: [
              {
                name: "Stories",
                href: "/blog/programs-projects/tuko-pamoja/stories",
              },
              {
                name: "Wellness",
                href: "/blog/programs-projects/tuko-pamoja/wellness",
              },
              {
                name: "Community",
                href: "/blog/programs-projects/tuko-pamoja/community",
              },
              {
                name: "Updates",
                href: "/blog/programs-projects/tuko-pamoja/updates",
              },
            ],
          },
          {
            name: "Mama na Mtoto",
            href: "/blog/programs-projects/mama-na-mtoto",
            children: [
              {
                name: "Stories",
                href: "/blog/programs-projects/mama-na-mtoto/stories",
              },
              {
                name: "Maternal Wellbeing",
                href: "/blog/programs-projects/mama-na-mtoto/maternal-wellbeing",
              },
              {
                name: "Child Wellbeing",
                href: "/blog/programs-projects/mama-na-mtoto/child-wellbeing",
              },
              {
                name: "Community",
                href: "/blog/programs-projects/mama-na-mtoto/community",
              },
            ],
          },
          {
            name: "Other Initiatives",
            href: "/blog/programs-projects/other-initiatives",
          },
        ],
      },

      {
        name: "Voices",
        href: "/blog/voices",
        children: [
          { name: "Overview", href: "/blog/voices" },
          {
            name: "Community Voices",
            href: "/blog/voices/community-voices",
          },
          {
            name: "Caregiver Voices",
            href: "/blog/voices/caregiver-voices",
          },
          {
            name: "Professional Perspectives",
            href: "/blog/voices/professional-perspectives",
          },
          {
            name: "Partner Voices",
            href: "/blog/voices/partner-voices",
          },
          {
            name: "MercyCare Voices",
            href: "/blog/voices/mercycare-voices",
          },
        ],
      },

      {
        name: "Interviews",
        href: "/blog/interviews",
        children: [
          { name: "Overview", href: "/blog/interviews" },
          {
            name: "Community Conversations",
            href: "/blog/interviews/community-conversations",
          },
          {
            name: "Care Conversations",
            href: "/blog/interviews/care-conversations",
          },
          {
            name: "Expert Conversations",
            href: "/blog/interviews/expert-conversations",
          },
          {
            name: "Partner Conversations",
            href: "/blog/interviews/partner-conversations",
          },
        ],
      },

      {
        name: "Features",
        href: "/blog/features",
        children: [
          { name: "Overview", href: "/blog/features" },
          {
            name: "Long Reads",
            href: "/blog/features/long-reads",
          },
          {
            name: "Special Features",
            href: "/blog/features/special-features",
          },
          {
            name: "Field Stories",
            href: "/blog/features/field-stories",
          },
          {
            name: "Photo Features",
            href: "/blog/features/photo-features",
          },
        ],
      },

      {
        name: "Media",
        href: "/blog/media",
        children: [
          { name: "Overview", href: "/blog/media" },
          {
            name: "Videos",
            href: "/blog/media/videos",
          },
          {
            name: "Podcasts",
            href: "/blog/media/podcasts",
          },
          {
            name: "Photo Stories",
            href: "/blog/media/photo-stories",
          },
          {
            name: "Multimedia Features",
            href: "/blog/media/multimedia-features",
          },
        ],
      },

      {
        name: "Resources",
        href: "/blog/resources",
        children: [
          { name: "Overview", href: "/blog/resources" },
          {
            name: "Care Guides",
            href: "/blog/resources/care-guides",
          },
          {
            name: "Wellness Guides",
            href: "/blog/resources/wellness-guides",
          },
          {
            name: "Family Resources",
            href: "/blog/resources/family-resources",
          },
          {
            name: "Caregiver Resources",
            href: "/blog/resources/caregiver-resources",
          },
          {
            name: "Downloadable Resources",
            href: "/blog/resources/downloadable",
          },
        ],
      },

      {
        name: "Editorial",
        href: "/blog/editorial",
        children: [
          {
            name: "About the Media Center",
            href: "/blog/editorial/about",
          },
          {
            name: "Editorial Standards",
            href: "/blog/editorial/standards",
          },
          {
            name: "Contributors",
            href: "/blog/editorial/contributors",
          },
          {
            name: "Submit a Story",
            href: "/blog/editorial/submit",
          },
        ],
      },

      {
        name: "Archive",
        href: "/blog/archive",
        children: [
          { name: "Overview", href: "/blog/archive" },
          {
            name: "By Year",
            href: "/blog/archive/year",
          },
          {
            name: "By Category",
            href: "/blog/archive/category",
          },
          {
            name: "By Topic",
            href: "/blog/archive/topic",
          },
          {
            name: "Search",
            href: "/blog/archive/search",
          },
        ],
      },

      { name: "Get Involved", href: "/blog/get-involved" },
    ],
  },

  resources: {
    label: "MercyCare Resources",
    href: "/resources",
    items: [
      { name: "All Resources", href: "/resources" },
      { name: "Care Guides", href: "/resources/care-guides" },
      {
        name: "Health Information",
        href: "/resources/health-information",
      },
    ],
  },

  gallery: {
    label: "MercyCare Gallery",
    href: "/gallery",
    items: [
      { name: "Overview", href: "/gallery" },
      {
        name: "Photo Gallery",
        href: "/gallery/photos",
        children: [
          { name: "Overview", href: "/gallery/photos" },
          {
            name: "Community & Outreach",
            href: "/gallery/photos/community-outreach",
          },
          {
            name: "Health & Wellness",
            href: "/gallery/photos/health-wellness",
          },
          {
            name: "Tuko Pamoja",
            href: "/gallery/photos/tuko-pamoja",
          },
          {
            name: "Mama na Mtoto",
            href: "/gallery/photos/mama-na-mtoto",
          },
          {
            name: "Events & Activities",
            href: "/gallery/photos/events-activities",
          },
        ],
      },
      {
        name: "Stories in Pictures",
        href: "/gallery/stories-in-pictures",
      },
      {
        name: "Videos",
        href: "/gallery/videos",
      },
      {
        name: "Campaigns & Awareness",
        href: "/gallery/campaigns-awareness",
      },
      {
        name: "Community Moments",
        href: "/gallery/community-moments",
      },
      {
        name: "Gallery Archive",
        href: "/gallery/archive",
      },
      {
        name: "Get Involved",
        href: "/gallery/get-involved",
      },
    ],
  },

  volunteer: {
    label: "Volunteer With MercyCare",
    href: "/volunteer",
    items: [
      { name: "Overview", href: "/volunteer" },
      { name: "Volunteer With Us", href: "/volunteer/with-us" },
      { name: "Opportunities", href: "/volunteer/opportunities" },
      { name: "How It Works", href: "/volunteer/how-it-works" },
      { name: "Volunteer Areas", href: "/volunteer/areas" },
      { name: "Volunteer Requirements", href: "/volunteer/requirements" },
      { name: "Get Involved", href: "/volunteer/get-involved" },
    ],
  },

  careers: {
    label: "Careers at MercyCare",
    href: "/careers",
    items: [
      { name: "Careers at MercyCare", href: "/careers" },
      { name: "Open Positions", href: "/careers/open-positions" },
    ],
  },

  contact: {
    label: "Contact MercyCare",
    href: "/contact",
    items: [
      { name: "Contact Us", href: "/contact" },
      { name: "Find Us", href: "/contact/find-us" },
      { name: "Send an Enquiry", href: "/contact/enquiry" },
    ],
  },

  donate: {
    label: "Support MercyCare",
    href: "/donate",
    items: [
      { name: "Donate", href: "/donate" },
      { name: "Ways to Give", href: "/donate/ways-to-give" },
      { name: "Your Impact", href: "/donate/impact" },
    ],
  },
};

export function getContextualNavigation(pathname: string): {
  navigation: NavigationItem[];
  label: string;
} {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return {
      navigation: mainNavigation,
      label: "Main navigation",
    };
  }

  const section = segments[0];
  const sectionConfig = sectionNavigation[section];

  if (!sectionConfig) {
    return {
      navigation: mainNavigation,
      label: "Main navigation",
    };
  }

  if (segments.length === 1) {
    return {
      navigation: sectionConfig.items,
      label: sectionConfig.label,
    };
  }

  let bestNavigation = sectionConfig.items;
  let bestLabel = sectionConfig.label;

  const findContext = (
    items: NavigationItem[],
  ): void => {
    for (const item of items) {
      const itemPath = item.href.replace(/\/$/, "");
      const normalizedPath = pathname.replace(/\/$/, "");

      if (
        normalizedPath === itemPath ||
        normalizedPath.startsWith(`${itemPath}/`)
      ) {
        if (item.children?.length) {
          bestNavigation = item.children;
          bestLabel = item.name;

          findContext(item.children);
        }
      }
    }
  };

  findContext(sectionConfig.items);

  return {
    navigation: bestNavigation,
    label: bestLabel,
  };
}

