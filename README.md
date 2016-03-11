# Testing custom Filters

## Overview

Now that we've created a custom filter, it's important that we test the output of the filter to make sure it's doing its job properly.

## Objectives

- Describe testing filters
- Write a custom filter unit test

## Testing filters

Like our services, we can inject filters into our tests. We use the `$filter` helper.

Let's say we've got this filter:

```js
function firstUppercase() {
	return function (str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};
}

angular
	.module('app')
	.filter('firstUppercase', firstUppercase);
```

We can inject this using `$filter` in our tests:

```js
describe('UserService', function () {
	var $controller, firstUppercase;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		firstUppercase = $filter('firstUppercase');
	}));
});
```

Now, as we returned a function in our filter, we can simply call `firstUppercase` as a function and receive our manipulated value in return.

```js
describe('UserService', function () {
	var $controller, firstUppercase;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		firstUppercase = $filter('firstUppercase');
	}));

	it('should capitalise the first letter', function () {
		expect(firstUppercase('test')).toEqual('Test');
	});
});
```

Nice - our tests now pass! You can pass through any data you like, meaning we can also test any filters that we create on datasets.