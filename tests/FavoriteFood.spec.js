describe('Favorite Food Filter', function () {
	var $controller, favoriteFood;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
        favoriteFood = $filter('favoriteFood');
    }));

	it('should remove all vowels', function () {
		var data = [{name: 'brad', favoriteFood: 'broccoli'}];
        expect(favoriteFood(data, 'broccoli')).toEqual([{ name: 'brad', favoriteFood: 'broccoli' }]);
    });

	
});
