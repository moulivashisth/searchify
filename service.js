app.service("MVCService", function ($http) {
   this.getData = function ($scope) {     
       $http({
           url: "https://affiliate-api.flipkart.net/affiliate/search/json",
           method: "GET",
           params : {
            query : "sony"
           },
    headers: {
    "fk-affiliate-id": "chandramo9",
    "fk-affiliate-token": "f8f01e9213be419fb1ed7c76328a923d",
    "cache-control": "no-cache",
    "postman-token": "b2467a12-56f5-d445-7058-13dcc468c7f4"
  }
          // params: { user_id: user.id }
       }).then(function(response) {
           $scope.Name = response.data;
          // console.log(response.data);
       });
      

   };



});