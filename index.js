const isPromise = obj =>
	Boolean(obj) && typeof obj.then === 'function';


const gennext = (gen, cb, prev = undefined) => {
	const { value, done } = gen.next(prev);
	console.log(value, done, prev);
	if (done) {
		if (!prev) {
			return cb(prev);
		}
		return cb(value);
	}

	if (isPromise(value)) {
		return value.then(val => {
			console.log(val);
			return gennext(gen, cb, val)
		});
	} else {
		return gennext(gen, cb, value)
	}
}

function gsync(func) {
	return new Promise(resolve => {
		return gennext(func(), val => resolve(val));
	});
}

module.exports = gsync;

