angular.module('TelePic').controller('GameController', [
    '$scope','$routeParams','$http',
    function($scope, $routeParams, $http) {
        function show(pageToShow) {
            var asPages = ['bGameMenu','bPlayerStatus','bRecMessage','bSenMessage','bNewDoodle','bGetDoodle'];
            for(var i = 0; i < asPages.length; i++) {
                $scope[asPages[i]] = (asPages[i] === pageToShow) ? true : false;
            }
        }
        $scope.viewPlayersStatus = function() {
            show('bPlayerStatus');
            $http.get('app/mock_data/getPlayerData_response.json').then(function(jsonData) {
                $scope.aoPlayerStatus = jsonData.data;
            });
        }
        $scope.viewGetDoodle = function() {
            show('bGetDoodle');
            $http.get('app/mock_data/getDoodle_response.json').then(function(jsonData) {
                var context = $('canvas[id="getDoodle"]')[0].getContext('2d');
                // context.putImageData(jsonData.data,0,0); 
                context.putImageData($scope.imageData,0,0); 
            });
        }
        $scope.viewGameMenu = function() {
            show('bGameMenu');
        }
        $scope.viewRecMessage = function() {
            show('bRecMessage');
            $http.get('app/mock_data/rec_message.json').then(function(jsonData) {
                var jsonRecMessage = jsonData.data;
            });
        }
        $scope.viewSenMessage = function() {
            show('bSenMessage');
            // $http.get('app/mock_data/sen_message.json').then(function(jsonData) {
            //     var jsonSenMessage = jsonData.data;
            // });
        }
        $scope.viewPlayerNames = function() {
            $scope.bShowNames = true;
        }
        $scope.viewNewDoodle = function() {
            show('bNewDoodle');
        }
        $scope.hidePlayerNames = function() {
            $scope.bShowNames = false;
        }
        $scope.clearDrawing = function() {
            var canvas = $('canvas[id="canvasNewDoodle"]')[0];
            canvas.width = canvas.width;
        }      
        $scope.sendDrawing = function() {
            var canvas = $('canvas[id="canvasNewDoodle"]')[0];
            var context = canvas.getContext('2d');
            var imageData = context.getImageData(0,0,canvas.width,canvas.height);
            $scope.imageData = imageData;
        }      
        //save the selected game to scope for requests
        $scope.iSelectedGame = $routeParams.iGameId;
        //view default
        $scope.bGameMenu = $scope.bPlayerStatus = $scope.bRecMessage = $scope.bSenMessage = $scope.bNewDoodle = $scope.bGetDoodle = false;
        show('bGameMenu');
        //drawing defaults
        $scope.sDrawingColor = "#000000";
        $scope.bShowNames = false;
        $scope.iLineWidth = 10;
    }
]);