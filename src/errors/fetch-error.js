/**
 * Fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
export default class FetchError extends Error {
	constructor(message, type, systemError) {
		super(message);

		this.message = message;
		this.type = type;
		this.name = 'FetchError';

		// When err.type is `system`, err.code contains system error code
		if (systemError) {
			this.code = this.errno = systemError.code;
		}

		// Hide custom error implementation details from end-users
		Error.captureStackTrace(this, this.constructor);
	}
}