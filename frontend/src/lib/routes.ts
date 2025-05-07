export const routes = {
  // Main routes
  home: "/",
  dashboard: "/dashboard",
  events: "/events",
  projects: "/projects",
  leaderboard: "/leaderboard",
  activity: "/activity",
  profile: "/profile",
  settings: "/settings",
  notifications: "/notifications",
  help: "/help",

  // Auth routes
  login: "/login",
  signup: "/signup",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",

  // Event routes
  eventDetail: (slug: string) => `/events/${slug}`,

  // Project routes
  projectDetail: (slug: string) => `/projects/${slug}`,

  // Task routes
  taskDetail: (id: string) => `/tasks/${id}`,

  // Info pages
  about: "/about",
  howItWorks: "/how-it-works",
  contribute: "/contribute",
  faq: "/faq",
  terms: "/terms",
  privacy: "/privacy",
  contact: "/contact",
  team: "/team",

  // Organizer routes
  organize: "/organize",
  organizerDashboard: "/organizer/dashboard",
  organizerEvents: "/organizer/events",
  organizerProjects: "/organizer/projects",
  organizerContributors: "/organizer/contributors",
  organizerActivity: "/organizer/activity",
  organizerSettings: "/organizer/settings",
  organizerProfile: "/organizer/profile",

  // Organizer detail routes
  organizerEventDetail: (slug: string) => `/organizer/events/${slug}`,
  organizerProjectDetail: (slug: string) => `/organizer/projects/${slug}`,

  // Organizer creation routes
  organizerNewEvent: "/organizer/events/new",
  organizerNewProject: "/organizer/projects/new",

  // Organizer analytics routes
  organizerAnalyticsContributions: "/organizer/analytics/contributions",
  organizerAnalyticsContributors: "/organizer/analytics/contributors",
  organizerAnalyticsProjects: "/organizer/analytics/projects",
}

export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  EVENTS: {
    LIST: "/events",
    DETAIL: (slug: string) => `/events/${slug}`,
  },
  PROJECTS: {
    LIST: "/projects",
    DETAIL: (slug: string) => `/projects/${slug}`,
  },
  TASKS: {
    DETAIL: (id: string) => `/tasks/${id}`,
  },
  LEADERBOARD: "/leaderboard",
  ACTIVITY: "/activity",
  PROFILE: "/profile",
  SETTINGS: "/settings",
  NOTIFICATIONS: "/notifications",

  AUTH: {
    LOGIN: "/login",
    SIGNUP: "/signup",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
  },

  INFO: {
    ABOUT: "/about",
    HOW_IT_WORKS: "/how-it-works",
    CONTRIBUTE: "/contribute",
    FAQ: "/faq",
    TERMS: "/terms",
    PRIVACY: "/privacy",
    CONTACT: "/contact",
    TEAM: "/team",
  },

  ORGANIZE: "/organize",
  ORGANIZER: {
    DASHBOARD: "/organizer/dashboard",
    EVENTS: {
      LIST: "/organizer/events",
      DETAIL: (slug: string) => `/organizer/events/${slug}`,
      NEW: "/organizer/events/new",
    },
    PROJECTS: {
      LIST: "/organizer/projects",
      DETAIL: (slug: string) => `/organizer/projects/${slug}`,
      NEW: "/organizer/projects/new",
    },
    CONTRIBUTORS: "/organizer/contributors",
    ACTIVITY: "/organizer/activity",
    SETTINGS: "/organizer/settings",
    PROFILE: "/organizer/profile",
    ANALYTICS: {
      CONTRIBUTIONS: "/organizer/analytics/contributions",
      CONTRIBUTORS: "/organizer/analytics/contributors",
      PROJECTS: "/organizer/analytics/projects",
    },
  },
}
