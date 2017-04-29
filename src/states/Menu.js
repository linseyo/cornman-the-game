class Menu extends Phaser.State {

  create() {
    this.game.stage.backgroundColor = '#DFF4FF';

    this.menuBackground = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'menu-background');
    this.menuBackground.scale.setTo(3.06, 3.06)
    this.menuBackground.autoScroll(0, -20);
    this.menuBackground.alpha = 0.5;

    let text = "Tap to begin"
    this.startText = this.game.add.text(this.game.width/2, this.game.height/2, text, { font: "50px Arial", textalign: "center"});
    this.startButton = this.game.add.button(0, 0, 'start-game', this.startGame, this);
  }

  startGame() {
      this.game.state.start('Main')
  }

}

export default Menu;
