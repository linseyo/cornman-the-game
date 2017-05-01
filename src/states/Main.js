class Main extends Phaser.State {
	constructor() {
		super();
		this.groundFront;
		this.player;
		this.jumpButton;
		this.jumpTimer = 0;
		this.timer = 0;
		this.total = 0;
		this.score = 0;
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

		this.labelScore = this.game.add.text(20, 20, "0", { font: "30px Arial", fill: "#fffff"});

		this.player = this.game.add.sprite(500, 1000, 'dude');
		this.player.scale.setTo(3, 3);

		this.player.animations.add('left', [0, 1, 2, 3], 10, true);
		this.player.animations.add('right', [5, 6, 7, 8], 10, true);

		this.game.physics.arcade.enable([this.player, this.groundFront]);
		this.player.body.collideWorldBounds = true;

		this.groundFront.body.collideWorldBounds = true;
		this.groundFront.body.immovable = true;
		this.groundFront.body.allowGravity = false;

		this.tractors = this.game.add.group();
		this.weeds = this.game.add.group();
		this.stopButton = this.game.add.button(this.game.width - 90, 15, 'stop-game', this.stopGame, this);
	}

	stopGame() {
		this.game.state.start('Stats');
	}


	addTractors() {
		// Generate Obstacles
		// this.tempRock = this.game.add.sprite(0,0, 'rock');
		this.tractor = this.game.add.sprite( this.game.world.randomX + 3000,
			(this.game.height - this.groundFront.height) - 275, 'tractor');
		// this.tractor.scale.setTo(5, 5);

		this.tractor.animations.add('walk')
		this.tractor.animations.play('walk', 200, true);

		this.game.add.tween(this.tractor).to({
			x: this.tractor.x - 20000 }, 110000, Phaser.Easing.Linear.None, true);

		this.tractors.add(this.tractor);
		this.total++;
		this.timer = this.game.time.now + 6000;
		this.tractor.checkWorldBounds = true;
		this.tractor.outofBoundsKill = true;
		this.score += 1;
		this.labelScore.text = this.score;

	}

	addWeeds() {
		this.weed = this.game.add.sprite( this.game.world.randomX + 1350,
			(this.game.height - this.groundFront.height) - 120, 'weed', );
		// this.weed.scale.setTo(5, 5);

		this.weed.animations.add('waddle')
		this.weed.animations.play('waddle', 1000, true);
		this.weed.animations.getAnimation('waddle').delay = 500

		this.game.add.tween(this.weed).to({
			x: this.weed.x - 20000 }, 110000, Phaser.Easing.Linear.None, true);


		this.weeds.add(this.weed);
		this.total++;
		this.timer = this.game.time.now + 9000;
		this.weed.checkWorldBounds = true;
		this.weed.outofBoundsKill = true;
		this.score += 1;
		this.labelScore.text = this.score;

	}

	endGame() {
		this.game.state.start('Stats');
	}


	update() {
		this.player.animations.play('right');
		this.game.physics.arcade.collide(this.player, this.groundFront);

		this.mountainsBack.tilePosition.x -= 0.10;
		this.hillsMid1.tilePosition.x -= 0.3;
		this.fenceMid2.tilePosition.x -= 3.0;
		this.groundFront.tilePosition.x -= 6.0;


		if(this.game.input.activePointer.justPressed() && this.player.body.touching.down && (this.game.time.now > this.jumpTimer)) {
			this.player.body.velocity.y = -1200;
			this.player.body.velocity.x = 2;
			this.jumpTimer = this.game.time.now + 750;
		}

		if (this.total < 1000 && this.game.time.now > this.timer){
			this.addTractors();
			this.addWeeds();
		}

		this.game.physics.arcade.overlap(
			this.player, this.tractors, this.endGame, null, this);

		this.game.physics.arcade.overlap(
				this.player, this.weeds, this.endGame, null, this);


	}

}

export default Main;
