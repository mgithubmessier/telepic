angular.module('TelePic').controller('LoginController', [
    '$scope',
    '$http',
    '$location',
    '$sessionStorage',
    function($scope, $http, $location, $sessionStorage) {
        function getPostPromise(path) {
            var body = {};
            if(path === 'login') {
                body = {
                    'username': $scope.username,
                    'password': $scope.password                    
                } 
            } else if(path === 'register') {
                body = {
                    'requestedUsername': $scope.username,
                    'requestedPassword': $scope.password                    
                }                 
            }
            var request = ({
                method: 'POST',
                url: 'https://v07mdz4sdd.execute-api.us-east-1.amazonaws.com/Production/'+path,
                data: body
            });
            return $http(request);            
        }
        function handleResponse(response) {
            if(response.data.ERROR) {
                $scope.loginStatus=response.data.ERROR;
            } else {
                $sessionStorage.token = response.data.token;
                $sessionStorage.expirationTime = response.data.expirationTime;
                $location.url('/home');                    
            }            
        }
        function hanldeError(response) {
            $scope.loginStatus='There has been an error on our service. Please try again later.';
        } 
        $scope.manualLogin = function() {
            $scope.loginStatus='loading...';
            getPostPromise('login').then(function(response) {handleResponse(response)},function(response){hanldeError(response)});
        }
        $scope.register = function() {
            $scope.loginStatus='loading...';
            getPostPromise('register').then(function(response) {handleResponse(response)},function(response){hanldeError(response)});
        }
        // Here we run a very simple test of the Graph API after login is
        // successful.  See statusChangeCallback() for when this call is made.
        // function testAPI() {
        //     console.log('Welcome!  Fetching your information.... ');
        //     FB.api('/me', function(response) {
        //         console.log('Successful login for: ' + response.name);
        //         document.getElementById('status').innerHTML =
        //             'Thanks for logging in, ' + response.name + '!';
        //     });
        // }
        // function statusChangeCallback(response) {
        //     console.log('statusChangeCallback');
        //     console.log(response);
        //     // The response object is returned with a status field that lets the
        //     // app know the current login status of the person.
        //     // Full docs on the response object can be found in the documentation
        //     // for FB.getLoginStatus().
        //     if (response.status === 'connected') {
        //         // Logged into your app and Facebook.
        //         testAPI();
        //     } else {
        //         // The person is not logged into your app or we are unable to tell.
        //         document.getElementById('status').innerHTML = 'Please log ' +
        //             'into this app.';
        //     }
        // }

        // function checkLoginState() {
        //     FB.getLoginStatus(function(response) {
        //         statusChangeCallback(response);
        //     });
        // }

        // FB.logout(function(response) {
        //     // Person is now logged out
        // });
    }
]);