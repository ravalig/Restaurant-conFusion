'use strict';
angular.module('confusionApp')
		.constant("baseURL","http://localhost:3000/")
        .factory('menuFactory', ['$resource','$http', 'baseURL', function($resource, $http, baseURL) {
        	
                var menufac = {};

                menufac.getDishes = function(){
                                        return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
                                    
                };

                menufac.getPromotion = function(){
                					return $http.get(baseURL+"promotions/0");
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
            };
    		
    		return corpfac;
    
        }]);