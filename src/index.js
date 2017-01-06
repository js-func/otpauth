'use strict';

import {HOTP, TOTP} from './OTP.js';
import {HMAC} from './HMAC.js';
import {URI} from './URI.js';
import {Secret} from './Secret.js';
import {Utils} from './Utils.js';

/**
 * One Time Password (HOTP/TOTP) library for Node.js and browser.
 * @author Héctor Molinero Fernández <hector@molinero.xyz>
 * @type {Object}
 */
const OTPAuth = {
	'HOTP': HOTP,
	'TOTP': TOTP,
	'HMAC': HMAC,
	'URI': URI,
	'Secret': Secret,
	'Utils': Utils
};

export default OTPAuth;
module.exports = OTPAuth;

