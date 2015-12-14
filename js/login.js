
$(function() {
	
  $('.signin').on('submit', function(e) {

   Parse.$ = jQuery;
   Parse.initialize("KbeQ7XbDu4S7xD8oNlLy6Gc2ho765E87nNBJjWup", "rN7pM8sTFZ9pcU0z6R3RdrLZ9gSW0nonOhlvFBXi");

 
  	 e.preventDefault();

  	 var data = $(this).serializeArray();
  	 username = data[0].value;
  	 password = data[1].value;

  	 Parse.User.logIn(username, password, {
  	 	success: function(user) {
  	 		alert('Welcome Back!');
       location.href= "account.html"
  	 		//do something if user logged in correctly
  	 		
  	 	},
  	 	error: function(object, error) {
  	 		//alert('Unauthorized!');
  	 	}
  	 });

  });




 
  $('.signin').on('submit', function(e) {

 Parse.$ = jQuery;
   Parse.initialize("KbeQ7XbDu4S7xD8oNlLy6Gc2ho765E87nNBJjWup", "rN7pM8sTFZ9pcU0z6R3RdrLZ9gSW0nonOhlvFBXi");
     e.preventDefault();
     var user = new Parse.User();

     var data = $(this).serializeArray();
     username = data[0].value;
     password = data[1].value;

     user.set("username",username);
    user.set("password",password);

     user.signUp(null, {
      success: function(user) {
        alert('sign up works!');
       location.href= "billbo.html"
        //do something if user logged in correctly
        
      },
      error: function(object, error) {
      //  alert('sign up doesnt work');
      }
     });

  });


});