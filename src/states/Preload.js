class Preload extends Phaser.State {

	preload() {
		this.game.load.image('mountains-back', 'assets/mountains-back.png');
		this.game.load.image('hills-mid1', 'assets/hills-mid1.png');
		this.game.load.image('fence-mid2', 'assets/fence-mid2.png');
		this.game.load.image('menu-background', 'assets/corn.png');
		this.game.load.image('ground-front', 'assets/ground-front.png');
		// this.game.load.image('rock', 'assets/rock.gif');
		this.game.load.image('sky', 'assets/sky.png');

		this.game.load.image('restart', 'assets/restart-button.png');
		this.game.load.image('main-menu', 'assets/menu-button.png');
		this.game.load.image('start-game', 'assets/start-button.png');
		this.game.load.image('stop-game', 'assets/stop-button.png');

		this.game.load.spritesheet('cow-menu', 'assets/cow-menu-spritesheet.png', 210, 210, 2);
	}

	create() {
		this.game.state.start("Menu");
	}
}

export default Preload;
