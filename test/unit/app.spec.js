/**
 * Created by taejun on 2015-04-16.
 */
describe('MyApp', function() {
	'use strict';

	beforeEach(module('MyApp'));

	describe('MathService', function() {
		it('sum(2,4) should be 6', inject(function(MathService) {
			expect(MathService.sum(2,4)).toEqual(6);
		}));

		it('sum(3,5) should be 8', inject(function(MathService) {
			expect(MathService.sum(3,5)).toEqual(8);
		}));

	});
});