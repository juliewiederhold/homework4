$(function(){
	var menuModel = createMenuModel(com.dawgpizza.menu);
	
	var cartModel = createCartModel();

	var cartView = createCartView({
		model: cartModel,
		template: $('.cart-item-template'),	
		container: $('.cart-items-container'),
		subTotalPrice: $('.sub-total-price'),
		totalPrice: $('.total-price')
	});

    // Adds items to the shopping cart
	$('.add-to-cart').click(function(){
    	var newCartItem = {
        	type: this.getAttribute('data-type'),
        	name: this.getAttribute('data-name'),
        	size: this.getAttribute('data-size'),
        	price: parseFloat(this.getAttribute('data-price'))
    	};

    	cartModel.addItem(newCartItem);
	});

    // Places the order and calls post function to http://dawgpizza.com/orders/
    $('.place-order').click(function(){
        if(cartModel.getTotalPrice() < 20) {
            alert("Dawg Pizza only delivers if the order is $20 or more. Please add something to your order, our desserts are delicious!");
        } else {
            cartModel.name = submit.find('input[name="name"]').val();
            cartModel.address1 = submit.find('input[name="address1"]').val();
            cartModel.address2 = submit.find('input[name="address2"]').val();
            cartModel.zip = submit.find('input[name="zip"]').val();
            cartModel.phone = submit.find('input[name="phone"]').val();

            postCart(cartModel, $('.cart-form'));
        }
        
    });

    // Sets the input named "cart" to the passed cart's value
    // then posts to http://dawgpizza.com/orders/
    function postCart(cart, cartForm) {
        cartForm.find('input[name="cart"]').val(JSON.stringify(cart));
        cartForm.submit();
    }

});