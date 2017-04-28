class Menu extends Phaser.State {

  create() {
    this.game.stage.backgroundColor = '#DFF4FF';
    this.menuBackground = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'menu-background');
    this.menuBackground.autoScroll(0, -20);
    this.menuBackground.alpha = 0.5;

    this.startText = this.game.add.text(this.game.width/2, this.game.height/2, "Tap to begin", { font: "80px Arial", fill: "#fff", align: "center" });
  }

  update() {

    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Main');
    }
  }

}

export default Menu;
