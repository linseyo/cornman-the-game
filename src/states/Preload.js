class Preload extends Phaser.State {

	preload() {
		this.game.load.image('mountains-back', 'assets/mountains-back.png');
		this.game.load.image('hills-mid1', 'assets/hills-mid1.png');
		this.game.load.image('fence-mid2', 'assets/fence-mid2.png');
		this.game.load.image('ground-front', 'assets/ground-front.png');
		this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
		this.game.load.image('sky', 'assets/sky.png');
		this.game.load.image('tractor', 'assets/tractor.png')
	}

	create() {
		this.game.state.start("Main");
	}

}

export default Preload;
