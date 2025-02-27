/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    return numbers.length > 0 ? [numbers[0], numbers[numbers.length - 1]] : [];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    //const tripled = numbers.map((num: number): number => num * 3);
    return numbers.map((num: number): number => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    //const strToInt = numbers.map((num: string): number =>
    //Number.isNaN(parseInt(num)) ? 0 : parseInt(num)
    //);
    return numbers.map((num: string): number =>
        Number.isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return stringsToIntegers(
        amounts.map((amt: string): string =>
            amt.includes("$") ? amt.replace("$", "") : amt
        )
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const upper = messages.map((msg: string): string =>
        msg.includes("!") ? msg.toUpperCase() : msg
    );
    return upper.filter((msg: string): boolean => !msg.includes("?"));
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let count = 0;
    words.map((word: string): number => (word.length < 4 ? count++ : count));
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let rgb = true;
    colors.map((color: string): boolean =>
        color === "red" || color === "green" || color === "blue"
            ? (rgb = true)
            : (rgb = false)
    );
    return rgb;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sums = addends.reduce((sum: number, num: number) => sum + num, 0);
    const word = addends.join("+");
    return sums.toString() + "=" + word;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const newValues = [...values];
    const findFirstNeg = values.findIndex((nums: number): boolean => nums < 0);
    const firstNegIndex = findFirstNeg + 1;
    if (findFirstNeg === -1) {
        const sum = newValues.reduce(
            (sumUpToNeg: number, num: number) => sumUpToNeg + num,
            0
        );
        newValues.splice(newValues.length, 0, sum);
        return newValues;
    } else {
        const sum = newValues
            .slice(0, findFirstNeg)
            .reduce((total: number, num: number) => total + num, 0);
        newValues.splice(firstNegIndex, 0, sum);
        return newValues;
    }
}
