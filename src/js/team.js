export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(player) {
    if (this.members.has(player)) {
      throw new Error('Персонаж уже в команде');
    } else {
      this.members.add(player);
    }
  }

  addAll(...players) {
    for (const item of players) {
      this.members.add(item);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
