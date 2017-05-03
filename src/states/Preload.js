class Preload extends Phaser.State {

	preload() {
		// Background Environment Assets
		this.game.load.image('mountains-back', 'assets/mountains-back.png');
		this.game.load.image('hills-mid1', 'assets/hills-mid1.png');
		this.game.load.image('fence-mid2', 'assets/fence-mid2.png');
		this.game.load.image('menu-background', 'assets/corn.png');
		this.game.load.image('ground-front', 'assets/ground-front.png');

		// Menu Assets
		this.game.load.image('cm-title', 'assets/cm-title-darksub.png')
		this.game.load.image('restart', 'assets/restart-button.png');
		this.game.load.image('main-menu', 'assets/menu-button.png');
		this.game.load.image('start-game', 'assets/start-button.png');
		this.game.load.image('stop-game', 'assets/stop-button.png');
		this.game.load.image('send', 'assets/send.png');
		this.game.load.image('how-to', 'assets/how-to.png');
		this.game.load.image('go-back', 'assets/go-back.png');
		this.game.load.spritesheet('instruction', 'assets/instruction.png', 786, 590);

		// Player Assets
		this.game.load.spritesheet('cornman', 'assets/cornman2.png', 145, 204);

		// Pixel Obstacle Assets
		this.game.load.spritesheet('tractor', 'assets/tractor.png', 294, 284);
		this.game.load.spritesheet('weed', 'assets/Weeds.png', 160, 160);
		this.game.load.spritesheet('cow', 'assets/cow.png', 255, 255);

		// Pixel Neutral Assets
		this.game.load.image('coin', 'assets/corn-coin.png');
		this.game.load.spritesheet('cloud-ani', 'assets/cloud-Sheet.png', 559, 200);
		this.game.load.spritesheet('golden-corn', 'assets/golden-coin.png', 140, 140);

		// Pixel Weapon Assets
		this.game.load.spritesheet('bullet', 'assets/bullet.png', 62, 32);
		this.game.load.image('popcorn', 'assets/popcorn.png');

		// Sound & Music Assets
		this.game.load.audio('banjo', 'assets/banjo-music.mp3')

		// Unused Assets
		this.game.load.image('sky', 'assets/sky.png');
		this.game.load.image('rock', 'assets/rock.gif');
		this.game.load.image('blank', 'assets/blankbutton.png');
		this.game.load.image('blank', 'assets/blankbutton.png');
	}

	create() {
		this.game.state.start("Menu");

		this.moozic = this.game.add.audio('banjo');
		this.moozic.play();
	}
}

export default Preload;
