import 'babel-polyfill';

// function* generator() {
//   console.log('dec');
//   yield 'test';
//   console.log('orator');
//   return 'end!';
// }
//
// const iterator = generator();
//
// const nextRes1 = iterator.next();
// const nextRes2 = iterator.next();
//
// console.log(nextRes1);
// console.log(nextRes2);

function* generator() {
  for (let i = 0; i < 10; i++) {
    yield i;
  }
}

const iterator = generator();

for (const value of iterator) {
  console.log(value);
}
