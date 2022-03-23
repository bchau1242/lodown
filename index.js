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
 * typeOf: Takes in any value and returns a string indicating the datatype of 
 * the value.  
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
 * first: Designed to take an array to iterate over and return the 
 * first element or elements of array depending on number input provided.   
 * 
 * @param { array }: Function takes in an array
 * @param { number }: Function takes in a number
 * @return { any datatype }: Function returns first x number of elements of the array determined by input number. 
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
 * last: Designed to take an array to iterate over and return the 
 * last element or elements of array depending on number input provided.    
 * 
 * @param { array }: Function takes in an array parameter.  
 * @param {number}: Function takes in a number parameter. 
 * @return {any datatype}: Function returns last x number of elements of the array determined by input number.
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
 * indexOf: Function iterates over an array and returns the first index at which
 * the given value matches an element in the array. Returns -1 if value does not 
 * match any element in the array.
 *   
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
 * @return {boolean}: Function returns true if value is found within the array. Otherwise, returns false. 
 */

function contains(array, value) {
    for(var i = 0; i < array.length; i++) {
        return (array.includes(value) ? true : false);
    }
}


 module.exports.contains = contains;

/**
 * unique: Function iterates through an array and applies a function to each element. 
 * Function tests elements to check if an element mataches another element within the array. 
 * Returns a new array with no duplicates. 
 * 
 * @param { array }: Function takes in an array parameter. 
 * @return {index}: Function returns new array with no duplicates.     
 */

function unique(array) {
    let uniqueChars = _.filter(array, function(char, index) {
        return _.indexOf(array, char) === index;
    });
    return uniqueChars;
}


 module.exports.unique = unique;

 /**
 * filter: Function iterates through an array and applies a function to each element. 
 * If the result of the function returns true, the element will be pushed to a new array.
 * Returns the new array after iterating through all elements.  
 * 
 * @param { array }: Function takes a single parameter of any datatype.
 * @param {Function}: The Function to be applied to each value in the array. 
 * @return { array }: A new array containing all elements that pass the Function. 
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
 * reject: Function iterates through an array and applies a function to each element. 
 * If the result of the function returns false, the element will be pushed to a new array.
 * Returns the new array after iterating through all elements.  
 * 
 * @param { array }: Function takes an array to iterate over. 
 * @param { function }: Function to be applied to each element in the array. 
 * @return { array }: Function returns new array containing all elements that 
 * return false after running function. 
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
 * partition: Function iterates through an array and applies a function on each element. 
 * Elements that return something truthy when passed through function are pushed to one sub array.
 * Elements that return something falsy when passed through function are pushed to another sub array.
 * Returns a new array with two sub arrays. 
 * 
 * @param { array }: Function takes an array to iterate over. 
 * @param { function }: Function to be applied to each element in the array. 
 * @return { array }: Function returns new array containing a sub array with true function results
 * and another sub array with false function results.  
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
 * map: Function takes an array or object to iterate over and applies a function
 * to each element or property. Returns a new array containing the result of the 
 * function applied to each element or property. 
 * 
 * @param { Array or Object }collection: The collection over which to iterate. 
 * @param {Function}action: The Function to be applied to each value in the 
 * collection
 * @return { array }: Returns a new array containing the result of the function 
 * applied to each element or property.  
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
 * pluck: Function takes in an array to iterate over and applies a function on each element. 
 * Iterates over each object in array and if property matches object key, function will add
 * property value to new array. Returns new array with property values.  
 * 
 * @param { array }: Function takes an array of objects to iterate over. 
 * @param { property }: Function takes a property to match a key in an object within the array.  
 * @return { array }: Function returns an array containing the value of property 
 * for every element in array. 
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
 * every: Function determines if all elements in the collection pass the specified 
 * function's condition. Returns true if every element in collection passes the test function.
 * If one element fails the test function, the every function will return false. 
 * 
 * @param { Array or Object }collection: Function takes an array or object. 
 * @param { function }: Function to be applied to each value in the collection. 
 * @return { boolean }: Returns true if every element in collection passes test function, false otherwise.  
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
 * some: Function tests whether at least one element or property in the collection
 * satisfies the specified function's condition. If it finds an element or property 
 * in the collection for which the function returns true, it return true; otherwise, 
 * it returns false. 
 * 
 * @param { Array or Object }: Function takes an array or object. 
 * @param { function }: Function to be applied to each value in the collection. 
 * @return { boolean }: Returns true or false. 
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
 * reduce: Function takes an array to iterate over. Executes a function using the 
 * previous value, current value and initial value(if provided)to compute and returns 
 * an updated previous value. 
 * 
 * @param { array }: Function takes an array to iterate over. 
 * @param { function }: Function to be applied to each element in the array. 
 * @param { seed }: Function takes a seed as initial value to accumulate. 
 * @return { value }: Function returns a single value. 
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
 * extend: Function takes in two or more objects and copies all properties 
 * and its values into one object then returns that object. 
 * 
 * @param { array }: Function takes two or more objects. 
 * @return { array }: Function returns a single object containing copies 
 * of input object's properties and values. 
 */

function extend(...inputs) {
    let obj1 = inputs[0];
    let obj2 = inputs[1];
    let obj3 = inputs[2];
    let result = Object.assign(obj1, obj2, obj3);
    return result;
}


 module.exports.extend = extend;