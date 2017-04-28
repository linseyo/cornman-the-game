class Preload extends Phaser.State {

	preload() {
		this.game.load.image('mountains-back', 'assets/mountains-back.png');
		this.game.load.image('hill-front', 'assets/hill-front.png');
		this.game.load.image('fence-mid2', 'assets/fence-mid2.png');
		this.game.load.image('ground-front', 'assets/ground-front.png');
		this.game.load.image('rock', 'assets/rock.gif');
	}

	create() {
		this.game.state.start("Main");
	}

}

export default Preload;
