class Orientation extends Phaser.State {
  create() {
    this.game.stage.backgroundColor = '#DFF4FF';
    this.game.add.image(100 , 100, 'orientation')
  }

  startGame() {
    this.game.state.start('Menu');
  }
}

export default Orientation;
