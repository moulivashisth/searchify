app.service("MVCService", function ($http) {
   this.getData = function ($scope) {     
       $http({
           url: "https://affiliate-api.flipkart.net/affiliate/1.0/search.json",
           method: "GET",
           params : {
            query : "sony"
           },
    headers: {
      "Access-Control-Allow-Origin":"*",
    "fk-affiliate-id": "chandramo9",
    "fk-affiliate-token": "f8f01e9213be419fb1ed7c76328a923d",
    
  }
          // params: { user_id: user.id }
       }).then(function(response) {
           $scope.Name = response.data;
          // console.log(response.data);
       });
      

   };



});