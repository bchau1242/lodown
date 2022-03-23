'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Function takes in any value and returns that value unchanged.
 * 
 * @param: { any datatype }: Function takes a single parameter of any datatype. 
 * @return { any datatype }: Function returns input parameter unchanged. 
 */

function identity(value) {
    return value;
}

module.exports.identity = identity;

/**
 * typeOf: Takes in any value, determines what type the value is and return 
 * the type as a string.  
 * 
 * @param { any datatype }: Function takes a single parameter of any datatype.
 * @return {string}: Function returns string of the value datatype. 
 */

function typeOf(value) {
    if (typeof value !== 'object'){
        return typeof value;
    } else if (Array.isArray(value) === true){
        return 'array';
    } else if (value === null) {
      return 'null';
    } else if (value instanceof Date === true) {
        return 'date';
    } else {
      return 'object';
    }
}

 module.exports.typeOf = typeOf;

 /**
 * first: Designed to take an array and return its first element.    
 * 
 * @param { array }: Function takes in an array
 * @param { number }: Function takes in a number
 * @return { any datatype }: Function returns first element of array. 
 */

function first(array, number) {
    var first = [];
    if(Array.isArray(array) !== true) {
        return [];
    } else if (typeof number !== 'number') {
        return array[0];
    } else if(number > array.length) {
        return array;
    } else if (number < 0) {
        return [];
    } else {
        for(var i = 0; i < number; i++) {
            first.push(array[i])
        }
    }
    return first;
}

 module.exports.first = first;

/**
 * last: Designed to take an array and return its last element.  
 * 
 * @param { array }: Function takes in an array parameter.  
 * @param {number}: Function takes in a number parameter. 
 * @return {any datatype}: Function  
 */

function last(array, number) {
    var last = [];
    if(Array.isArray(array) !== true) {
        return [];
    } else if (typeof number !== 'number') {
        return array[array.length - 1];
    } else if (number < 0) {
        return [];
    } else if(number > array.length) {
        return array;
    } else {
        for(var i = number - 1; i < array.length; i++) {
            last.push(array[i])
        }
    }
    return last;
}


 module.exports.last = last;

 /**
 * indexOf: Function loops over an array and matches the value to an element in the array.
 * When match is found, function returns the index of matched element.   
 * 
 * @param { array }: Function takes in an array parameter. 
 * @param {any datatype}: Function takes in parameter of any datatype.
 * @return {index}: Function returns the index of given value in the array. 
 */

function indexOf(array, value) {
    for(var i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return i;
        }
    }
    return -1;
}


 module.exports.indexOf = indexOf;

 /**
 * contains: Function loops over array and tests if value matches any element in array.
 * If value matches an element, returns true. If not, return false.   
 * 
 * @param { array }: Function takes in an array parameter. 
 * @param {any datatype}: Function takes in parameter of any datatype.
 * @return {boolean}: Function returns true or false. 
 */

function contains(array, value) {
    for(var i = 0; i < array.length; i++) {
        return (array.includes(value) ? true : false);
    }
}


 module.exports.contains = contains;

/**
 * unique:  
 * 
 * @param { array }: Function takes in an array parameter. 
 * @return {index}: Function returns the index of given value in the array.     
 */

function unique(array) {
    let uniqueChars = array.filter((c, index) => {
        return _.indexOf(array, c) === index;
    });
    return uniqueChars;
}


 module.exports.unique = unique;

 /**
 * filter:  
 * 
 * @param { array }: Function takes a single parameter of any datatype.
 * @param { array }:
 * @return { array }: The Function to be applied to each value in the 
 * collection
 * @return { value }:
 */

function filter(array, func) {
    var newArray = [];
    for(var i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
          newArray.push(array[i]);
        }
    }
    return newArray;
}


 module.exports.filter = filter;

/**
 * reject:  
 * 
 * @param { array }: Function takes a single parameter of any datatype.
 * @param { array }:
 * @return { array }: The Function to be applied to each value in the 
 * collection
 * @return { value }:
 */

function reject(array, func) {
    let newArr = [];
    for(var i = 0; i < array.length; i++) {
        if (func(array[i], i, array) !== true) {
            newArr.push(array[i]);
        };
    }
    return newArr;
}


 module.exports.reject = reject;

 /**
 * partition:  
 * 
 * @param { array }: Function takes a single parameter of any datatype.
 * @param { array }:
 * @return { array }: The Function to be applied to each value in the 
 * collection
 * @return { value }:
 */

function partition(array, func) {
    let newArr = [[], []];
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
           newArr[0].push(array[i]);  
        } else {
            newArr[1].push(array[i]);
        }
    }
    return newArr;
}


 module.exports.partition = partition;

/**
 * map:  
 * 
 * @param { array }: Function takes a single parameter of any datatype.
 * @param { array }:
 * @return { array }: The Function to be applied to each value in the 
 * collection
 * @return { value }:
 */

function map(collection, func) {
    let newArr = [];
    if(Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
            newArr.push(func(collection[i], i, collection));
        }
    } else {
        for(let key in collection) {
            newArr.push(func(collection[key], key, collection));
        }     
    }
    return newArr;
}


 module.exports.map = map;

 /**
 * pluck:  
 * 
 * @param { array }: Function takes a single parameter of any datatype.
 * @param { array }:
 * @return { array }: The Function to be applied to each value in the 
 * collection
 * @return { value }:
 */

function pluck(array, property) {
    let result = _.map(array, function(element, index, array) {
        for(let key in element) {
          if (key === property) {
            return element[key];
          }
        }
    });
    return result;
}


 module.exports.pluck = pluck;

 /**
 * every:  
 * 
 * @param { array }: Function takes a single parameter of any datatype.
 * @param { array }:
 * @return { array }: The Function to be applied to each value in the 
 * collection
 * @return { value }:
 */

function every(collection, func) {
    if(func === undefined) {
        if (Array.isArray(collection)) {
            for(let i = 0; i < collection.length; i++) {
                if(!collection[i]) {
                    return false;
                }
            }
        } else {
            for(let key in collection) {
                if(!collection[key]) {
                    return false;
                }
            }
        }
    } else if (Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
            if(!func(collection[i], i, collection)) {
                return false;
            }
        }
    } else {
        for(let key in collection) {
            if(!func(collection[key], key, collection)) {
                return false;
            }
        }
    }
    return true;
}


 module.exports.every = every;

 /**
 * some:  
 * 
 * @param { array }: Function takes a single parameter of any datatype.
 * @param { array }:
 * @return { array }: The Function to be applied to each value in the 
 * collection
 * @return { value }:
 */

function some(collection, func) {
    if(func === undefined) {
        if (Array.isArray(collection)) {
            for(let i = 0; i < collection.length; i++) {
                if(collection[i]) {
                    return true;
                }
            }
        } else {
            for(let key in collection) {
                if(collection[i]) {
                    return true;
                }
            }
        }
    } else if (Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
            if(func(collection[i], i, collection)) {
                return true;
            }
        }
    } else {
        for(let key in collection) {
            if(func(collection[key], key, collection)) {
                return true;
            }
        }
    }
    return false;
}


 module.exports.some = some;

 /**
 * reduce:  
 * 
 * @param { array }: Function takes a single parameter of any datatype.
 * @param { array }:
 * @return { array }: The Function to be applied to each value in the 
 * collection
 * @return { value }:
 */

function reduce(array, func, seed) {
    let accumulator;
    if(seed !== undefined) {
      accumulator = seed;
      for(var i = 0; i < array.length; i++) {
          accumulator = func(accumulator, array[i], i, array);
        }
    } else {
      accumulator = array[0];
      for(let i = 1; i < array.length; i++) {
          accumulator = func(accumulator, array[i], i);
        }  
    } 
  return accumulator;
}


 module.exports.reduce = reduce;

/**
 * extend:  
 * 
 * @param { array }: Function takes a single parameter of any datatype.
 * @param { array }:
 * @return { array }: The Function to be applied to each value in the 
 * collection
 * @return { value }:
 */

function extend(...inputs) {
    let obj1 = inputs[0];
    let obj2 = inputs[1];
    let obj3 = inputs[2];
    let result = Object.assign(obj1, obj2, obj3);
    return result;
}


 module.exports.extend = extend;