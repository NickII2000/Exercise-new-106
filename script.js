'use strict';
// Ex. 106

// try {
//     console.log('Normal');
//     console.log(a);
//     console.log('Result');
// } catch (error) {
//     console.log('Error');
//     console.log('=======================');
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
//     console.log('=======================');
// } finally {
//     console.log('Final');
// }

// console.log('Still normal');
// console.log('\n!!!!!!!!!!!!!!!!!!!!!!!');

document.querySelector('.active').addEventListener('click', () => {
    console.log('click');
});

console.log('Normal');