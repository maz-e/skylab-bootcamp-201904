'use strict';

/**
 * Add a secret in a safe place if the password is correct, and change the password if the option 'value' is true. Also keeps any secret safe, unnaccessible from any scope wher its run.
 * 
 * @param {string} password The password.
 * @param {*} secretOrNewPassword The secret that you want keep safe.
 * @param {[boolean]} changePassword True to change the password.
 * 
 * @returns {boolean} True when the secret is saved / True when the password is succesfully changed
 * @returns {*} the secret if the password is correct.  
 */

function safeBox(password, secretOrNewPassword, changePassword) {
    //TODO
}