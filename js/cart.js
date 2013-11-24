/*
    createCartModel()

    Creates a model for the shopping cart. This uses the ListModel
    as the prototype, but adds a few specific methods.

    The config parameter can contain the following properties:
    - items (array of objects) initial items for the cart (optional)
*/


function createCartModel() {
    var model = {
        name: null,
        address1: null,
        address2: null,
        zip: null,
        phone: null,
        items: []
    };

    makeEventSource(model);

    model.addItem = function(item) {
        this.items.push(item);
        this.trigger("change");
    };

    model.removeItem = function(item){
        var idx;
        for (idx = 0; idx < this.items.length; ++idx) {
            if (item === this.items[idx]) {
                this.items.splice(idx, 1);
                this.trigger('change');
                break;
            }
        } //for each item
    }

    model.toJSON = function(){
        return JSON.stringify(this);
    };

    model.getItems = function() {
        return this.items;
    };

    model.getSubTotalPrice = function() {
        var idx;
        var subTotalPrice = 0; 

        for(idx = 0; idx < this.items.length; ++idx){
            subTotalPrice += this.items[idx].price;
        }
        
        return subTotalPrice.toFixed(2);
    }

    model.getTotalPrice = function() {
        var idx;
        var totalPrice = 0;

        for(idx = 0; idx < this.items.length; ++idx){
            totalPrice += this.items[idx].price + (this.items[idx].price * .095);
        }
        return totalPrice.toFixed(2);
    };

    return model;
}
