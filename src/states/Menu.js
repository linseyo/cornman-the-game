class Menu extends Phaser.State {

  create() {
		// this.startButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'start-button');
    //
		// this.startButton.input.onDown.add(startGame, this);

			this.game.state.start("Main");
	}

}

export default Menu;
