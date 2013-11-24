$(function(){

	var cartModel = createCartModel();

	var cartView = createCartView({
		model: cartModel,
		template: $('.cart-item-template'),	// all of these are defined in index.html
		container: $('.cart-items-container'),
		totalPrice: $('.total-price')
	});

	var menuModel = createMenuModel(com.dawgpizza.menu);

	$('.add-to-cart').click(function(){
    	var newCartItem = {
        	type: this.getAttribute('data-type'),
        	name: this.getAttribute('data-name'),
        	size: this.getAttribute('data-size'),
        	price: parseFloat(this.getAttribute('data-price'))
    	};

    	cartModel.addItem(newCartItem);
    	console.log(cartModel);
}	);

});