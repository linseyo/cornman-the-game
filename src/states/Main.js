class Main extends Phaser.State {
	constructor(){
		super();

	}
	create() {

		//Enable Arcade Physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		//Set the games background colour
		this.game.stage.backgroundColor = '#4f90c1';

		this.mountainsBack = this.game.add.tileSprite(0,
			this.game.height - this.game.cache.getImage('mountains-back').height,
			this.game.width,
			this.game.cache.getImage('mountains-back').height,
			'mountains-back'
		);

		this.hillFront = this.game.add.tileSprite(0,
			this.game.height - this.game.cache.getImage('hill-front').height,
			this.game.width,
			this.game.cache.getImage('hill-front').height,
			'hill-front'
		);
		// this.hillFront.scale.setTo(2, 2);

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
		let time = 0;
		let timer = 0;
		this.tempRock = this.game.add.sprite(this.game.world.randomX,
			(this.game.height - this.groundFront.height) + 200, 'rock');
		this.tempRock.scale.setTo(3, 3);

	}

	update() {
		this.mountainsBack.tilePosition.x -= 0.10;
		this.hillFront.tilePosition.x -= 0.3;
		this.fenceMid2.tilePosition.x -= 0.75;
		this.groundFront.tilePosition.x -= 15.0;

		this.addRocks();

	}

}

export default Main;
