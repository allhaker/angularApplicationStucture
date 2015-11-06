var testService = angular.module('testService', []);

testService.factory('factoryName', function factoryName($http) {
    var testGet = function(query, callback) {
      $http.get('https://api.github.com/search/repositories', {
        /*  params: {
            q: query
          }*/
        })
        .success(function(data) {
          callback(null, data);
        })
        .error(function(e) {
          callback(e);
        });
    };
    var test2 = function () {
      alert("I am a test");
    }
    return {
      method1: testGet,
      method2: test2
    }
});
