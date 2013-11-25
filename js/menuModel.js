/*
    createMenuModel()

    Creates a model for the menu items for sale.
    This uses the ListModel as the prototype, but adds 
    a few specific methods.

    The config parameter should contain the following properties:
    - url (string) URL from which we should fetch movie JSON
*/

function createMenuModel(config) {
    return render(config);  
} //createMenuModel()