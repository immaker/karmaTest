/**
 * Created by taejun on 2015-04-16.
 */
'use strict';

angular.module('MyApp', [])
.factory('MathService', function() {
		return {
			// 두개의 숫자를 입력 받아 더하고 결과값을 리턴해주는 함수
			sum: function(a, b) {
				return a + b;
			}
		};
	});