$(function(){
	var menuModel = createMenuModel(com.dawgpizza.menu);
	
	var cartModel = createCartModel();

	var cartView = createCartView({
		model: cartModel,
		template: $('.cart-item-template'),	// all of these are defined in index.html
		container: $('.cart-items-container'),
		subTotalPrice: $('.sub-total-price'),
		totalPrice: $('.total-price')
	});

	$('.add-to-cart').click(function(){
    	var newCartItem = {
        	type: this.getAttribute('data-type'),
        	name: this.getAttribute('data-name'),
        	size: this.getAttribute('data-size'),
        	price: parseFloat(this.getAttribute('data-price'))
    	};

    	cartModel.addItem(newCartItem);
	});

	$('.place-order').click(function(){
		if(cartModel.getTotalPrice() < 20) {
			//alert("Dawg Pizza only delivers if the order is $20 or more. Please add something to your order, our desserts are delicious!");
		}
	});

	// $('.sort-ui .btn').click(function(){
 //        var sortBtn = $(this);
 //        var sortAttr = sortBtn.attr('data-sortby');
 //        if('data-sortby' == 'drinks') {
 //        	sortObjArray(menuModel.drinksArray, sortAttr);
 //        	render(menuModel.drinks);
 //        }
 //        else if ('data-sortby' == 'dessert'){ 
 //        	sortObjArray(menuModel.dessertArray, sortAttr);
 //        	render(menuModel.dessert);
 //        }
 //        else {
 //        	sortObjArray(menuModel.pizzasArray, sortAttr);
 //        	render(menuModel.pizzas);
 //        }
        
 //        $.each(sortBtn.siblings(), function(){
 //            var sibling = $(this);
 //            sibling.removeClass('active');
 //        });
 //    });

    $('.place-order').click(function(){
        alert('a');
        cartModel.name = $('name-input').val();
        var valid = (null != cartModel.name && cartModel.name.length > 0);
        alert(valid.val());
        if(!valid) {
            alert("Please fill out the entire form.");            
        }
        // var json = cartModel.JSON.stringify();

        $.ajax({
            type: 'POST',
            url: 'http://dawgpizza.com/orders/',
            contentType: 'application/json',
            dataType: 'json',
            data: cartModel.JSON.stringify()
        });

        // $.post("http://dawgpizza.com/orders/", cartModel);
    });

    // $('.place-order').submit(function(){
    //     var valid = (null != value && value.length > 0);
    //     if(!valid) {
    //         alert("Please fill out the entire form.");            
    //     }

    //     cartModel.name = $('name-input').val();

    //     // var json = JSON.stringify();
    //     console.log(cartModel.name);
    //     $.post("http://dawgpizza.com/orders/", cartModel);
    // });

});