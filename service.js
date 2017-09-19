app.service("MVCService", function ($http) {
  var url = "https://affiliate-api.flipkart.net/affiliate/1.0/search.json?query=sony"
   this.getData = function ($scope) {     
       $http.jsonp(url, {
           callback: 'JSON_CALLBACK',
           method: "GET",
           headers: {
              "Access-Control-Allow-Origin":"*",
              "fk-affiliate-id": "chandramo9",
              "fk-affiliate-token": "f8f01e9213be419fb1ed7c76328a923d"
    
  }
          // params: { user_id: user.id }
       }).then(function(response) {
           $scope.answer = response.data;
          // console.log(response.data);
       });
      

   };



});