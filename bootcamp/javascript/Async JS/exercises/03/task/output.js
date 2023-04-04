// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//     }, 300);
// });

// myPromise
// .then(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('1');
//         }, 300);
//     });
//     console.log('2');
// })
// .then(data => console.log(data))
// .then(() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('3');
//         }, 500);
//         setTimeout(() => {
//             reject('4');
//         }, 300);
//     });
// })
// .then(data => console.log(data))
// .catch(err => console.log(err))
// .finally(() => console.log('5'));