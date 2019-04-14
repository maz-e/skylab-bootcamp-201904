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

function box() {
    var __password = '123';
    var __secret;

    function safeBox(password, secretOrNewPassword, changePassword) {
        if (password === __password) {
            if(arguments.length === 1 && password !== 'undefined') {
                return __secret;
            } else if(arguments.length === 2) {
                __secret = secretOrNewPassword;
                return true;  
            } else if(arguments.length === 3 && changePassword) {
                __password = secretOrNewPassword;
                return true;
            }
        } else throw TypeError('password wrong'); 
    }

    return safeBox;
}

var blackBox = box(); // Mejor hacer una selfy para ejecutar directamente la función box --> var blackBox = (function(){})();