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
    label: "MercyCare Blog",
    href: "/blog",
    items: [
      { name: "All Articles", href: "/blog" },
      { name: "Featured", href: "/blog/featured" },
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
      { name: "All Media", href: "/gallery" },
      { name: "Photos", href: "/gallery/photos" },
      { name: "Videos", href: "/gallery/videos" },
    ],
  },

  volunteer: {
    label: "Volunteer With MercyCare",
    href: "/volunteer",
    items: [
      { name: "Volunteer With Us", href: "/volunteer" },
      { name: "Opportunities", href: "/volunteer/opportunities" },
      { name: "How It Works", href: "/volunteer/how-it-works" },
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
