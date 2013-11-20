$(function(){
	var formatLabels = {
		prices[0]: 'Small',
		prices[1]: 'Medium',
		prices[2]: 'Large'
	}

	var cartModel = createCartModel();

	var cartView = createCartView({
		model: cartModel,
		template: $('.cart-item-template'),	// all of these are defined in index.html
		container: $('.cart-item-container'),
		totalPrice: $('.total-price')
	});

	var menuModel = createMenuModel(com.dawgpizza.menu); // needs to return a get of list of pizzas/drinks/desserts

	var menuView = createMenuView({

	});
});