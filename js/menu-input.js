// 
$(function() {
    render(com.dawgpizza.menu);
});

function render(menu){
    var templatePizza = $('.pizza');
    var templateDD = $('.drinks-dessert'); //merge templates

    var idx;
    var pizza;
    var drinks;
    var dessert;

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

        pizzasContainer.append(clonePizza);
        clonePizza.removeClass('template');
    }

    for(idx = 0; idx < menu.drinks.length; ++idx) {
        var cloneDrinks = templateDD.clone();
        drinks = menu.drinks[idx];

        cloneDrinks.find('.name').html(drinks.name);
        cloneDrinks.find('.price').html(drinks.price);

        drinksContainer.append(cloneDrinks);
        cloneDrinks.removeClass('template');
    }

    for(idx = 0; idx < menu.desserts.length; ++idx) {
        var cloneDessert = templateDD.clone();
        dessert = menu.desserts[idx];

        cloneDessert.find('.name').html(dessert.name);
        cloneDessert.find('.price').html(dessert.price);

        dessertsContainer.append(cloneDessert);
        cloneDessert.removeClass('template');
    }
}

