angular.module('TelePic').controller('GameController', [
    '$scope','$routeParams','$http',
    function($scope, $routeParams, $http) {
        function showGameMenu() {
            $scope.bGameMenu = true;
            $scope.bPlayersStatus = $scope.bRecMessage = $scope.bSenMessage = false;              
        }
        function showPlayerStatusMenu() {
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
            $http.get('app/mock_data/sen_message.json').then(function(jsonData) {
                var jsonSenMessage = jsonData.data;
            });
        }
        showGameMenu();
        $scope.iSelectedGame = $routeParams.iGameId;
        $scope.sRecMessage = 'Received message';
        $scope.sSenMessage = 'Sent message';
        $scope.sPlayersStatus = 'View players and status';
    }
]);