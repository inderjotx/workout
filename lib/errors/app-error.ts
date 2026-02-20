export type AppErrorCode =
    | "BAD_REQUEST"
    | "UNAUTHORIZED"
    | "FORBIDDEN"
    | "NOT_FOUND"
    | "CONFLICT"
    | "INTERNAL_ERROR";

type AppErrorOptions = {
    code: AppErrorCode;
    statusCode?: number;
    exposeMessage?: boolean;
    cause?: unknown;
};

const FALLBACK_USER_MESSAGE = "Something went wrong. Please try again.";

export class AppError extends Error {
    readonly code: AppErrorCode;
    readonly statusCode: number;
    readonly exposeMessage: boolean;

    constructor(message: string, options: AppErrorOptions) {
        super(message, { cause: options.cause });
        this.name = "AppError";
        this.code = options.code;
        this.statusCode = options.statusCode ?? 500;
        this.exposeMessage = options.exposeMessage ?? false;
    }
}

export function toUserMessage(error: unknown): string {
    if (error instanceof AppError) {
        return error.exposeMessage ? error.message : FALLBACK_USER_MESSAGE;
    }

    if (error instanceof Error && error.message) {
        return FALLBACK_USER_MESSAGE;
    }

    return FALLBACK_USER_MESSAGE;
}