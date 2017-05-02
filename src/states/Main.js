class Main extends Phaser.State {
	constructor() {
		super();
		this.groundFront;
		this.player;
		this.jumpButton;
		this.doubleJump = 1;
		this.jumpTimer = 0;
		this.timer = 0;
		this.total = 0;
		this.totalScore = 0;
		this.tractor;
		this.weed;
	}

	create() {
		// Score and coinCounter reinitialize to zero upon restarting
		this.enemiesPassed = 0;
		this.coinCounter = 0;
		this.totalScore = 0;

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

		this.enemyScore = this.game.add.text(20, 20, "0", { font: "30px Arial", fill: "#fffff"});
		this.coinScore = this.game.add.text(60, 20, "0", { font: "30px Arial", fill: "#fffff"});
		this.sumScore = this.game.add.text(100, 20, "0", { font: "30px Arial", fill: "#fffff"});

		this.player = this.game.add.sprite(500, 1000, 'cornman');
		// this.player.scale.setTo(3, 3);

		this.player.animations.add('left', [0, 1, 2, 3], 10, true);
		this.player.animations.add('right', [0, 1, 2, 3], 10, true);

		this.game.physics.arcade.enable([this.player, this.groundFront]);
		this.player.body.collideWorldBounds = true;
		this.player.body.gravity.y = -50;
		// this.player.body.maxVelocity.y = 1000;

		this.groundFront.body.collideWorldBounds = true;
		this.groundFront.body.immovable = true;
		this.groundFront.body.allowGravity = false;

		this.obstacles = this.game.add.group();
		this.coinBag = this.game.add.group();

		this.stopButton = this.game.add.button(this.game.width - 90, 15, 'stop-game', this.stopGame, this);

		// Create Button Controller
			// Jump Button
		this.buttonJump = this.add.button(-(this.world.width*0.5), 0, 'blank', null, this);
		this.buttonJump.scale.setTo(20, 20)
		this.buttonJump.onInputDown.add(this.jumpPressed, this);
		// this.buttonJump.onInputUp.add(this.jumpReleased, this);


		this.fireButton = this.game.add.button((this.game.world.width*0.5), 0, 'blank', null, this);
		this.fireButton.onInputDown.add(this.goShootPressed, this);
		this.fireButton.onInputUp.add(this.goShootReleased, this);

	}

	addCoins() {
		// Generate Obstacles
		this.coin = this.game.add.sprite( 2800, 800, 'coin');
		this.game.physics.arcade.enable(this.coin);
		this.coin.body.allowGravity = false;

		this.game.add.tween(this.coin).to({
			x: this.coin.x - 55000 }, 110000, Phaser.Easing.Linear.None, true);

		this.coinBag.add(this.coin);
		this.total++;
		this.timer = this.game.time.now + 6000;
		this.coin.checkWorldBounds = true;
		this.coin.outofBoundsKill = true;
	}

	addCows() {
		// Generate Obstacles
		this.cow = this.game.add.sprite( 2800, 1290, 'cow');
		// Gives each cow a point to grant when player passes successfully
		this.cow.grantPoint = true;

		this.game.physics.arcade.enable(this.cow);

		this.cow.animations.add('walk')
		this.cow.animations.play('walk', 3, true);

		this.game.add.tween(this.cow).to({
			x: this.cow.x - 55000 }, 110000, Phaser.Easing.Linear.None, true);

		this.obstacles.add(this.cow);
		this.total++;
		this.timer = this.game.time.now + 6000;
		this.cow.checkWorldBounds = true;
		this.cow.outofBoundsKill = true;
	}

	jumpPressed(){
		if((this.game.time.now > this.jumpTimer) && this.doubleJump <= 2) {
			this.player.body.velocity.y = -1250;
			this.player.body.velocity.x = 2;
			this.jumpTimer = this.game.time.now + 200;
			this.doubleJump += 1;
		}
	}

	// jumpReleased(){}

	goShootPressed(){}

	goShootReleased(){}

	addTractors() {
		// Generate Obstacles
		this.tractor = this.game.add.sprite( 2800, 1225, 'tractor', );
		// Gives each tractor a point to grant when player passes successfully
		this.tractor.grantPoint = true;

		this.game.physics.arcade.enable(this.tractor);

		this.tractor.animations.add('walk')
		this.tractor.animations.play('walk', 200, true);

		this.game.add.tween(this.tractor).to({
			x: this.tractor.x - 70000 }, 110000, Phaser.Easing.Linear.None, true);

		this.obstacles.add(this.tractor);
		this.total++;
		this.timer = this.game.time.now + 4000;
		this.tractor.checkWorldBounds = true;
		this.tractor.outofBoundsKill = true;
	}

	addWeeds() {
		this.weed = this.game.add.sprite( 3500 ,1000, 'weed', );
		// Gives each weed a point to grant when player passes successfully
		this.weed.grantPoint = true;

		this.game.physics.arcade.enable(this.weed);


		this.weed.animations.add('waddle')
		this.weed.animations.play('waddle', 1000, true);
		this.weed.animations.getAnimation('waddle').delay = 500

		this.game.add.tween(this.weed).to({
			x: this.weed.x - 300000 }, 110000, Phaser.Easing.Linear.None, true);


		this.obstacles.add(this.weed);
		this.total++;
		this.timer = this.game.time.now + 9000;
		this.weed.checkWorldBounds = true;
		this.weed.outofBoundsKill = true;
	}

	endGame() {
		this.game.state.start('Stats');
	}


	update() {
		this.player.animations.play('right');
		this.game.physics.arcade.collide(this.player, this.groundFront);
		this.game.physics.arcade.collide(this.weed, this.groundFront);
		this.game.physics.arcade.collide(this.tractor, this.groundFront);
		this.game.physics.arcade.collide(this.cow, this.groundFront);
		this.game.physics.arcade.collide(this.coin, this.groundFront);

		this.mountainsBack.tilePosition.x -= 0.10;
		this.hillsMid1.tilePosition.x -= 0.3;
		this.fenceMid2.tilePosition.x -= 3.0;
		this.groundFront.tilePosition.x -= 6.0;

		// Jump Functionality on pointerClick
		if(this.player.body.touching.down){
			this.doubleJump = 1;
		}
		// Jump Functionality with button press

		// Generate Obstacles
		if (this.total < 1000 && this.game.time.now > this.timer){
			this.addTractors();
			this.addWeeds();
			this.addCows();
			this.addCoins();
		}

		// Functionality to count passing enemies ONCE
		if (this.weed.grantPoint && (this.weed.x < this.player.x)){
			this.enemiesPassed++;
			this.weed.grantPoint = false;
			this.enemyScore.text = this.enemiesPassed;
			this.totalScore = (this.enemiesPassed + this.coinCounter);
			this.sumScore.text = this.totalScore;
		}

		if (this.cow.grantPoint && (this.cow.x < this.player.x)){
			this.enemiesPassed++;
			this.cow.grantPoint = false;
			this.enemyScore.text = this.enemiesPassed;
			this.totalScore = (this.enemiesPassed + this.coinCounter);
			this.sumScore.text = this.totalScore;

		}

		if (this.tractor.grantPoint && (this.tractor.x < this.player.x)){
			this.enemiesPassed++;
			this.tractor.grantPoint = false;
			this.enemyScore.text = this.enemiesPassed;
			this.totalScore = (this.enemiesPassed + this.coinCounter);
			this.sumScore.text = this.totalScore;

		}

		// Collision to collect Corn Coins
		this.game.physics.arcade.overlap(
			this.player, this.coinBag, this.countCoin, null, this);

		// Collision to End Game between Player & Obstacles
		this.game.physics.arcade.overlap(
			this.player, this.obstacles, this.endGame, null, this);
		}
		//
		countCoin() {
			this.coinCounter++;
			this.totalScore = (this.enemiesPassed + this.coinCounter);
			this.coin.kill();
			this.coinScore.text = this.coinCounter;
			this.sumScore.text = this.totalScore;
		}

}

export default Main;
