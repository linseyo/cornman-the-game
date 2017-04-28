class Preload extends Phaser.State {

	preload() {
		this.game.load.image('mountains-back', 'assets/mountains-back.png');
		this.game.load.image('hills-mid1', 'assets/hills-mid1.png');
		this.game.load.image('fence-mid2', 'assets/fence-mid2.png');
		this.game.load.image('ground-front', 'assets/ground-front.png');
<<<<<<< HEAD
		this.game.load.image('rock', 'assets/rock.gif');
=======
		this.game.load.image('sky', 'sky.png');
>>>>>>> d728164d82582be089f73a7d3d71e1053d4a352c
		
	}

	create() {
		this.game.state.start("Main");
	}

}

export default Preload;
