function draw(){
	//On button click, load new data
	$("#btn_buid").click(function(){

		var pie_input = new Array();
		var pi_header = new Array();
		pi_header.push("Ingredient");
		pi_header.push("Quantity");
		pie_input.push(pi_header);
  //returns a random number between 1 and 100
    var orderId = Math.floor((Math.random() * 100) + 1);
    var sizes = document.getElementsByName('ht');
      var size;
      var pi_size = new Array();
      for(var i = 0; i < sizes.length; i++){
          if(sizes[i].checked){
              size = sizes[i].value;
              if(size.includes("small")) {
            	  pi_size.push("Small");
            	  pi_size.push(11);
              }
              else if(size.includes("medium")){
            	  pi_size.push("Medium");
            	  pi_size.push(21);
              }
              else if(size.includes("large")){
            	  pi_size.push("Large");
            	  pi_size.push(31);
              }
              else if(size.includes("xl")){
            	  pi_size.push("Extra Large");
            	  pi_size.push(41);
              }
          }
      }
      pie_input.push(pi_size);

    var cheese = document.getElementsByName('cheese');
    var cheeseOptions = new Array();
    var count = 0;
    var pi_cheese = new Array();
      for(var i = 0; i < cheese.length; i++){
          if(cheese[i].checked){
              cheeseOptions.push(cheese[i].value);
              pi_cheese.push(cheese[i].value);
              pi_cheese.push(9);
              pie_input.push(pi_cheese);
              pi_cheese = [];
          }
      }


      var sauce = document.getElementsByName('sauce');
    	var sauceOptions = new Array();
    	var pi_sauce = new Array();
      for(var i = 0; i < sauce.length; i++){
          if(sauce[i].checked){
              sauceOptions.push(sauce[i].value);
              pi_sauce.push(sauce[i].value);
              pi_sauce.push(7);
              pie_input.push(pi_sauce);
              pi_sauce = [];
          }
      }


      var meatToppings = document.getElementsByName('meat');
    var meatOptions = new Array();
    var pi_meat = new Array();
      for(var i = 0; i < meatToppings.length; i++){
          if(meatToppings[i].checked){
              meatOptions.push(meatToppings[i].value);
              pi_meat.push(meatToppings[i].value);
              pi_meat.push(10);
              pie_input.push(pi_meat);
              pi_meat = [];
          }
      }

      var nonMeatToppings = document.getElementsByName('nonmeat');
      var nonMeatOptions = new Array();
      var num = 0;
      var pi_no_meat = new Array();
      for(var i = 0; i < nonMeatToppings.length; i++){
          if(nonMeatToppings[i].checked){
              nonMeatOptions.push(nonMeatToppings[i].value);
              pi_no_meat.push(nonMeatToppings[i].value);
              pi_no_meat.push(12);
              pie_input.push(pi_no_meat);
              pi_no_meat = [];
          }
      }

     params = {
  			'orderId': orderId,
  			'sizes': size,
  			'cheeseOptions':cheeseOptions,
  			'sauceOptions': sauceOptions,
  			'meatOptions':meatOptions,
  			'nonMeatOptions' : nonMeatOptions
  	};

     var data = google.visualization.arrayToDataTable(pie_input);

     var options = {
    		 title:'Pizza Order',
             width:300,
             height:300,

        forceIFrame: 'false',

        is3D: 'true',

        pieSliceText: 'percentage',

        sliceVisibilityThreshold: 1/100
     };

     var chart = new google.visualization.PieChart(document.getElementById('pizza_chart_div'));
     chart.draw(data, options);


  });
}

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Pizza');
    data.addColumn('string', 'Toppings');
    data.addColumn('number', 'number');
    data.addRows([
        ['Salsa','Pepperoni',5],
            ['Salsa','Italian Sausage',15],
            ['Salsa','Sliced Italian Sausage',25],
            ['Salsa','Beef',35],
            ['Pesto','Pepperoni',48],
            ['Pesto','Italian Sausage',50],
            ['Pesto','Sliced Italian Sausage',7],
            ['Pesto','Beef',19],
            ['BBQ','Sliced Italian Sausage',13],
            ['BBQ','Italian Sausage',23],
            ['BBQ','Sliced Italian Sausage',37],
            ['BBQ','Beef',2],
            ['Ranch','Pepperoni',25],
            ['Ranch','Italian Sausage',27],
            ['Ranch','Sliced Italian Sausage',44],
            ['Ranch','Beef',30],
            


    ]);

    // Sets chart options.
    var options = {
        width: 600,
    };

    // Instantiates and draws our chart, passing in some options.
    var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
    chart.draw(data, options);
}




function sendDataToDatabase(){
    alert("hi");
  var orderId = Math.floor((Math.random() * 100) + 1);
  var sizes = document.getElementsByName('ht');
    var size;
    for(var i = 0; i < sizes.length; i++){
        if(sizes[i].checked){
            size = sizes[i].value;
        }
    }
 
  var cheese = document.getElementsByName('cheese');
  var cheeseOptions = new Array();
  var count = 0;
    for(var i = 0; i < cheese.length; i++){
        if(cheese[i].checked){
            cheeseOptions.push(cheese[i].value); 
                
        }  
    }
    
    var sauce = document.getElementsByName('sauce');
  	var sauceOptions = new Array();
  	
    for(var i = 0; i < sauce.length; i++){
        if(sauce[i].checked){
            sauceOptions.push(sauce[i].value); 
             
        }  
    }
   
    var meatToppings = document.getElementsByName('meat');
  var meatOptions = new Array();
    for(var i = 0; i < meatToppings.length; i++){
        if(meatToppings[i].checked){
            meatOptions.push(meatToppings[i].value); 
                  
        }
        
    }
   
    var nonMeatToppings = document.getElementsByName('nonmeat');
    var nonMeatOptions = new Array();
    var num = 0;
    for(var i = 0; i < nonMeatToppings.length; i++){
        if(nonMeatToppings[i].checked){
            nonMeatOptions.push(nonMeatToppings[i].value);
        }
    }
    
   params = {
			'orderId': orderId,
			'sizes': size,
			'cheeseOptions':cheeseOptions,
			'sauceOptions': sauceOptions,
			'meatOptions':meatOptions,
			'nonMeatOptions' : nonMeatOptions
	}
   
	$.ajax({
		type: "POST",
	   dataType : "application/json",
	   url: '/savedata',
	   data: params,
	   contentType: "application/x-www-form-urlencoded; charset=UTF-8", // this is the default value, so it's optional
	   success : function(result) {
	   },
	});
   
   alert("Order placed into the database.\nOrder ID: " + orderId);
}





