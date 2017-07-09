import 'babel-polyfill';

function* decorator() {
  console.log('dec');
  yield;
  console.log('orator');
}

const iterator = decorator();

iterator.next();
iterator.next();
