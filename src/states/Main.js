class Main extends Phaser.State {
	constructor() {
		super();
		// let platforms;
		// let ground;
		let groundFront;
		let player;
	}

	create() {
		//Enable Arcade Physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 1000;

		//Set the games background colour
		this.game.stage.backgroundColor = '#4f90c1';

		// this.groundFront.enableBody = true;

		// var ground = this.platforms.create(0, this.game.world.height - 64, 'ground-front');
		// ground.scale.setTo(2, 2);
		// ground.immovable = true;

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

		// console.log(this.groundFront);
		// this.game.physics.arcade.enable(this.groundFront);
		// this.groundFront.immovable = true;
		// this.groundFront.body.moves = false;
		// this.groundFront.allowGravity = false;
		// this.groundFront.body.gravity.x = 0;
		// this.groundFront.body.gravity.y = 0;
		// this.groundFront.body.velocity.x = 0;
		// this.groundFront.body.velocity.y = 0;
		// this.groundFront.body.enable = false;

		//

		this.player = this.game.add.sprite(500, 1000, 'dude');
		this.player.scale.setTo(3, 3);
		// this.game.physics.arcade.enable(this.player);
		// this.player.body.bounce.y = 0.2;
		// this.player.body.gravity.y = 300;
		// this.player.body.collideWorldBounds = true;
		//
		this.player.animations.add('left', [0, 1, 2, 3], 10, true);
		this.player.animations.add('right', [5, 6, 7, 8], 10, true);
		// this.game.physics.enable([this.groundFront, this.player], Phaser.Physics.ARCADE);
		this.game.physics.arcade.enable([this.player, this.groundFront]);
		this.player.body.collideWorldBounds = true;
		// this.player.body.bounce.set(1);
		this.groundFront.body.collideWorldBounds = true;
		this.groundFront.body.immovable = true;
		this.groundFront.body.allowGravity = false;
	}

	update() {
		this.game.physics.arcade.collide(this.player, this.groundFront);
		this.mountainsBack.tilePosition.x -= 0.10;
		this.hillsMid1.tilePosition.x -= 0.3;
		this.fenceMid2.tilePosition.x -= 0.75;
		this.groundFront.tilePosition.x -= 10.0;

	}

}

export default Main;
