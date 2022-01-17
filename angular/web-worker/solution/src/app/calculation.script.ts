declare function postMessage(message: any): void;

export const CALCULATION_SCRIPT = input => {
  var results = [];
  for (let x = 1; x <= 1000000000; x++) {
    let y = x / 3.2;
    if (x % 20000000 === 0) {
      results.push(x);
    }
  }
  
  postMessage(results);
};
