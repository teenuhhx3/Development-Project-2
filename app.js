function goBack() {
    window.history.back();
}

$(document).ready(function()
		{
	
	 $("#btn1").click(function(){
	        $(".button").animate({height: "100px"});
	    });
	
			$(".button").click( function()
			        {
			          alert('button clicked');
			        }
			 );
			
		});

$(document).ready(function(){
	$(".imagesContainer").click(function(){
		alert("Image Clicked");
	});	
});

$(document).ready(function(){
    $("#resume").click(function(){
        $("#marq").toggleClass("main");
    });
});