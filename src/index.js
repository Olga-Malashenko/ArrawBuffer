import './css/style.css';

// import './js/app';
import Character from './js/app';
import Daemon from './js/Daemon';
import Magician from './js/Magician';
import Math from './js/PowerCalculate';

const player = new Daemon('Ivan', 'Daemon');
let cell = 2;
  player.setStoned();
  player.setDamagePower(cell);
  console.log(player.stoned);
  console.log(player.damagePower);
