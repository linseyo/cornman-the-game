class Main extends Phaser.State {
	constructor(){
		super();
		this.timer = 0;
		this.total = 0;
	}
	create() {

		//Enable Arcade Physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

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



		// this.game.physics.enable(this.tempRock);
		this.addRocks();
	}

	addRocks() {
		// Generate Obstacles
		// this.tempRock = this.game.add.sprite(0,0, 'rock');
		this.tempRock = this.game.add.sprite( 3000,
			(this.game.height - this.groundFront.height) - 200, 'rock', );
		this.tempRock.scale.setTo(3, 3);

		this.tempRock.animations.add('walk')
		this.tempRock.animations.play('walk', 200, true);

		this.game.add.tween(this.tempRock).to({
			x: this.tempRock.x - 20000 }, 180000, Phaser.Easing.Linear.None, true);

		this.total++;
		this.timer = this.game.time.now + 18000;
	}

	update() {
		this.mountainsBack.tilePosition.x -= 0.10;
		this.hillsMid1.tilePosition.x -= 0.3;
		this.fenceMid2.tilePosition.x -= 3.0;
		this.groundFront.tilePosition.x -= 6.0;

		if (this.total < 200 && this.game.time.now > this.timer){
			this.addRocks();
		}
	}

}

export default Main;
