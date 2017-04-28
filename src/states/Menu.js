class Menu extends Phaser.State {

  update() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Main');
    }
  }

}

export default Menu;
