'use strict';
angular.module('confusionApp')
		.constant("baseURL","http://localhost:3000/")
        .factory('menuFactory', ['$http', 'baseURL', function($http, baseURL) {
        	
                var menufac = {};

                menufac.getDishes = function(){
                                    return $http.get(baseURL+"dishes");
                };

                menufac.getDish = function (index) {
                                    return $http.get(baseURL+"dishes/"+index);
                };

                menufac.getPromotion = function(){
                					return $http.get(baseURL+"promotions");
                };

                return menufac;
        }])
                                             
        .factory('corporateFactory', ['$http', 'baseURL', function($http, baseURL) {
    
            var corpfac = {};

            corpfac.getLeaders = function(){
            					return $http.get(baseURL+"leadership");
            };

            corpfac.getLeader = function(index){
            					return $http.get(baseURL+"leadership/"+index);
            }
    		
    		return corpfac;
    
        }]);