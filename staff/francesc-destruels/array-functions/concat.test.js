
describe('concat', function () {
    it('should return an array with all items concadenated', function () {
        var array1 =  ["The","world","is"];
        var array2 =  ["a","fuckin*","hell"];
        var array3 =  [6, 6, 6,];

        var result = concat(array1, array2, array3);

        var expected = ["The","world","is", "a","fuckin*","hell", 6, 6, 6,];
        
        expect(result, expected, true);
    });

    it('should return an array with all items concadenated', function () {
        var answer =  ["The","world","is", 6, 6, 6,]

        var array1 =  ["The","world","is"];
        var array3 =  [6, 6, 6,];

        var result = concat(array1, array3);

        expect(result, answer, true);
    });
});