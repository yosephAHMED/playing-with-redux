// actions/index.js
// Namespace actions

export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';
export const CLEAR = 'counter/CLEAR';
export const INCREMENT_BY_FIVE = 'counter/INCREMENT_BY_FIVE';
export const INCREMENT_BY_VALUE = 'counter/INCREMENT_BY_VALUE';

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

export function addByUserValue(number) {
    return {
        type: INCREMENT_BY_VALUE,
        //value: value + number,
        payload: number,
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