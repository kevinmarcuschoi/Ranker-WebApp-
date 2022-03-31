export default class Item {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  addScore() {
    this.score++;
  }
}
