class Main extends Phaser.State {
	constructor(){
		super();

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

		this.stopButton = this.game.add.button(this.game.width - 90, 15, 'stop-game', this.stopGame, this);

		this.cow = this.game.add.sprite(1490, 725, 'cow');
		this.cow.animations.add('walk');
		this.cow.animations.play('walk', 3, true);

		this.corn = this.game.add.sprite(0, 0, 'corn-coin');
	}

	stopGame() {
		this.game.state.start('Stats');
	}

	addRocks() {
		// Generate Obstacles
		this.tempRock = this.game.add.sprite(this.game.world.randomX,
			(this.game.height - this.groundFront.height) + 200, 'rock');
		this.tempRock.scale.setTo(3, 3);
	}

	update() {
		this.mountainsBack.tilePosition.x -= 0.10;
		this.hillsMid1.tilePosition.x -= 0.3;
		this.fenceMid2.tilePosition.x -= 3.0;
		this.groundFront.tilePosition.x -= 6.0;
	}

}

export default Main;
