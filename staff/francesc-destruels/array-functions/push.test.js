describe('push', function () {
    it('Should return the array with the new index', function () {
        var answer = [1, 2, 3, "hola"];
        var a = [1, 2, 3];
        
        try {
            var result = push(a, "hola");

        throw Error('should not reach this point');
    } catch (error) {
        expect(4, answer.length);
    }
    });

    it('Should return the array with the new index', function () {
        var answer = [1, 2, 3, 5];
        var a = [1, 2, 3];

        try {
            var result = push(a, 5);

        throw Error('should not reach this point');
    } catch (error) {
        expect(4, answer.length);
    }
    });

    it('should break because of undefined array', function () {
        try {
          push();

            throw Error('should not reach this point');
        } catch (error) {
            expect(error.message, 'undefined is not an array');
        }
    });
});  
