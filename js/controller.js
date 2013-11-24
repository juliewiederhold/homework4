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
    	console.log(cartModel);
	});

	$('.place-order').click(function(){
		var message = "Dawg Pizza only delivers if the order is $20 or more.";
		if(cartModel.items.length > 0 && cartModel.totalPrice < 20) {
			console.log(message);
			alert(message);
		}
	});

	$('.sort-ui .btn').click(function(){
        var sortBtn = $(this);
        var sortAttr = sortBtn.attr('data-sortby');
        if('data-sortby' == 'drinks') {
        	sortObjArray(menuModel.drinksArray, sortAttr);
        	render(menuModel.drinks);
        }
        else if ('data-sortby' == 'dessert'){ 
        	sortObjArray(menuModel.dessertArray, sortAttr);
        	render(menuModel.dessert);
        }
        else {
        	sortObjArray(menuModel.pizzasArray, sortAttr);
        	render(menuModel.pizzas);
        }
        
        $.each(sortBtn.siblings(), function(){
            var sibling = $(this);
            sibling.removeClass('active');
        });
    });

});