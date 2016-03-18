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