import { AppError } from "@/lib/errors/app-error";

type RecordValue = Record<string, unknown>;

export function requireString(value: unknown, fieldName: string): string {
    if (typeof value !== "string" || value.trim().length === 0) {
        throw new AppError(`${fieldName} is required.`, {
            code: "BAD_REQUEST",
            statusCode: 400,
            exposeMessage: true,
        });
    }

    return value.trim();
}

export function requireNumber(value: unknown, fieldName: string): number {
    if (typeof value !== "number" || Number.isNaN(value)) {
        throw new AppError(`${fieldName} must be a valid number.`, {
            code: "BAD_REQUEST",
            statusCode: 400,
            exposeMessage: true,
        });
    }

    return value;
}

export function requireObject(value: unknown, fieldName: string): RecordValue {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
        throw new AppError(`${fieldName} must be an object.`, {
            code: "BAD_REQUEST",
            statusCode: 400,
            exposeMessage: true,
        });
    }

    return value as RecordValue;
}