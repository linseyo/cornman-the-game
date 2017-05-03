class Menu extends Phaser.State {
  constructor() {
    super()
    this.music;
  }

  create() {
    this.game.stage.backgroundColor = '#DFF4FF';

    this.menuBackground = this.game.add.tileSprite(0, 0, screen.width, screen.height, 'menu-background');
    this.menuBackground.autoScroll(0, -15);
    this.menuBackground.alpha = 0.5;

    this.title = this.game.add.image(screen.width / 2, screen.height / 3, 'cm-title');
    this.title.anchor.setTo(0.5);
    this.title.scale.setTo(this.game.aspectRatio, this.game.aspectRatio);

    this.startButton = this.game.add.button(this.game.width-1700, this.game.height-500, 'start-game', this.startGame, this);
    this.howButton = this.game.add.button(this.game.width-1700, this.game.height-300, 'how-to', this.startHow, this);
    this.music = this.game.add.audio('banjo');
    this.moozic();



  }

  moozic() {
    this.music.play();
  }

  startGame() {
      this.game.state.start('Main')
  }

  startHow() {
      this.game.state.start('How')
  }

}

export default Menu;
