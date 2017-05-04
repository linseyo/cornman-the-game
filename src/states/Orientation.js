class Orientation extends Phaser.State {
  // constructor() {
  //   super()
  //   this.timer = this.game.time.now;
  // }
  create() {
    this.moozic = this.game.add.audio('banjo');
    this.moozic.play();

    this.game.stage.backgroundColor = '#DFF4FF';
    let turnImage = this.game.add.image(0 , 0, 'orientation');
    turnImage.x = 0;
    turnImage.y = 0;
    turnImage.height = 640;
    turnImage.width = 960;
    this.game.scale.forceOrientation(true, false);
      if(window.innerWidth > window.innerHeight){
        this.startGame();
      }
    }

    update() {
      if(this.game.innerWidth < this.game.innerHeight){
        this.startGame();
      }
    }

  startGame() {
    this.game.state.start('Menu');
  }
}

export default Orientation;
