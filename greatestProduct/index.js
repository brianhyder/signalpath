
class GreatestProduct {

    /**
     * 
     * @param {Array<Number>} list 
     */
    static getGreatestProduct(list) {
        list.sort();
        const front = list[0] * list[1];
        const end = list[list.length - 1] * list[list.length - 2];
        return Math.max(front, end);
    }

    static getRandomList(length, min, max) {
        const list = new Array(length);
        for(let i = 0; i < length; i++) {
            list[i] = GreatestProduct.getRandomInteger(min, max);
        }
        return list;
    }

    static getRandomInteger(min, max) {
        const range = max - min + 1;
        const randomInt = Math.floor(Math.random() * range);
        return min + randomInt;
    }
}

/**
 * Begin program execution
 */
if (process.argv.length < 5) {
    console.error('Wrong number of arguments provided!');
    process.exit(1);
}

let cnt = 2;
const length = parseInt(process.argv[cnt++], 10);
const min = parseInt(process.argv[cnt++], 10);
const max = parseInt(process.argv[cnt], 10);
const list = GreatestProduct.getRandomList(length, min, max);
const product = GreatestProduct.getGreatestProduct(list);
console.log('Product=', product);
process.exit(0);