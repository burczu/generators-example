import 'babel-polyfill';

// function* decorator() {
//   console.log('dec');
//   yield 'test';
//   console.log('orator');
//   return 'end!';
// }
//
// const iterator = decorator();
//
// const nextRes1 = iterator.next();
// const nextRes2 = iterator.next();
//
// console.log(nextRes1);
// console.log(nextRes2);

function* decorator() {
  for (let i = 0; i < 10; i++) {
    yield i;
  }
}

const iterator = decorator();

for (const value of iterator) {
  console.log(value);
}
