import Character from './app';

export default class Math extends Character {
  constructor(name, type, stoned = false, damagePower = 10) {
    super(name, type);
    // this.attack = 10;
    this.stoned = stoned;
    this.damagePower = damagePower;
  }

  setStoned() {
    this.stoned = true;
  }

  resetStoned() {
    this.stoned = false;
  }

  setDamagePower(cell) {
    if (typeof cell !== 'number' || !Number.isInteger(cell) || cell < 1 || cell > 5) {
      throw new Error('Аттака c такой позиции невозможна');
    }
    this.damagePower = this.calculateDamagePower(cell); // ??
  }

  calculateDamagePower(cell) {
    /* if (typeof cell !== 'number' || !Number.isInteger(cell) || cell < 1 || cell > 5) {
      throw new Error('Аттака c такой позиции невозможна');
    } */
    let damage = this.damagePower * ((10 - (cell - 1)) / 10);

    if (this.stoned) {
      damage -= Math.round(Math.log2(cell) * 5);
    }

    return damage;
  }

  /* get attack() {
        return this.attack;
    }

    set attack(value) {
        if (value < 1 || value > 5) {
            console.log(this);
            console.log(value);

            throw new Error('Аттака невозможна');
        }
        this.attack = 10 - (value - 1); // 10 * ((100 - (cell - 1) * 10) / 100)
    }

    get stoned() {
        return this.stoned;
    }

    set stoned(value) {
        this.attack = value;
        const currentAttack = this.attack;
        this.stoned = currentAttack - log2(value) * 5;
    } */
}
