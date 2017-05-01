class Preload extends Phaser.State {

	preload() {
		this.game.load.image('mountains-back', 'assets/mountains-back.png');
		this.game.load.image('hills-mid1', 'assets/hills-mid1.png');
		this.game.load.image('fence-mid2', 'assets/fence-mid2.png');
		this.game.load.image('menu-background', 'assets/corn.png');
		this.game.load.image('ground-front', 'assets/ground-front.png');
		this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
		this.game.load.image('sky', 'assets/sky.png');
		this.game.load.image('tractor', 'assets/tractor.png')
		this.game.load.image('rock', 'assets/rock.gif');

		this.game.load.image('restart', 'assets/restart-button.png');
		this.game.load.image('main-menu', 'assets/menu-button.png');
		this.game.load.image('start-game', 'assets/start-button.png');
		this.game.load.image('stop-game', 'assets/stop-button.png');
		this.game.load.spritesheet('tractor', 'assets/Tractor.png', 32, 32, 2);
		this.game.load.spritesheet('weed', 'assets/Weeds.png', 32, 32, 2);

		this.game.load.image('upJump', 'assets/upbutton.png');
		this.game.load.image('fire', 'assets/firebutton.png');
	}

	create() {
		this.game.state.start("Menu");
	}
}

export default Preload;
