angular.module('miniRouting', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/home/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: '/Settings/settingsTmpl.html',
      controller: 'settingsCtrl'
    })
    .state('products', {
      url: '/products/:id',
      templateUrl: '/Products/productsTmpl.html',
      controller: 'productsCtrl'
    })
    $urlRouterProvider.otherwise('/')
})
