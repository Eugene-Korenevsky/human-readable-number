module.exports = function toReadable(number) {
    let map = new Map();
    let ty = "ty";
    let teen = "teen";
    let hundred = "hundred";

    function underTwenty(number) {
        return map.get(number);
    }

    function underHundred(number) {
        if (number % 10 == 0) {
            if (map.has(number)) {
                return map.get(number);
            } else {
                return map.get(Math.floor(number / 10)) + ty;
            }
        } else {
            let num = number % 10
            let ten = number - num;
            if (map.has(ten)) {
                return map.get(ten) + " " + map.get(num);
            } else return map.get(ten / 10) + ty + " " + map.get(num);
        }
    }

    function underThousand(number) {
        let num = number % 100;
        let second = Math.floor(number / 100);
        if (num == 0) {
            return map.get(second) + " " + hundred;
        } else if (num < 21) {
            return map.get(second) + " " + hundred + " " + underTwenty(num);
        } else {
            return map.get(second) + " " + hundred + " " + underHundred(num);
        }
    }
    map.set(1, "one");
    map.set(0, "zero");
    map.set(2, "two");
    map.set(3, "three");
    map.set(4, "four");
    map.set(5, "five");
    map.set(6, "six");
    map.set(7, "seven");
    map.set(8, "eight");
    map.set(9, "nine");
    map.set(10, "ten");
    map.set(11, "eleven");
    map.set(12, "twelve");
    map.set(13, "thirteen");
    map.set(14, "fourteen");
    map.set(15, "fifteen");
    map.set(16, "sixteen");
    map.set(17, "seventeen");
    map.set(18, "eighteen");
    map.set(19, "nineteen");
    map.set(20, "twenty");
    map.set(30, "thirty");
    map.set(40, "forty");
    map.set(50, "fifty");
    map.set(80, "eighty");

    if (number == 0) return map.get(0);
    if (number <= 20) {
        return underTwenty(number);
    }
    if (number >= 20 && number < 100) {
        return underHundred(number);
    }
    if (number >= 100 && number < 1000) {
        return underThousand(number);
    }
}