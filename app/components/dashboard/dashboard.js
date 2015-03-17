(function() {
    'use strict';

    /**
     * Dashboard Module
     *
     * Dashboard spesific module, loads all components related to dashboard.
     */
    angular.module('Dashboard', [])
        .controller('DashboardController', [DashboardController]);

    function DashboardController() {
        var self = this;
    }
})();