class Orientation extends Phaser.State {
  create() {
    this.game.stage.backgroundColor = '#DFF4FF';
  }

  startGame() {
    this.game.state.start('Menu');
  }
}

export default Orientation;
