// JavaScript Document
$ (function(){
	$ ("map area").click( function(){
		
		if ($(this). attr ("id") == "A Cup") {
			$ ("#feedback").css("color","green");
			$("#feedback").html("Carrying your own reusable cup when you're out and about will help cut down on unnecessary waste.");
		}
if ($(this). attr ("id") == "A Bag") {
			$ ("#feedback").css("color","green");
			$("#feedback").html("Bringing your own reusable bag whenever you can to avoid using plastic bags.");
		}
if ($(this).attr("id") == "A Trash") {
         $("#feedback").css("color","green");
			$("#feedback").html("Sorting trash properly, will reduce the waste that goes into the garbage dump and the earth becomes less polluted.");
} 
if ($(this). attr ("id") == "A Jar") {
			$ ("#feedback").css("color","green");
			$("#feedback").html("Consider reusing your glass containers to save money and reduce waste.");
		}		  
		if ($(this). attr ("id") == "A Bottle") {
			$ ("#feedback").css("color","green");
			$("#feedback").html("Using a reusable water bottle helps reduce plastic use, which is the most destructive to the environment.");
		}		  
		
			$("#feedback").css("backgroundColor","white");
$('#myModal').modal("show");
   });
}); //end main jQuery function
