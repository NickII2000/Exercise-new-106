'use strict';
// Ex. 106

try {
    console.log('Normal');
    console.log(a);
    console.log('Result');
} catch (e) {
    console.log('Error');
} finally {
    console.log('Final');
}

console.log('Still normal');