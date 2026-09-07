export type NavigationItem = {
  name: string;
  href: string;
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
      { name: "All Projects", href: "/projects" },
      { name: "Tuko Pamoja", href: "/projects/tuko-pamoja" },
      { name: "Mama na Mtoto", href: "/projects/mama-na-mtoto" },
    ],
  },

  services: {
    label: "Home Health Services",
    href: "/services",
    items: [
      { name: "All Services", href: "/services" },
      { name: "Home Nursing", href: "/services/home-nursing" },
      {
        name: "Special Needs Children",
        href: "/services/special-needs-children",
      },
    ],
  },

  events: {
    label: "MercyCare Events",
    href: "/events",
    items: [
      { name: "All Events", href: "/events" },
      { name: "Upcoming Events", href: "/events/upcoming" },
      { name: "Past Events", href: "/events/past" },
    ],
  },

  activities: {
    label: "MercyCare Activities",
    href: "/activities",
    items: [
      { name: "All Activities", href: "/activities" },
      {
        name: "Community Activities",
        href: "/activities/community",
      },
      {
        name: "Health Activities",
        href: "/activities/health",
      },
    ],
  },

  news: {
    label: "MercyCare News",
    href: "/news",
    items: [
      { name: "Latest News", href: "/news" },
      { name: "Announcements", href: "/news/announcements" },
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