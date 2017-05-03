class Orientation extends Phaser.State {
  create() {
    this.game.stage.backgroundColor = '#DFF4FF';
    this.game.add.image(0 , 0, 'orientation');
    this.game.scale.forceOrientation(true, false);
    if(this.game.device.desktop === false) {
      if(this.game.scale.incorrectOrientation){
        this.game.scale.onOrientationChange.add(this.startGame, this);
      }
      else {
        this.startGame();
      }
    }
    else {
      this.startGame();
    }
  }

  startGame() {
    this.game.state.start('Menu');
  }
}

export default Orientation;
