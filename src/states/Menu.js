class Menu extends Phaser.State {
  constructor() {
    super()
    this.music;
  }

  create() {
    this.game.stage.backgroundColor = '#DFF4FF';

    this.menuBackground = this.game.add.tileSprite(0, 0, 960, 640, 'menu-background');
    this.menuBackground.autoScroll(0, -15);
    this.menuBackground.alpha = 0.5;

    this.title = this.game.add.image(this.game.widthHalf, this.game.height/3, 'cm-title');
    this.title.anchor.setTo(0.5);

    //startButton position is dependent upon title position
    this.startButton = this.game.add.button(this.game.widthHalf, (this.title.y) + (this.title.height/1.5), 'start-game', this.startGame, this);
    this.startButton.anchor.setTo(0.5);

    //howButton position is dependent upon startButton position`
    this.howButton = this.game.add.button(this.game.widthHalf, (this.startButton.y) + (this.startButton.height/0.75), 'how-to', this.startHow, this);
    this.howButton.anchor.setTo(0.5);
  }

  startGame() {
      this.game.state.start('Main')
  }

  startHow() {
      this.game.state.start('How')
  }
}

export default Menu;
