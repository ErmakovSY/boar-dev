$("document").ready(function() {
	$(".list__section").click(function(event) {
		var id = $(this).children(".item__hidden--id").val();
																//alert("id: " + id);
		// $.ajax({ 
		// 	type: "POST", 
		//  url: "./show-card",
		// 	data: { "id": id },
		// 	//dataType: "json",
		// 	success: function(){
  //   			alert('Redirected to /show-page');
  //   		}
		// });

		$.post("admin/show-card", {"id": id}, function(result){
	        													//alert("result: " + result);
	        $(".section__right--show").empty();
	        $(".section__right--show").html(result);
	    });

	    // $.get("./show-card?id=" + id, function(result){
	    //     alert("result: " + result);
	    // });
	});

	$("btn__edit").click(function(){

	});
});