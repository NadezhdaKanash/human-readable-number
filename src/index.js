module.exports = function toReadable (number) {
    let res = '',
        start = 1000000000; //start fron billion
    const units = ['billion','million','thousand'];


    if(number == 0) return 'zero';

    units.forEach(function(item) {
        if(number/start > 1) {
            let a = parseInt(number/start);
            res += ' ' + convertNumber(a) + ' ' + item;
            number = number % start;
        }
        start = start / 1000;
    });

    if(number > 0) res += ' ' + convertNumber(number);

    return res.trim();

}

function convertNumber(n) {
    let res = '';
    const arr1 = ['one','two','three','four','five','six','seven','eight','nine','ten'],
        arr2 = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],
        arr3 = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    if(n >= 100) { // hundreds
        let a = parseInt(n/100);
        res += arr1[a - 1] + ' hundred';
        n -= a * 100;
    }
    if(n >= 20) { //tenths
        let a = (n - (n % 10)) / 10;
        res += ' ' + arr3[a - 2];
        n -= a * 10;
    }
    if(n >= 10 && n < 20) {
        res += ' ' + arr2[n - 10];
    }
    if(n  < 10 && n > 0) { //units
        res += ' ' + arr1[n - 1];
    }

    return res.trim();

}
