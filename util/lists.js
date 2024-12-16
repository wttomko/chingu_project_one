class Item {
    constructor(name, category, percentFull=100){
        this._name = name;
        this._category = category;
        this._percentFull = percentFull;
    }

    getName(){
        return this._name;
    }

    setName(name){
        this._name = name;
    }

    getCategory(){
        return this._category;
    }

    setCategory(category){
        this._category = category;
    }

    getPercentFull(){
        return this._percentFull;
    }

    consume(){
        this._percentFull -= 10;
    }

}

class List {
    constructor(name){
        this._name = name;
        this._items = [];
    }
    addItem(item){
        if (item instanceof Item) {
            this._items.push(item);
        }
    }

    removeItem(item){
        this._items = this._items.filter(i => i.name !== item.name);
    }

    getItems(){
        return this._items;
    }

    getName(){
        return this._name;
    }

    clearItems(){
        this._items = [];
    }

}

const shoppingList = new List('Shopping List');
const inHouse = new List('In House');

shoppingList.addItem('Milk');
shoppingList.addItem('Bread');
inHouse.addItem('Toilet Paper');
inHouse.addItem('Soap');

module.exports = { shoppingList, inHouse, List };