// document.addEventListener("DOMContentLoaded", function(){

  // var app = angular.module("myApp",[]);

  // app.controller('mainController', 
  //     ['$scope', function($scope){
  //       $scope.products = 
  //         [
  //         {
  //           icon: '../images/comp.svg',
  //           name: 'Konto online',
  //           promo: 'Załóż konto przez internet',
  //           link: '#',
  //           buttonText: "Otwórz konto"
  //         },
  //         {
  //           icon: '../images/dymek.svg',
  //           name: 'Rozpocznij chat',
  //           promo: 'Porozmawiaj z doradcą',
  //           link: '#',
  //           buttonText: "Zapytaj"
  //         },
  //         {
  //           icon: '../images/percent.svg',
  //           name: 'Kredyt gotówkowy',
  //           promo: 'Ustale ratę  i datę spłaty',
  //           link: '#',
  //           buttonText: "Sprawdź"
  //         }
  //         ]
  //         }
  //     ]
  //   );


    app.component('productsList',{
      templateUrl: 'js/directives/productInfo.html',
      controller: function($scope){ 
        $scope.products = 
          [
          {
            icon: '../images/comp.svg',
            name: 'Konto online',
            promo: 'Załóż konto przez internet',
            newPage: '#',
            buttonText: "Otwórz konto"
          },
          {
            icon: '../images/dymek.svg',
            name: 'Rozpocznij chat',
            promo: 'Porozmawiaj z doradcą',
            newPage: '#',
            buttonText: "Zapytaj"
          },
          {
            icon: '../images/percent.svg',
            name: 'Kredyt gotówkowy',
            promo: 'Ustale ratę  i datę spłaty',
            newPage: '#',
            buttonText: "Sprawdź"
          }
          ]
          
      }   
              
        

    });

    
  // });