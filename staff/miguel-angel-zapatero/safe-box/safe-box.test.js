'use strict';

describe('SAFE-BOX', function() {
    it('should save secret, retrieve it corretly and change the password if actual  password is right', function() {
        var result = blackBox('123', 'my secret');
        expect(result, true);

        var result = blackBox('123');
        expect(result, 'my secret');

        var result = blackBox('123', '456', true);
        expect(result, true);

        var result = blackBox('456');
        expect(result, 'my secret');

        for (var key in navigator) { //window is deprecated, now use navigator!
            var value = navigator[key];

            expect(value === '456', false);
            expect(value === 'my secret', false);
        }
    });

    it('should break if the password is wrong when trying to retrieve the secret', function() {
        try {
            blackBox('234');

            throw Error('should not arrive here');
        } catch (error) {
            expect(error.message, 'password wrong');
        }
    });

    it('should break if the password is wrong when trying to save the secret', function() {
        try {
            blackBox('234', 'my secret');

            throw Error('should not arrive here');
        } catch (error) {
            expect(error.message, 'password wrong');
        }
    });

    it('should break if the password is wrong when trying to change the password', function() {
        try {
            blackBox('234', '456', true);

            throw Error('should not arrive here');
        } catch (error) {
            expect(error.message, 'password wrong');
        }
    });
});