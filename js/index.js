jQuery(function($){
	
	   $("#read_more").click(function(){
			$(this).addClass("active");
			$(".disnone").slideDown("fast").removeClass("disnone");
			$("#btn_close").addClass("active");
	   });
		
	   $("#btn_close").click(function(){
		   	$("#event li").removeAttr("style");
			$("#event li:eq(2)").nextAll().addClass("disnone");
			$(this).removeClass("active");
			$("#read_more").removeClass("active");
	   });
});