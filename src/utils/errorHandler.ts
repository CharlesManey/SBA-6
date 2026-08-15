


export class NetworkError extends Error {
  constructor (message: string) {
    super(message);
    this.name = "NetworkError";
    Object.setPrototypeOf(this, NetworkError.prototype);
  }
}

export class NotFoundError extends Error {
  constructor (message: string) {
    super(message);
    this.name = "NotFoundError";
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

export class ServerError extends Error {
  constructor (message: string) {
    super(message);
    this.name = "ServerError";
    Object.setPrototypeOf(this, ServerError.prototype);
  }
}

export function apiErrorHandler(response: Response): void {
  if (response.status === 404) {
    throw new NotFoundError(`Resource not found: ${response.url}`);
  } else if (response.status >= 500) {
    throw new ServerError(`Server Error: ${response.status}`);
  } else if (!response.ok) {
    throw new NetworkError(`Network Error: ${response.status}`);
  }
}