'use strict';
class Storage {
  constructor([...items]) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }
  addItem(item) {
    for (let key of items) {
      if (item !== key) {
        items.push(item);
        break;
      }
    }
  }

  removeItem(item) {
    for (let i = 0; i < items.length; i += 1) {
      if (item === items[i]) {
        items.splice(i, 1);
      }
    }
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.log(items);
storage.addItem('Дроид');
console.log(storage.items);
storage.removeItem('Пролонгер');
console.log(storage.items);
