'use strict';

/**
 * @ngdoc function
 * @name productAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the productAppApp
 */
angular.module('productApp')
  .controller('MainCtrl', ['$scope','ModalService',function($scope,ModalService) {
    $scope.ProductList = [
    	{
    	  barcode: '1234',
    	  brand: 'Kelloggs',
    	  name: 'Oat Cereal'
    	},{
    	  barcode: '1235',
    	  brand: 'Dutch Lady',
    	  name: 'Full cream Milk'
    	},{
    	  barcode: '1236',
    	  brand: 'Saga',
    	  name: 'Sardin'
    	}
    ];

    $scope.AddProduct = function(){
	    ModalService.showModal({
	      templateUrl: './modals/addProduct.html',
	      controller: 'AddProductController',
	      inputs: {
	        title: 'Register New Product'
	      }
	    }).then(function(modal) {
	      modal.element.modal();
	      modal.close.then(function(result) {
	      	if(result){
		      $scope.ProductList.push(result);
		    }
	      });
	    });
	  };

	 $scope.deleteProduct = function(barcode){
	    
	  };
  }]);
