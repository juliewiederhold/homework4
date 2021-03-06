/* 
    Renders the page by filling in the template for
    the pizza, drinks, and desserts on both the menu and 
    online order page.
*/

function render(menu){
    var templatePizza = $('.pizza');
    var templateDD = $('.drinks-dessert');

    var idx;
    var pizza;
    var drinks;
    var dessert;

    /* Fills out the pizza container */
    var pizzasContainer = $(".menu-content .pizzas");
    var drinksContainer = $(".menu-content .drinks");
    var dessertsContainer = $(".menu-content .dessert");
    
    for (idx = 0; idx < menu.pizzas.length; ++idx) {
        var clonePizza = templatePizza.clone();

        pizza = menu.pizzas[idx];

        clonePizza.find('.name').html(pizza.name);
        clonePizza.find('.description').html(pizza.description);
        clonePizza.find('.small').html(pizza.prices[0]);
        clonePizza.find('.medium').html(pizza.prices[1]);
        clonePizza.find('.large').html(pizza.prices[2]);

        /* Fills out buttons for ordering online when necessary*/
        if(clonePizza.find('.add-to-cart').length > 0){
            clonePizza.find('.add-small').attr('data-price', pizza.prices[0]);
            clonePizza.find('.add-medium').attr('data-price', pizza.prices[1]);
            clonePizza.find('.add-large').attr('data-price', pizza.prices[2]);
            clonePizza.find('.add-to-cart').attr('data-name', pizza.name);
        }
        

        pizzasContainer.append(clonePizza);
        clonePizza.removeClass('template');
    }

    /* Fills out the drinks container */
    for(idx = 0; idx < menu.drinks.length; ++idx) {
        var cloneDrinks = templateDD.clone();
        drinks = menu.drinks[idx];

        cloneDrinks.find('.name').html(drinks.name);
        cloneDrinks.find('.price').html(drinks.price);

        /* Fills out buttons for ordering online when necessary*/
        if(cloneDrinks.find('.add-to-cart').length > 0){
            cloneDrinks.find('.add-drink-dessert').attr('data-name', drinks.name);
            cloneDrinks.find('.add-drink-dessert').attr('data-price', drinks.price);
        }

        drinksContainer.append(cloneDrinks);
        cloneDrinks.removeClass('template');
    }

    /* Fills out the dessert container */
    for(idx = 0; idx < menu.desserts.length; ++idx) {
        var cloneDessert = templateDD.clone();
        dessert = menu.desserts[idx];

        cloneDessert.find('.name').html(dessert.name);
        cloneDessert.find('.price').html(dessert.price);

        /* Fills out buttons for ordering online when necessary*/
        if(cloneDrinks.find('.add-to-cart').length > 0){
            cloneDessert.find('.add-drink-dessert').attr('data-name', drinks.name);
            cloneDessert.find('.add-drink-dessert').attr('data-price', drinks.price);
        }

        dessertsContainer.append(cloneDessert);
        cloneDessert.removeClass('template');
    }
} /* render(config)*/

