/*
Author: Luca Scaringella
GitHub: LucaCode
Copyright(c) Luca Scaringella
 */

export class AuthTokenExpiredError extends Error {
  public readonly expiry: Date;
  public readonly badAuthToken: boolean = true;

  constructor(message: string, expiry: Date) {
    super(message);
    this.name = 'AuthTokenExpiredError';
    this.expiry = expiry;
  }
}

export class AuthTokenInvalidError extends Error {
  public readonly badAuthToken: boolean = true;

  constructor(message: string) {
    super(message);
    this.name = 'AuthTokenInvalidError';
  }
}

export class AuthTokenNotBeforeError extends Error {
  public readonly date: Date;
  public readonly badAuthToken: boolean = false;

  constructor(message: string, date: Date) {
    super(message);
    this.name = 'AuthTokenNotBeforeError';
    this.date = date;
  }
}

// For any other auth token error.
export class AuthTokenError extends Error {
  public readonly badAuthToken: boolean = true;

  constructor(message: string) {
    super(message);
    this.name = 'AuthTokenError';
  }
}

// For any other auth error; not specifically related to the auth token itself.
export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
  }
}

export class SilentMiddlewareBlockedError extends Error {
  public readonly type: string;

  constructor(message: string, type: string) {
    super(message);
    this.name = 'SilentMiddlewareBlockedError';
    this.type = type;
  }
}

export class InvalidActionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidActionError';
  }
}

export class InvalidArgumentsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidArgumentsError';
  }
}

export class InvalidOptionsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidOptionsError';
  }
}

export class InvalidMessageError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidMessageError';
  }
}

export class SocketProtocolError extends Error {
  public readonly code: number;

  constructor(message: string, code: number) {
    super(message);
    this.name = 'SocketProtocolError';
    this.code = code;
  }
}

export class ServerProtocolError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ServerProtocolError';
  }
}

export class HTTPServerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'HTTPServerError';
  }
}

export class ResourceLimitError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ResourceLimitError';
  }
}

export class TimeoutError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TimeoutError';
  }
}

export class BadConnectionError extends Error {
  public readonly type: string;

  constructor(message: string, type: string) {
    super(message);
    this.name = 'BadConnectionError';
    this.type = type;
  }
}

export class BrokerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BrokerError';
  }
}

export class ProcessExitError extends Error {
  public readonly code: number;

  constructor(message: string, code: number) {
    super(message);
    this.name = 'ProcessExitError';
    this.code = code;
  }
}

export class UnknownError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnknownError';
  }
}

export const socketProtocolIgnoreStatuses = {
  1000: 'Socket closed normally',
  1001: 'Socket hung up'
};

export const socketProtocolErrorStatuses = {
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
  4009: 'Server socket handshake failed'
};