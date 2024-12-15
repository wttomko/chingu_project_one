class List {
    constructor(name){
        this.name = name;
        this.items = [];
    }
    addItem(item){
        this.items.push(item);
    }

    removeItem(item){
        this.items = this.items.filter(i => i !== item);
    }

    updateItem(oldItem, newItem){
        this.items = this.items.map(i => i === oldItem ? newItem : i);
    }

    getItems(){
        return this.items;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    clearItems(){
        this.items = [];
    }

}

const shoppingList = new List('Shopping List');
const inHouse = new List('In House');

shoppingList.addItem('Milk');
shoppingList.addItem('Bread');
inHouse.addItem('Toilet Paper');
inHouse.addItem('Soap');

module.exports = { shoppingList, inHouse, List };