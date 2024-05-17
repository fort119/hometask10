///first programm
let arr2 = [
  { sourse: 'telegramm', text: 'hello', date: 'march' },
  { sourse: 'telegramm', text: 'hello', date: 'march' },
  { sourse: 'telegramm', text: 'hello', date: 'june' },
  { sourse: 'instagram', text: 'how are you', date: 'april' },
  { sourse: 'viber', text: 'hi', date: 'march' }
]

function groupBy(input, key) {
  return input.reduce((acc, currentValue) => {
    let groupKey = currentValue[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(currentValue);
    return (acc);
  }, {});
}

let objWithSourse = groupBy(arr2, "sourse");
console.log(objWithSourse)

objWithSourse[Symbol.iterator] = function () {
  let index = 0;
  const keys = Object.keys(this);

  return {
    next: () => {
      if (index < keys.length) {
        return { value: keys[index++], done: false };
      } else {
        return { done: true };
      }
    }
  }
}

for (let sourse of objWithSourse) {
  console.log(objWithSourse[sourse]);
}

//second programm
function memo(fn) {
  const cache = {}
  return function (...args) {
    console.log(...args);
    const key = JSON.stringify(args)
    if (cache[key]) {
      return cache[key]
    } else {
      const result = fn.apply(this, args)
      cache[key] = result
      return result
    }
  }
}

const add = (a, b) => {
  return a + b
}

const memoFn = memo(add)

console.log(memoFn(1, 2))