export const ROUTES = {
    home: "/",
    signIn: "/auth/sign-in",
    onboarding: "/onboarding",
    workouts: "/workouts",
    templates: "/templates",
    diet: "/diet",
    profile: "/profile",
} as const;

export const APP_ROUTES = [
    ROUTES.onboarding,
    ROUTES.workouts,
    ROUTES.templates,
    ROUTES.diet,
    ROUTES.profile,
] as const;