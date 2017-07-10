import 'babel-polyfill';
import co from 'co';

// --- basic example ---
//
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



// --- loop example ---
//
// function* generator() {
//   for (let i = 0; i < 10; i++) {
//     yield i;
//   }
// }
//
// const obj = new Obj();
// const iterator = obj.generator();
//
// for (const value of iterator) {
//   console.log(value);
// }



// --- observer example ---
// function* generator() {
//   while (true) {
//     const val = yield; // pobranie wartości przekazanej przez 'next'
//     console.log(val);
//   }
// }
//
// const observer = generator();
//
// observer.next(); // uruchamia obserwator
// observer.next('obs');
// observer.next('erver');


// --- async example ---

const getUsers = () => {
  return new Promise((resolve) => {
    resolve(['users']);
  });
}

const getItems = (user) => {
  if (user) {
    return new Promise((resolve) => {
      resolve('items');
    });
  }
}

function* generator() {
  const users = yield getUsers();
  const items = yield getItems(users[0]); // zależy od users

  return items;
}

co(generator()).then((result) => {
  console.log(result); // 'items'
});
