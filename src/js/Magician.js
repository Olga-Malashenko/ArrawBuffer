import Character from './app';
import Math from './Math';

export default class Magician extends Math {
  constructor(name, type) {
    super(name, type);
    // this.attack = 10;
    this.defence = 40;
  }
}
