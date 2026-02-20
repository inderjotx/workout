const REQUIRED_SERVER_ENV_KEYS = [
    "DATABASE_URL",
    "BETTER_AUTH_SECRET",
    "GOOGLE_CLIENT_ID",
    "GOOGLE_CLIENT_SECRET",
] as const;

export type RequiredServerEnvKey = (typeof REQUIRED_SERVER_ENV_KEYS)[number];

export function getMissingServerEnvKeys(): RequiredServerEnvKey[] {
    return REQUIRED_SERVER_ENV_KEYS.filter((key) => {
        const value = process.env[key];
        return typeof value !== "string" || value.length === 0;
    });
}

export function validateServerEnv(): void {
    const missingKeys = getMissingServerEnvKeys();

    if (missingKeys.length === 0) {
        return;
    }

    throw new Error(
        `Missing required environment variables: ${missingKeys.join(", ")}`,
    );
}