class Main extends Phaser.State {
	constructor() {
		super();
		this.groundFront;
		this.player;
		this.jumpButton;
		this.jumpTimer = 0;
	}

	create() {
		//Enable Arcade Physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 2000;

		//Set the games background colour
		this.game.stage.backgroundColor = '#4f90c1';

		this.mountainsBack = this.game.add.tileSprite(0,
			this.game.height - this.game.cache.getImage('mountains-back').height,
			this.game.width,
			this.game.cache.getImage('mountains-back').height,
			'mountains-back'
		);

		this.hillsMid1 = this.game.add.tileSprite(0,
			this.game.height - this.game.cache.getImage('hills-mid1').height,
			this.game.width,
			this.game.cache.getImage('hills-mid1').height,
			'hills-mid1'
		);

		this.fenceMid2 = this.game.add.tileSprite(0,
			this.game.height - this.game.cache.getImage('fence-mid2').height,
			this.game.width,
			this.game.cache.getImage('fence-mid2').height,
			'fence-mid2'
		);

		this.groundFront = this.game.add.tileSprite(0,
			this.game.height - this.game.cache.getImage('ground-front').height,
			this.game.width,
			this.game.cache.getImage('ground-front').height,
			'ground-front'
		);

		this.player = this.game.add.sprite(500, 1000, 'dude');
		this.player.scale.setTo(3, 3);
		// this.player.enableBody = true;

		this.player.animations.add('left', [0, 1, 2, 3], 10, true);
		this.player.animations.add('right', [5, 6, 7, 8], 10, true);

		this.game.physics.arcade.enable([this.player, this.groundFront]);
		this.player.body.collideWorldBounds = true;

		this.groundFront.body.collideWorldBounds = true;
		this.groundFront.body.immovable = true;
		this.groundFront.body.allowGravity = false;

		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		// this.jumpButton = this.game.input.MOUSE_TOUCH_COMBINE;
	}

	update() {
		this.player.animations.play('right');
		this.game.physics.arcade.collide(this.player, this.groundFront);
		this.mountainsBack.tilePosition.x -= 0.10;
		this.hillsMid1.tilePosition.x -= 0.3;
		this.fenceMid2.tilePosition.x -= 0.75;
		this.groundFront.tilePosition.x -= 10.0;
		// console.log("updating")
		// this.player.body.velocity.y = 0;
		// console.log(this.jumpTimer, this.game.time.now);
		if(this.jumpButton.isDown && this.player.body.touching.down && (this.game.time.now > this.jumpTimer)) {
			console.log("hello!");
			this.player.body.velocity.y = -1000;
			this.jumpTimer = this.game.time.now + 750;
		// 	// this.player.animations.play('left', [3]);
		}
	}

}

export default Main;
