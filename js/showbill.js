 // Get help from Jie Feng!!


 Parse.$ = jQuery;
   Parse.initialize("KbeQ7XbDu4S7xD8oNlLy6Gc2ho765E87nNBJjWup", "rN7pM8sTFZ9pcU0z6R3RdrLZ9gSW0nonOhlvFBXi");


var query = new Parse.Query("Instachecks");
  	 		query.get("RgtlUQ50rf", {
  	 			success: function(object) {
  	 					// console.log(JSON.stringify(object));
  	 					// document.getElementById('billsdiv').innerHTML = JSON.stringify(object);
// receipt_1
              $showbill = JSON.stringify(object)
              
              $showbill2 = $.parseJSON( $showbill)

              $showbill3 = $showbill2.instacheckItems;
             
              $array = [ $showbill3.split("\n")]
              
              console.log($showbill);
              $("#billsdiv").html("<p class='receipt'>" + $array[0][0]+"</p>")

              for($i = 1; $i < $array[0].length ; $i++ ){
                $("#billsdiv").append("<p class='receipt'>" + $array[0][$i]+"</p>")
              }

  	 			},
  	 			error: function(object,error) {
  	 				console.log(error);
  	 			}
  	 		});

// receipt_2

        query.get("l8OgIB1QFf", {
          success: function(object) {
              // console.log(JSON.stringify(object));
              // document.getElementById('billsdiv').innerHTML = JSON.stringify(object);

              $showbill_1 = JSON.stringify(object)
              
              $showbill_2 = $.parseJSON( $showbill_1)

              $showbill_3 = $showbill_2.instacheckItems;
             
              $array_1 = [ $showbill_3.split("\n")]
              
              console.log($showbill_1);
             
              $("#billsdiv_2").html("<p class='receipt_1'>" + $array_1[0][0]+"</p>")

              for($i = 1; $i < $array_1[0].length ; $i++ ){
                $("#billsdiv_2").append("<p class='receipt_1'>" + $array_1[0][$i]+"</p>")
              }

          },
          error: function(object,error) {
            console.log(error);
          }
        });

//receipt_3
 query.get("HWQ0A9uYhQ", {
          success: function(object) {
              // console.log(JSON.stringify(object));
              // document.getElementById('billsdiv').innerHTML = JSON.stringify(object);

              $showbill_4 = JSON.stringify(object)
              
              $showbill_5 = $.parseJSON( $showbill_4)

              $showbill_6 = $showbill_5.instacheckItems;
             
              $array_2 = [ $showbill_6.split("\n")]
              
              console.log($showbill_4);
             
              $("#billsdiv_3").html("<p class='receipt_1'>" + $array_2[0][0]+"</p>")

              for($i = 1; $i < $array_2[0].length ; $i++ ){
                $("#billsdiv_3").append("<p class='receipt_1'>" + $array_2[0][$i]+"</p>")
              }

          },
          error: function(object,error) {
            console.log(error);
          }
        });

 // receipt_4

 query.get("TppKkhmDMm", {
          success: function(object) {
              // console.log(JSON.stringify(object));
              // document.getElementById('billsdiv').innerHTML = JSON.stringify(object);

              $showbill_7 = JSON.stringify(object)
              
              $showbill_8 = $.parseJSON( $showbill_7)

              $showbill_9 = $showbill_8.instacheckItems;
             
              $array_3 = [ $showbill_9.split("\n")]
              
              console.log($showbill_7);
             
              $("#billsdiv_4").html("<p class='receipt_1'>" + $array_3[0][0]+"</p>")

              for($i = 1; $i < $array_3[0].length ; $i++ ){
                $("#billsdiv_4").append("<p class='receipt_1'>" + $array_3[0][$i]+"</p>")
              }

          },
          error: function(object,error) {
            console.log(error);
          }
        });

 

 // receipt_5

 query.get("XhLjHHk6rk", {
          success: function(object) {
              // console.log(JSON.stringify(object));
              // document.getElementById('billsdiv').innerHTML = JSON.stringify(object);

              $showbill_10 = JSON.stringify(object)
              
              $showbill_11 = $.parseJSON( $showbill_10)

              $showbill_12 = $showbill_11.instacheckItems;
             
              $array_4 = [ $showbill_12.split("\n")]
              
              console.log($showbill_10);
             
              $("#billsdiv_5").html("<p class='receipt_1'>" + $array_4[0][0]+"</p>")

              for($i = 1; $i < $array_4[0].length ; $i++ ){
                $("#billsdiv_5").append("<p class='receipt_1'>" + $array_4[0][$i]+"</p>")
              }

          },
          error: function(object,error) {
            console.log(error);
          }
        });
