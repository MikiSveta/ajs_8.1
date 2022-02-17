export default class Character {
  constructor(name) {
    this.name = name;
  }
}

export const daemon = new Character('Daemon');
export const zombie = new Character('Zombie');
export const undead = new Character('Undead');
