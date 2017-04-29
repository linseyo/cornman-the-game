class Preload extends Phaser.State {

	preload() {
		this.game.load.image('mountains-back', 'assets/mountains-back.png');
		this.game.load.image('hills-mid1', 'assets/hills-mid1.png');
		this.game.load.image('fence-mid2', 'assets/fence-mid2.png');
		this.game.load.image('menu-background', 'assets/corn.png');
		this.game.load.image('ground-front', 'assets/ground-front.png');
<<<<<<< HEAD
		this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
		this.game.load.image('sky', 'assets/sky.png');
		this.game.load.image('tractor', 'assets/tractor.png')
=======
<<<<<<< HEAD
		// this.game.load.image('rock', 'assets/rock.gif');
		this.game.load.image('sky', 'assets/sky.png');
=======
		this.game.load.image('rock', 'assets/rock.gif');
		// this.game.load.image('sky', 'assets/sky.png');

>>>>>>> render-obstacles
>>>>>>> master
	}

	create() {
		this.game.state.start("Menu");
	}
}

export default Preload;
