const makewait = require('./index');

const fetchSomething = () => new Promise((resolve) => {
  setTimeout(() => resolve(1), 500);
});

const fetchSomethingElse = () => new Promise((resolve) => {
  setTimeout(() => resolve(10), 500);
});

// ============

function* aGen4 () {
  const result = yield fetchSomething();
  console.log("In generator..", result);
  const result1 = yield fetchSomethingElse();
  console.log("In generator..", result1);
  return result1 * 4;
}

const asyncFunc = makewait(aGen4);

function* aGen () {
  const result = yield fetchSomething();
  console.log("In generator..", result);
  const r = result * 4;
  console.log("In generator..", r);
  return r;
}

// const asyncFunc = makewait(aGen);

function* aGen1 () {
  const result = yield fetchSomething();
  console.log("In generator..", result);
  return result;
}

// const asyncFunc = makewait(aGen1);

function* aGen2 () {
  return fetchSomething();
}

// const asyncFunc = makewait(aGen2);

function* aGen3 () {
  yield fetchSomething();
}

// const asyncFunc = makewait(aGen3);

asyncFunc.then(
  result => {
    console.log('Final resolution => ',result);
  }
);


