var mockups = angular.module('mockups', ['ngRoute','ngAnimate'])
        .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) 
            {
                $routeProvider
                .when('/', {
                    templateUrl : 'load/home.html',
                    controller  : 'home',
                })
                .when('/list.html', {
                    templateUrl : 'load/list.html',
                    controller  : 'list',
                })
                .when('/enter.html', {
                    templateUrl : 'load/enter.html',
                    controller  : 'enter',
                })
                .when('/exit.html', {
                    templateUrl : 'load/exit.html',
                    controller  : 'exit',
                })
                $locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
                }); 
            }
        ]);
    mockups.controller('home', function($scope) {	 		
    });
    mockups.controller('enter', function($scope) {
        $scope.data=toView.data;
        tick(true);
    });
    mockups.controller('list', function($scope) {
        $scope.data=toView.data;
        tick(true);
    });
    mockups.controller('exit', function($scope) {
        $scope.data=toView.data;
        tick(true);
    });

  

