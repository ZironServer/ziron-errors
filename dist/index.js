"use strict";
/*
Author: Luca Scaringella
GitHub: LucaCode
Copyright(c) Luca Scaringella
 */
Object.defineProperty(exports, "__esModule", { value: true });
class AuthTokenExpiredError extends Error {
    constructor(message, expiry) {
        super(message);
        this.name = 'AuthTokenExpiredError';
        this.expiry = expiry;
    }
}
exports.AuthTokenExpiredError = AuthTokenExpiredError;
class AuthTokenInvalidError extends Error {
    constructor(message) {
        super(message);
        this.name = 'AuthTokenInvalidError';
    }
}
exports.AuthTokenInvalidError = AuthTokenInvalidError;
class AuthTokenNotBeforeError extends Error {
    constructor(message, date) {
        super(message);
        this.name = 'AuthTokenNotBeforeError';
        this.date = date;
    }
}
exports.AuthTokenNotBeforeError = AuthTokenNotBeforeError;
// For any other auth token error.
class AuthTokenError extends Error {
    constructor(message) {
        super(message);
        this.name = 'AuthTokenError';
    }
}
exports.AuthTokenError = AuthTokenError;
// For any other auth error; not specifically related to the auth token itself.
class AuthError extends Error {
    constructor(message) {
        super(message);
        this.name = 'AuthError';
    }
}
exports.AuthError = AuthError;
class SilentMiddlewareBlockedError extends Error {
    constructor(message, type) {
        super(message);
        this.name = 'SilentMiddlewareBlockedError';
        this.type = type;
    }
}
exports.SilentMiddlewareBlockedError = SilentMiddlewareBlockedError;
class InvalidActionError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidActionError';
    }
}
exports.InvalidActionError = InvalidActionError;
class InvalidArgumentsError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidArgumentsError';
    }
}
exports.InvalidArgumentsError = InvalidArgumentsError;
class InvalidOptionsError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidOptionsError';
    }
}
exports.InvalidOptionsError = InvalidOptionsError;
class InvalidMessageError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidMessageError';
    }
}
exports.InvalidMessageError = InvalidMessageError;
class SocketProtocolError extends Error {
    constructor(message, code) {
        super(message);
        this.name = 'SocketProtocolError';
        this.code = code;
    }
}
exports.SocketProtocolError = SocketProtocolError;
class ServerProtocolError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ServerProtocolError';
    }
}
exports.ServerProtocolError = ServerProtocolError;
class HTTPServerError extends Error {
    constructor(message) {
        super(message);
        this.name = 'HTTPServerError';
    }
}
exports.HTTPServerError = HTTPServerError;
class ResourceLimitError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ResourceLimitError';
    }
}
exports.ResourceLimitError = ResourceLimitError;
class TimeoutError extends Error {
    constructor(message) {
        super(message);
        this.name = 'TimeoutError';
    }
}
exports.TimeoutError = TimeoutError;
class BadConnectionError extends Error {
    constructor(message, type) {
        super(message);
        this.name = 'BadConnectionError';
        this.type = type;
    }
}
exports.BadConnectionError = BadConnectionError;
class BrokerError extends Error {
    constructor(message) {
        super(message);
        this.name = 'BrokerError';
    }
}
exports.BrokerError = BrokerError;
class ProcessExitError extends Error {
    constructor(message, code) {
        super(message);
        this.name = 'ProcessExitError';
        this.code = code;
    }
}
exports.ProcessExitError = ProcessExitError;
class UnknownError extends Error {
    constructor(message) {
        super(message);
        this.name = 'UnknownError';
    }
}
exports.UnknownError = UnknownError;
exports.socketProtocolIgnoreStatuses = {
    1000: 'Socket closed normally',
    1001: 'Socket hung up'
};
exports.socketProtocolErrorStatuses = {
    1001: 'Socket was disconnected',
    1002: 'A WebSocket protocol error was encountered',
    1003: 'Server terminated socket because it received invalid data',
    1005: 'Socket closed without status code',
    1006: 'Socket hung up',
    1007: 'Message format was incorrect',
    1008: 'Encountered a policy violation',
    1009: 'Message was too big to process',
    1010: 'Client ended the connection because the server did not comply with extension requirements',
    1011: 'Server encountered an unexpected fatal condition',
    4000: 'Server ping timed out',
    4001: 'Client pong timed out',
    4002: 'Server failed to sign auth token',
    4003: 'Failed to complete handshake',
    4004: 'Client failed to save auth token',
    4005: 'Did not receive #handshake from client before timeout',
    4006: 'Failed to bind socket to message broker',
    4007: 'Client connection establishment timed out',
    4008: 'Server rejected handshake from client',
    4009: 'Server received a message before the client handshake'
};
// Properties related to error domains cannot be serialized.
const unserializableErrorProperties = {
    domain: 1,
    domainEmitter: 1,
    domainThrown: 1
};
/**
 * Convert an error into a JSON-compatible type (but still can contain cycle structure)
 * which can later be hydrated back to its 'original' form.
 * @param error
 * @param includeStackTrace
 */
function dehydrateError(error, includeStackTrace) {
    if (error && typeof error === 'object') {
        const dehydratedError = {
            message: error.message
        };
        if (includeStackTrace) {
            dehydratedError.stack = error.stack;
        }
        for (const key in error) {
            if (!unserializableErrorProperties[key]) {
                dehydratedError[key] = error[key];
            }
        }
        return dehydratedError;
    }
    else if (typeof error === 'function') {
        return '[function ' + (error.name || 'anonymous') + ']';
    }
    else {
        return error;
    }
}
exports.dehydrateError = dehydrateError;
/**
 * Convert a dehydrated error back to its 'original' form.
 * @param error
 */
function hydrateError(error) {
    if (error != null) {
        if (typeof error === 'object') {
            const tmpError = new Error(error.message);
            for (const key in error) {
                if (error.hasOwnProperty(key)) {
                    tmpError[key] = error[key];
                }
            }
            return tmpError;
        }
        else {
            return error;
        }
    }
    return null;
}
exports.hydrateError = hydrateError;
//# sourceMappingURL=index.js.map