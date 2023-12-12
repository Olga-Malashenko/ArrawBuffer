import { arrayBuffer } from './arrayBuffer';

export default class ArrayBufferConverter {
    constructor(data) {
        this.data = data;
        this.arrayBufferView = null;
        this.str = null;
    }

    load() {
        //const jsonStr = JSON.stringify(this.data); // нужно buffer в JSON ?!
        this.arrayBufferView = new Uint8Array(arrayBuffer);
    }

    toString() {
        // а здесь распарсить?..
        let str = '';
        for (let i = 0; i < this.arrayBufferView.length; i++) {
          str += String.fromCharCode(this.arrayBufferView[i]);
        }
        this.str = str;
    }
}

let example = new ArrayBufferConverter(arrayBuffer);
console.log(example);
console.log(example.arrayBufferView); // null
example.load();
console.log('after');
console.log(example.arrayBufferView); //result
example.toString();
console.log(example.str);