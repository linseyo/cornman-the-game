class Menu extends Phaser.State {

  create() {
    this.game.stage.backgroundColor = '#DFF4FF';
    this.menuBackground = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'menu-background');
    this.menuBackground.autoScroll(0, -20);
    this.menuBackground.alpha = 0.5;
  }

  update() {

    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Main');
    }
  }

}

export default Menu;
