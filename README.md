## makewait
> Generating async/await with generators cause javascript


## Example

- With async/await
```javascript
function async myAsyncFun () {
	const something = await fetchSomething();
	const somethingElse = await fetchSomethingElse();
	return something * somethingElse;
}

// then
myAsyncFun.then(
	result => {
		console.log(result);
	}
);
```

- With `makewait`
```javascript
function* myGeneratorFun () {
	const something = yield fetchSomething();
	const somethingElse = yield fetchSomethingElse();
	return something * somethingElse;
}

// make it async
const myAsyncFun = makewait(myGeneratorFun);

// then
myAsyncFun.then(
	result => {
		console.log(result);
	}
);
```

---

![](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)

> [imcrc.me](http://imcrc.me) &nbsp;&middot;&nbsp;
> GitHub [@crc442](https://github.com/crc442) &nbsp;&middot;&nbsp;
