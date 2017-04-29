class Main extends Phaser.State {
	constructor() {
		super();
		this.groundFront;
		this.player;
		this.jumpButton;
		this.jumpTimer = 0;
		this.timer = 0;
		this.total = 0;
	}

	create() {
		//Enable Arcade Physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 2000;

		//Set the games background colour
		this.game.stage.backgroundColor = '#c8f2fb';
		// this.sky = this.game.add.sprite(0,0,'sky');
		// this.sky.scale.setTo(5,5);

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

		// this.tractor = this.game.add.sprite(1000, 1350, 'tractor');
		// this.tractor.scale.setTo(0.25, 0.25);

		this.player = this.game.add.sprite(500, 1000, 'dude');
		this.player.scale.setTo(3, 3);

		this.player.animations.add('left', [0, 1, 2, 3], 10, true);
		this.player.animations.add('right', [5, 6, 7, 8], 10, true);

		this.game.physics.arcade.enable([this.player, this.groundFront]);
		this.player.body.collideWorldBounds = true;

		this.groundFront.body.collideWorldBounds = true;
		this.groundFront.body.immovable = true;
		this.groundFront.body.allowGravity = false;

		this.addRocks();

	}

	addRocks() {
		// Generate Obstacles
		// this.tempRock = this.game.add.sprite(0,0, 'rock');
		this.tempRock = this.game.add.sprite( 3000,
			(this.game.height - this.groundFront.height) - 130, 'rock', );
		this.tempRock.scale.setTo(2, 2);

		this.tempRock.animations.add('walk')
		this.tempRock.animations.play('walk', 200, true);

		this.game.add.tween(this.tempRock).to({
			x: this.tempRock.x - 20000 }, 110000, Phaser.Easing.Linear.None, true);

		this.total++;
		this.timer = this.game.time.now + 18000;

		this.tempRock.checkWorldBounds = true;
		this.tempRock.outofBoundsKill = true;

	}

	update() {
		this.player.animations.play('right');
		this.game.physics.arcade.collide(this.player, this.groundFront);
		this.mountainsBack.tilePosition.x -= 0.10;
		this.hillsMid1.tilePosition.x -= 0.3;
		this.fenceMid2.tilePosition.x -= 3.0;
		this.groundFront.tilePosition.x -= 10.0;


		if(this.game.input.activePointer.justPressed() && this.player.body.touching.down && (this.game.time.now > this.jumpTimer)) {
			this.player.body.velocity.y = -1200;
			this.player.body.velocity.x = 2;
			this.jumpTimer = this.game.time.now + 750;
		}

		if (this.total < 200 && this.game.time.now > this.timer){
			this.addRocks();
		}
	}
}

export default Main;
