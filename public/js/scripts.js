$("document").ready(function() {

	//клик по карте в списке
	$(".list__section").click(function(event) {
		var id = $(this).children(".item__hidden--id").val();
		// $.post("admin/show-card", {"id": id}, function(result){
	 //        $(".section__right--show").empty();
	 //        $(".section__right--show").html(result);
	 //    });
		// $.get("admin/show-card", {"id": id}, function(result){
		//     $(".section__right--show").empty();
		// 	$(".section__right--show").html(result);
		// });
		
	    $.ajax({
			url: 'admin/show-card/' + id,
			type: 'GET',
			//data: {'id': id},
			error: function (xhr, ajaxOptions, thrownError) {
		        alert(xhr.status + ", " + xhr.responseText);
				alert(thrownError);
			},
			success: function(result) {
	 			$('.section__right--show').empty();
	        	$('.section__right--show').html(result);
	 		}
		});
	});

	//клик по кнопке EDIT в выбранной карте
	$('body').on('click', '.btn__edit', function(event) {

		$(".form__edit").css("display", "flex");
		$('.section__right--edit').children().children().children().children(".input__action").val('edit');

		var id = $('.section__right--show').children().children().children(".item__hidden--id").val();
		var name = $('.section__right--show').children().children().children(".item__hidden--name").val();
		var desc = $('.section__right--show').children().children().children(".item__hidden--desc").val();
		var power = $('.section__right--show').children().children().children(".item__hidden--power").val();
		var health = $('.section__right--show').children().children().children(".item__hidden--health").val();
		var price = $('.section__right--show').children().children().children(".item__hidden--price").val();

		//alert(id + ", " + name + ", " + desc + ", " + power + ", " + health + ", " + price);

		$('.section__right--edit').children().children().children().children(".input__name").val(name);
		$('.section__right--edit').children().children().children().children(".input__desc").val(desc);
		$('.section__right--edit').children().children().children().children(".input__power").val(power);
		$('.section__right--edit').children().children().children().children(".input__health").val(health);
		$('.section__right--edit').children().children().children().children(".input__price").val(price);

	});

	//клик по кнопке ОК формы
	$('body').on('click', '.btn__edit--confirm', function(event) {
		
		var action = $('.section__right--edit').children().children().children().children(".input__action").val();
		
		//alert(action);

		if (action == "edit") {
			var id = $('.section__right--show').children().children().children(".item__hidden--id").val();
			var name = $('.section__right--edit').children().children().children().children(".input__name").val();
			var desc = $('.section__right--edit').children().children().children().children(".input__desc").val();
			var power = $('.section__right--edit').children().children().children().children(".input__power").val();
			var health = $('.section__right--edit').children().children().children().children(".input__health").val();
			var price = $('.section__right--edit').children().children().children().children(".input__price").val();

		 	//alert(id + ", " + name + ", " + desc + ", " + power + ", " + health + ", " + price);

		    $.ajax({
			    url: 'admin/update-card',
			    type: 'PUT',
			    data: {
			    	"id": id,
			 		"name": name,
			 		"desc": desc,
			 		"power": power,
			 		"health": health,
			 		"price": price
				},
			});
		}
		else if(action == "create") {

			var name = $('.section__right--edit').children().children().children().children(".input__name").val();
			var desc = $('.section__right--edit').children().children().children().children(".input__desc").val();
			var power = $('.section__right--edit').children().children().children().children(".input__power").val();
			var health = $('.section__right--edit').children().children().children().children(".input__health").val();
			var price = $('.section__right--edit').children().children().children().children(".input__price").val();

			//alert(name + ", " + desc + ", " + power + ", " + health + ", " + price);

			$.post("admin/create-card", {
		 		"name": name,
		 		"desc": desc,
		 		"power": power,
		 		"health": health,
		 		"price": price
		 	}, function(result){
		         //alert("result: " + result);      
		    });
		}
	});
	
	//клик по кнопке DELETE в выбранной карте
	$('body').on('click', '.btn__delete', function(event) {

		var id = $('.section__right--show').children().children().children(".item__hidden--id").val();

	    $.ajax({
			url: 'admin/delete-card',
			type: 'DELETE',
			data: {"id": id},
			success: function() {
	 			location.reload();   //не срабатывает рендеринг, обновляю здесь);
	 		}
		});
	});

	//клик по кнопке CREATE
	$('.btn__create').on('click', function(event) {

		$(".form__edit").css("display", "flex");
		$('.section__right--edit').children().children().children().children(".input__action").val('create');

	});


	//валидация ввода формы изменения карты
	$(".form__edit").validate({
        rules:{
            name:{
                required: true,
                minlength: 1,
                maxlength: 50
            },
            desc:{
                required: true,
                minlength: 0,
                maxlength: 200
            },
            power:{
                required: true,
                number: true,
                min: 1,
                max: 20
            },
            health:{
                required: true,
                number: true,
                min: 1,
                max: 20
            },
            price:{
                required: true,
                number: true,
                min: 1,
                max: 100
            }
        },
        messages:{
            name:{
                required: "this field is required",
                minlength: "min length is 1",
                maxlength: "max length is 50"
            },
            desc:{
                required: "this field is required",
                minlength: "min length is 0",
                maxlength: "max length is 200"
            },
            power:{
                required: "this field is required",
                number: "this field must contain numbers only",
                min: "min value is 1",
                max: "max value is 20"
            },
            health:{
                required: "this field is required",
                number: "this field must contain numbers only",
                min: "min value is 1",
                max: "max value is 20"
            },
            price:{
                required: "this field is required",
                number: "this field must contain numbers only",
                min: "min value is 1",
                max: "max value is 100"
            }
    	}
    });
});