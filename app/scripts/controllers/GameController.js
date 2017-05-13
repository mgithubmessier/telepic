angular.module('TelePic').controller('GameController', [
    '$scope','$routeParams','$http',
    function($scope, $routeParams, $http) {
        function showGameMenu() {
            $scope.bGameMenu = true;
            $scope.bPlayersStatus = $scope.bRecMessage = $scope.bSenMessage = false;              
        }
        function showPlayerStatusMenu() {
            $scope.bShowNames = false;
            $scope.bPlayersStatus = true;            
            $scope.bGameMenu = $scope.bRecMessage = $scope.bSenMessage = false;
        }
        function showRecMessage() {
            $scope.bRecMessage = true;
            $scope.bPlayersStatus = $scope.bGameMenu = $scope.bSenMessage = false;
        }
        function showSenMessage() {
            $scope.bSenMessage = true;
            $scope.bPlayersStatus = $scope.bGameMenu =  $scope.bRecMessage = false;            
        }
        $scope.viewPlayersStatus = function() {
            showPlayerStatusMenu();
            $http.get('app/mock_data/getPlayerData_response.json').then(function(jsonData) {
                $scope.aoPlayerStatus = jsonData.data;
            });
        }
        $scope.viewGameMenu = function() {
            showGameMenu();
            $http.get('app/mock_data/game_menu.json').then(function(jsonData) {
                var jsonGameMenu = jsonData.data;
            });            
        }
        $scope.viewRecMessage = function() {
            showRecMessage();
            $http.get('app/mock_data/rec_message.json').then(function(jsonData) {
                var jsonRecMessage = jsonData.data;
            });
        }
        $scope.viewSenMessage = function() {
            showSenMessage();
            // $http.get('app/mock_data/sen_message.json').then(function(jsonData) {
            //     var jsonSenMessage = jsonData.data;
            // });
        }
        $scope.viewPlayerNames = function() {
            $scope.bShowNames = true;
        }
        $scope.hidePlayerNames = function() {
            $scope.bShowNames = false;
        }
        $scope.clearDrawing = function() {
            var drawing = $('canvas[drawing]');
            drawing[0].width = drawing[0].width;
        }      
        $scope.sendDrawing = function() {
            var drawing = $('canvas[drawing]');
        }      
        //save the selected game to scope for requests
        $scope.iSelectedGame = $routeParams.iGameId;
        //view default
        showGameMenu();
        //drawing defaults
        $scope.sDrawingColor = "#000000";
        $scope.bShowNames = false;
        $scope.iLineWidth = 10;
        //setting labels for buttons
        $scope.sRecMessage = 'Received message';
        $scope.sSenMessage = 'Sent message';
        $scope.sPlayersStatus = 'View players and status';
    }
]);