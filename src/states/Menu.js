class Menu extends Phaser.State {
  constructor() {
    super()
    this.music;
  }

  create() {
    this.game.stage.backgroundColor = '#DFF4FF';

    this.menuBackground = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'menu-background');
    this.menuBackground.scale.setTo(3.06, 3.06)
    this.menuBackground.autoScroll(0, -20);
    this.menuBackground.alpha = 0.5;

    let title = this.game.add.image(200, 300, 'cm-title');
    title.scale.setTo(3, 3);
    this.startButton = this.game.add.button(this.game.width-1700, this.game.height-500, 'start-game', this.startGame, this);
    this.music = this.game.add.audio('banjo');
    this.moozic();
  }

  moozic() {
    this.music.play();
  }

  startGame() {
      this.game.state.start('Main')
  }

}

export default Menu;
