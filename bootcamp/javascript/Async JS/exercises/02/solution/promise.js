const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success');
    }, 500);
});

myPromise.then(msg => console.log(msg));