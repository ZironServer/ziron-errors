export declare class AuthTokenExpiredError extends Error {
    readonly expiry: number;
    constructor(message: string, expiry: number);
}
export declare class AuthTokenInvalidError extends Error {
    constructor(message: string);
}
export declare class AuthTokenNotBeforeError extends Error {
    readonly date: any;
    constructor(message: string, date: any);
}
export declare class AuthTokenError extends Error {
    constructor(message: string);
}
export declare class AuthError extends Error {
    constructor(message: string);
}
export declare class SilentMiddlewareBlockedError extends Error {
    readonly type: string;
    constructor(message: string, type: string);
}
export declare class InvalidActionError extends Error {
    constructor(message: string);
}
export declare class InvalidArgumentsError extends Error {
    constructor(message: string);
}
export declare class InvalidOptionsError extends Error {
    constructor(message: string);
}
export declare class InvalidMessageError extends Error {
    constructor(message: string);
}
export declare class SocketProtocolError extends Error {
    readonly code: number;
    constructor(message: string, code: number);
}
export declare class ServerProtocolError extends Error {
    constructor(message: string);
}
export declare class HTTPServerError extends Error {
    constructor(message: string);
}
export declare class ResourceLimitError extends Error {
    constructor(message: string);
}
export declare class TimeoutError extends Error {
    constructor(message: string);
}
export declare class BadConnectionError extends Error {
    readonly type: string;
    constructor(message: string, type: string);
}
export declare class BrokerError extends Error {
    constructor(message: string);
}
export declare class ProcessExitError extends Error {
    readonly code: number;
    constructor(message: string, code: number);
}
export declare class UnknownError extends Error {
    constructor(message: string);
}
export declare const socketProtocolIgnoreStatuses: {
    1000: string;
    1001: string;
};
export declare const socketProtocolErrorStatuses: {
    1001: string;
    1002: string;
    1003: string;
    1005: string;
    1006: string;
    1007: string;
    1008: string;
    1009: string;
    1010: string;
    1011: string;
    4000: string;
    4001: string;
    4002: string;
    4003: string;
    4004: string;
    4005: string;
    4006: string;
    4007: string;
    4008: string;
    4009: string;
};
/**
 * Convert an error into a JSON-compatible type (but still can contain cycle structure)
 * which can later be hydrated back to its 'original' form.
 * @param error
 * @param includeStackTrace
 */
export declare function dehydrateError(error: any, includeStackTrace: boolean): any;
/**
 * Convert a dehydrated error back to its 'original' form.
 * @param error
 */
export declare function hydrateError(error: any): any;
