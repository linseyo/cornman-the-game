class Main extends Phaser.State {
	constructor() {
		super();
		this.groundFront;
		this.player;
		this.jumpButton;
		this.doubleJump = 1;
		this.jumpTimer = 0;
		this.cowTimer = 0;
		this.weedTimer = 0;
		this.tractorTimer = 0;
		this.coinTimer = 0;
		this.cloudTimer = 0;
		this.goldTimer = 0;
		this.cowTotal = 0;
		this.coinTotal = 0;
		this.weedTotal = 0;
		this.tractorTotal = 0;
		this.cloudTotal = 0;
		this.goldTotal = 0;
		this.powerSpawnTotal = 0;
		this.powerSpawnTimer = 0
		this.totalScore = 0;
		this.superBigTimer = 0;
		this.tractor;
		this.weed;
		this.kernel;
		this.ammo;
		this.fireRate = 100;
		this.nextFire = 0;
	}

	create() {
		// Score and coinCounter & ammoCounter reinitialize to zero upon restarting
		this.enemiesPassed = 0;
		this.coinCounter = 0;
		this.totalScore = 0;
		this.ammoCounter = 2;

		//Enable Arcade Physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 2000;

		//Set the games background colour
		this.game.stage.backgroundColor = '#c8f2fb';
		// this.sky = this.game.add.sprite(0,0,'sky');
		// this.sky.scale.setTo(5,5);

		this.mountainsBack = this.game.add.tileSprite(0,
			this.game.height - (this.game.cache.getImage('mountains-back').height / 2),
			this.game.cache.getImage('mountains-back').width,
			this.game.cache.getImage('mountains-back').height,
			'mountains-back'
	 	 );
			this.mountainsBack.scale.setTo((this.game.aspectRatio * 0.85), (this.game.aspectRatio * 0.85))

	 	this.hillsMid1 = this.game.add.tileSprite(0,
			this.game.height - (this.game.cache.getImage('mountains-back').height / 2),
			this.game.cache.getImage('hills-mid1').width,
			this.game.cache.getImage('hills-mid1').height,
			'hills-mid1'
	 );
	 this.hillsMid1.scale.setTo((this.game.aspectRatio * 0.95), (this.game.aspectRatio * 0.95))

	 this.fenceMid2 = this.game.add.tileSprite(0,
		 (this.game.height - this.game.cache.getImage('fence-mid2').height / 2),
		 this.game.cache.getImage('fence-mid2').width,
		 this.game.cache.getImage('fence-mid2').height,
		 'fence-mid2'
	 );
	 this.fenceMid2.scale.setTo((this.game.aspectRatio * 0.85), (this.game.aspectRatio * 0.85));

	 this.groundFront = this.game.add.tileSprite(0,
			(this.game.height - this.game.cache.getImage('ground-front').height) + 80,
			this.game.width,
			this.game.cache.getImage('ground-front').height - 40 ,
			'ground-front'
		);

		// COUNTERS & LEGEND
		this.game.add.text(20, 20, "Enemies Dodged: ");
		this.enemyScore = this.game.add.text(280, 20, "0");

		this.lilCorn1 = this.game.add.sprite(20, 55, 'coin');
		this.lilCorn1.scale.setTo(0.25, 0.25);
		this.game.add.text(60, 60, "Coins: ")
		this.coinScore = this.game.add.text(280, 60, "0");

		this.game.add.text(20, 100, "Total Score: ");
		this.sumScore = this.game.add.text(280, 100, "0");

		this.game.add.text(70, 140, "Bullets: ");
		this.lilBullet = this.game.add.sprite(20, 142, 'bullet');
		this.lilBullet.scale.setTo(0.75, 0.75);
		this.lilBullet.animations.add('fire');
		this.lilBullet.animations.play('fire', 5, true);
		this.ammoTotal = this.game.add.text(280, 140, "2", {fill: "#ff0000"});

		this.game.add.text(400, 20, "Collect         to Reload Bullets");
		this.lilCorn2 = this.game.add.sprite(505, 15, 'golden-corn');
		this.lilCorn2.scale.setTo(0.25, 0.25);
		this.lilCorn2.animations.add('shine');
		this.lilCorn2.animations.play('shine', 8, true);

		this.game.add.text(400, 60, "Collect         to Power Up");

		// THE CORNMAN
		this.player = this.game.add.sprite(100,0, 'cornman');
		this.player.scale.setTo(this.game.aspectRatio / 1.75, this.game.aspectRatio / 1.75)
		this.player.animations.add('left', [0, 1, 2, 3, 4, 5, 6], 5, true);
		this.player.animations.add('right', [0, 1, 2, 3, 4, 5, 6], 5, true);
		this.game.physics.arcade.enable([this.player, this.groundFront]);
		this.player.body.collideWorldBounds = true;
		this.player.body.gravity.y = -50;
		this.player.powerLevel = false;

		this.groundFront.body.collideWorldBounds = true;
		this.groundFront.body.immovable = true;
		this.groundFront.body.allowGravity = false;

		// Groups
		this.obstacles = this.game.add.group();
		this.coinBag = this.game.add.group();
		this.goldenSatchel = this.game.add.group();
		this.cumulonimbus = this.game.add.group();
		this.fertilizer = this.game.add.group();

		// Stop Button
		this.stopButton = this.game.add.button(this.game.width - 90, 15, 'stop-game', this.stopGame, this);


		// Create Button Controller
			// Jump Button
		this.buttonJump = this.add.button(-(this.world.width*0.5), 0, 'blank', null, this);
		this.buttonJump.scale.setTo(20, 20)
		this.buttonJump.onInputDown.add(this.jumpPressed, this);

			// Fire Button & Keyboard Press
		this.fireButton = this.add.button((this.game.world.width*0.5), 0, 'blank', null, this);
		this.fireButton.scale.setTo(20, 20)
		this.fireButton.onInputDown.add(this.goShootPressed, this);
		this.fire = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
		this.fire.onDown.add(this.goShootPressed, this);

		// Create Firing Object group
		this.ammo = this.game.add.group();
		this.ammo.enableBody = true;
		this.ammo.physicsBodyType = Phaser.Physics.ARCADE;
		// Create 10 bullets upon initialization
		this.ammo.createMultiple(2, 'bullet', false);

		this.ammo.callAll('animations.add', 'animations', 'fly', [0, 1], 3, true);
		this.ammo.callAll('play', null, 'fly');

		// this.ammo.setAll('checkWorldBounds', true);
		// this.ammo.setAll('outOfBoundsKill', true);
		this.ammo.setAll('anchor.x', - 2);
    this.ammo.setAll('anchor.y', - 1);

		//  An popcorn pool
    this.popcorn = this.game.add.group();
    this.popcorn.createMultiple(100, 'popcorn');
    this.popcorn.forEach(this.setupPopcorn, this);

		// Creates popcorn explosion
		this.poppin = this.game.add.emitter(0, 0, 150);
		this.poppin.makeParticles('popcorn');
		this.poppin.gravity = 300;
	}

	addClouds() {
		// Generate Obstacles
		this.cloud = this.game.add.sprite(this.game.rnd.integerInRange(480, 960), this.game.rnd.integerInRange(0, 455), 'cloud-ani');
		this.game.physics.arcade.enable(this.cloud);
		this.cloud.scale.setTo(this.game.aspectRatio / 4, this.game.aspectRatio / 4)
		this.cloud.body.allowGravity = false;
		this.cloud.body.immovable = true;
		this.cloud.animations.add('float');
		this.cloud.animations.play('float', 1, true);

		this.game.add.tween(this.cloud).to({
			x: this.cloud.x - 5500 }, 25000, Phaser.Easing.Linear.None, true);

		this.cumulonimbus.add(this.cloud);
		this.cloudTotal++;
		this.cloudTimer = this.game.time.now + this.game.rnd.integerInRange(500, 4000);
		this.cloud.checkWorldBounds = true;
		this.cloud.outofBoundsKill = true;
	}

	addCoins() {
		// Generate Obstacles
		this.coin = this.game.add.sprite(this.game.rnd.integerInRange(480, 960), this.game.rnd.integerInRange(0, 450), 'coin');
		this.game.physics.arcade.enable(this.coin);
		this.coin.scale.setTo(this.game.aspectRatio / 2, this.game.aspectRatio / 2)
		this.coin.body.allowGravity = false;
		// this.coin.body.immovable = true;

		this.game.add.tween(this.coin).to({
			x: this.coin.x - 55000 }, 110000, Phaser.Easing.Linear.None, true);

		this.coinBag.add(this.coin);
		this.coinTotal++;
		this.coinTimer = this.game.time.now + this.game.rnd.integerInRange(2000,  6000)
		this.coin.checkWorldBounds = true;
		this.coin.outofBoundsKill = true;
	}

	addGoldCorn() {
		// Generate Obstacles
		this.goldCorn = this.game.add.sprite(this.game.rnd.integerInRange(480, 960), this.game.rnd.integerInRange(0, 450), 'golden-corn');
		this.game.physics.arcade.enable(this.goldCorn);
		this.goldCorn.scale.setTo(this.game.aspectRatio / 2, this.game.aspectRatio / 2)
		this.goldCorn.body.allowGravity = false;

		this.goldCorn.animations.add('shine')
		this.goldCorn.animations.play('shine', 3, true);

		this.game.add.tween(this.goldCorn).to({
			x: this.goldCorn.x - 55000 }, 140000, Phaser.Easing.Linear.None, true);

		this.goldenSatchel.add(this.goldCorn);
		this.goldTotal++;
		this.goldTimer = this.game.time.now + 12000;
		this.goldCorn.checkWorldBounds = true;
		this.goldCorn.outofBoundsKill = true;
	}

	addPowerup() {
		// Generate Obstacles
		this.powerup = this.game.add.sprite(this.game.rnd.integerInRange(480, 960), this.game.rnd.integerInRange(0, 450), 'taco');
		this.game.physics.arcade.enable(this.powerup);
		this.powerup.scale.setTo(this.game.aspectRatio / 2, this.game.aspectRatio / 2)
		this.powerup.body.allowGravity = false;

		// this.powerup.animations.add('taco')
		// this.powerup.animations.play('taco', 3, true);

		this.game.add.tween(this.powerup).to({
			x: this.powerup.x - 55000 }, 1400000, Phaser.Easing.Linear.None, true);

		this.fertilizer.add(this.powerup);
		this.powerSpawnTotal++;
		this.powerSpawnTimer = this.game.time.now + 200000;
		this.powerup.checkWorldBounds = true;
		this.powerup.outofBoundsKill = true;
	}

	// Popcorn Animation
	setupPopcorn(obstacle){
		obstacle.animations.add('popcorn');
	}

	// Touch Enabled jumping function
	jumpPressed(){
		if((this.game.time.now > this.jumpTimer) && this.doubleJump <= 2) {
			this.player.body.velocity.y = -1000;
			this.jumpTimer = this.game.time.now + 200;
			this.doubleJump += 1;
		}
	}

	// Touch + Keyboard enabled shooting
	goShootPressed(){
		if(this.game.time.now > this.nextFire && this.ammo.countDead() > 0) {
			this.nextFire = this.game.time.now + this.fireRate;
			this.kernel = this.ammo.getFirstDead(false);
			this.kernel.physicsBodyType = Phaser.Physics.ARCADE;
			this.kernel.bulletSpeed = 600
			this.kernel.bulletAngleOffset = 90;
			this.kernel.reset(this.player.x + 10, this.player.y + 10);
			this.kernel.body.velocity.x = 1000;
			this.kernel.body.allowGravity = false;
			// this.kernel.kill();
			this.ammoCounter--;
			this.ammoTotal.text = this.ammoCounter;
		}
	}



	addCows() {
		// Generate Obstacles
		this.cow = this.game.add.sprite( 965, 480, 'cow');
		this.cow.scale.setTo(this.game.aspectRatio / 2, this.game.aspectRatio / 2)
		// Gives each cow a point to grant when player passes successfully
		this.cow.grantPoint = true;
		this.game.physics.arcade.enable(this.cow);
		this.cow.animations.add('walk')
		this.cow.animations.play('walk', 3, true);

		this.game.add.tween(this.cow).to({
			x: this.cow.x - 5500 }, 11000, Phaser.Easing.Linear.None, true);

		this.obstacles.add(this.cow);
		this.cowTotal++;
		this.cowTimer = this.game.time.now + 3000;
		this.cow.checkWorldBounds = true;
		this.cow.outofBoundsKill = true;
	}

	addTractors() {
		// Generate Obstacles
		this.tractor = this.game.add.sprite(965, 450, 'tractor');
		this.tractor.scale.setTo(this.game.aspectRatio / 2, this.game.aspectRatio / 2)
		// Gives each tractor a point to grant when player passes successfully
		this.tractor.grantPoint = true;
		this.game.physics.arcade.enable(this.tractor);
		this.tractor.animations.add('walk')
		this.tractor.animations.play('walk', 200, true);

		this.game.add.tween(this.tractor).to({
			x: this.tractor.x - 6000 }, 9000, Phaser.Easing.Linear.None, true);

		this.obstacles.add(this.tractor);
		this.tractorTotal++;
		this.tractorTimer = this.game.time.now + this.game.rnd.integerInRange(6000, 10000);
		this.tractor.checkWorldBounds = true;
		this.tractor.outofBoundsKill = true;
	}


	addWeeds() {
		this.weed = this.game.add.sprite(965, 480, 'weed' );
		this.weed.scale.setTo(this.game.aspectRatio / 2, this.game.aspectRatio / 2)

		// Gives each weed a point to grant when player passes successfully
		this.weed.grantPoint = true;
		this.game.physics.arcade.enable(this.weed);

		this.weed.animations.add('waddle')
		this.weed.animations.play('waddle', 1000, true);
		this.weed.animations.getAnimation('waddle').delay = 500

		this.game.add.tween(this.weed).to({
			x: this.weed.x - 8000 }, 15000, Phaser.Easing.Linear.None, true);

		this.obstacles.add(this.weed);
		this.weedTotal++;
		this.weedTimer = this.game.time.now + this.game.rnd.integerInRange(2000, 9000);
		this.weed.checkWorldBounds = true;
		this.weed.outofBoundsKill = true;
	}

	endGame() {
		this.game.state.start('Stats')
	}


	destroyWeed(kernel, weed){
		this.kernel.kill();
		this.weed.kill();
		this.ammoCounter++;
		this.ammoTotal.text = this.ammoCounter;

		// Create Popcorn Effect
		this.poppin.x = this.weed.centerX;
		this.poppin.y = this.weed.centerY;

		this.poppin.start(true, 2000, null, 10);
	}

	destroyTractor(kernel, tractor){
		this.kernel.kill();
		this.tractor.kill();
		this.ammoCounter++;
		this.ammoTotal.text = this.ammoCounter;
		// Create Popcorn Effect
		this.poppin.x = this.tractor.centerX;
		this.poppin.y = this.tractor.centerY;

		this.poppin.start(true, 2000, null, 10);
	}

	destroyCow(kernel, cow){
		this.kernel.kill();
		this.cow.kill();
		this.ammoCounter++;
		this.ammoTotal.text = this.ammoCounter;
		// Create Popcorn Effect
		this.poppin.x = this.cow.centerX;
		this.poppin.y = this.cow.centerY;

		this.poppin.start(true, 2000, null, 10);
	}

	update() {
		this.player.animations.play('right');
		this.game.physics.arcade.collide(this.player, this.groundFront);
		this.game.physics.arcade.collide(this.weed, this.groundFront);
		this.game.physics.arcade.collide(this.tractor, this.groundFront);
		this.game.physics.arcade.collide(this.cow, this.groundFront);
		this.game.physics.arcade.collide(this.coin, this.groundFront);

		if (this.player.body.velocity.y > 0) {
			this.game.physics.arcade.collide(this.player, this.cumulonimbus);
		}

		this.mountainsBack.tilePosition.x -= 0.10;
		this.hillsMid1.tilePosition.x -= 0.3;
		this.fenceMid2.tilePosition.x -= 3.0;
		this.groundFront.tilePosition.x -= 6.0;

		if(this.player.body.touching.down){
			this.doubleJump = 1;
		}

		// Generate Obstacles
		if (this.tractorTotal < 1000 && this.game.time.now > this.tractorTimer){
			this.addTractors();
		}
		if (this.weedTotal < 1000 && this.game.time.now > this.weedTimer){
			this.addWeeds();
		}
		if (this.cowTotal < 1000 && this.game.time.now > this.cowTimer){
			this.addCows();
		}
		if (this.coinTotal < 1000 && this.game.time.now > this.coinTimer){
			this.addCoins();
		}
		if (this.goldTotal < 1000 && this.game.time.now > this.goldTimer){
			this.addGoldCorn();
		}
		if (this.cloudTotal < 1000 && this.game.time.now > this.cloudTimer){
			this.addClouds();
		}

		if (this.powerSpawnTotal < 100 && this.game.time.now > this.powerSpawnTimer){
			this.addPowerup();
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

		this.game.physics.arcade.overlap(
			this.player, this.goldenSatchel, this.ammoReload, null, this);

		this.game.physics.arcade.overlap(
			this.player, this.fertilizer, this.activatePower, null, this);

		if (this.player.powerLevel === true){
				this.invicibleCorn();
		}

		// if (this.player.powerLevel === false){
		// 	// Collision to End Game between Player & Obstacles
		// 	this.game.physics.arcade.overlap(
		// 		this.player, this.obstacles, this.endGame, null, this);
		// }

		this.game.physics.arcade.overlap(
			this.ammo, this.weed, this.destroyWeed, null, this);

		this.game.physics.arcade.overlap(
			this.ammo, this.cow, this.destroyCow, null, this);

		this.game.physics.arcade.overlap(
			this.ammo, this.tractor, this.destroyTractor, null, this);

	}

	invicibleCorn() {
		this.bigCorn = this.game.add.tween(this.player.scale).to( { x: 1.5, y: 1.5 }, 200, Phaser.Easing.Linear.None, true, 0, 0, false);
		// this.bigCorn.onComplete.add(this.powerTime)
		// this.game.time.events.add(50, () => { this.bigCorn.stop() })
		this.game.physics.arcade.overlap(this.player, this.cow, this.bulldozeCow, null, this)
		this.game.physics.arcade.overlap(this.player, this.weed, this.bulldozeWeed, null, this);
		this.game.physics.arcade.overlap(this.player, this.tractor, this.bulldozeTractor, null, this);
		if (this.game.time.now > this.superBigTimer) {
			this.powerLevelDecrease();
		}
	}

	powerLevelDecrease() {
		// Reset Player Level to False in order to run Collision
		// this.bigCorn.stop(true)
		this.littleCorn = this.game.add.tween(this.player.scale).to( { x: this.game.aspectRatio / 1.75, y: this.game.aspectRatio / 1.75 }, 200,
		Phaser.Easing.Linear.None, true, 0, 0, false);
		this.littleCorn.onComplete.removeAll();
		this.superBigTimer = 0;
		if (this.superBigTimer === 0){
			this.player.powerLevel = false;
		}
	}

	bulldozeWeed(weed){
		this.weed.kill();

		// Create Popcorn Effect
		this.poppin.x = this.weed.centerX;
		this.poppin.y = this.weed.centerY;

		this.poppin.start(true, 2000, null, 10);
	}

	bulldozeTractor(tractor){
		this.tractor.kill();
		// Create Popcorn Effect
		this.poppin.x = this.tractor.centerX;
		this.poppin.y = this.tractor.centerY;

		this.poppin.start(true, 2000, null, 10);
	}

	bulldozeCow(cow){
		this.cow.kill();
		// Create Popcorn Effect
		this.poppin.x = this.cow.centerX;
		this.poppin.y = this.cow.centerY;

		this.poppin.start(true, 2000, null, 10);
	}

	activatePower(player, powerup){
		powerup.destroy();
		this.superBigTimer =  this.game.time.now + 6000;
		this.player.powerLevel = true;
	}

	ammoReload(player, goldCorn){
		// Add reload function to the same callback
		this.ammo.createMultiple(2, 'bullet', false);
		goldCorn.destroy();
		this.ammoCounter += 2;
		this.ammoTotal.text = this.ammoCounter;
	}

	countCoin(player, coin) {
		this.coinCounter++;
		this.totalScore = (this.enemiesPassed + this.coinCounter);
		coin.destroy();
		// this.coinBag.children[0].kill();
		// this.coinBag.children[0].destroy();
		this.coinScore.text = this.coinCounter;
		this.sumScore.text = this.totalScore;
	}
}

export default Main;
