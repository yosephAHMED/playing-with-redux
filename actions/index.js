// actions/index.js
// Namespace actions

export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';
export const CLEAR = 'counter/CLEAR';
export const INCREMENT_BY_FIVE = 'counter/INCREMENT_BY_FIVE';

// export function addByValue(value) {
//     return {
//         type: INCREMENTBYVALUE,
//         value: value + 5,
//     }
// }

export function incrementByOne() {
    return {
        type: INCREMENT
    }
}

export function addFive() {
    return {
        type: INCREMENT_BY_FIVE
    }
}

export function decrementByOne() {
    return {
        type: DECREMENT
    }
}

export function clear() {
    return {
        type: CLEAR
    }
}