class Menu extends Phaser.State {
  constructor() {
    super()
    this.music;
  }

  create() {
    this.game.stage.backgroundColor = '#DFF4FF';

    this.menuBackground = this.game.add.tileSprite(0, 0, screen.width, screen.width, 'menu-background');
    this.menuBackground.scale.setTo(1.02, 1.02)
    // console.log(this.game.width);
    // console.log(this.game.height);
    // console.log(screen.width);
    // console.log(screen.height);
    this.menuBackground.autoScroll(0, -15);
    this.menuBackground.alpha = 0.5;

    let title = this.game.add.image(screen.width*0.5, screen.height*0.5, 'cm-title');
    title.scale.setTo(3, 3);
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
