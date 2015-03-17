(function() {
    'use strict';

    /**
     * MyApp Module
     *
     * Main module of MyApp, loads all global and configuration stuffs
     */
    angular.module('MyApp', ['ngMaterial', 'ui.router', 'Dashboard', 'Login'])
        // global config
        .config(['$mdThemingProvider', '$stateProvider', '$urlRouterProvider', MyAppConfig])
        // main controller
        .controller('MainController', ['$rootScope', MainController]);

    function MyAppConfig($mdThemingProvider, $stateProvider, $urlRouterProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');

        $urlRouterProvider.otherwise('/login');

        // TODO Configur routes here
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: '/app/components/login/LoginView.html',
            controller: 'LoginController as ll'
        });
        $stateProvider.state('dashboard', {
            url: '/dashboard',
            templateUrl: '/app/components/dashboard/DashboardView.html',
            controller: 'DashboardController as dl'
        });
    }

    function MainController($rootScope) {
        var self = this;
        // $rootScope to listen to global events
    }
})();