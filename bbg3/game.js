window.onload = function () {
	//start crafty
	Crafty.init(960, 640);
	Crafty.canvas.init();


	Crafty.modules({ TiledLevel: 'dev-uncompressed' }, function () {
		//module is ready

		Crafty.c("Solid", {
			init: function () {
				this.requires("Color").color("red");
			}
		});

		Crafty.scene("Game", function () {
			Crafty.e("TiledLevel").tiledLevel("map.json");

			var player = Crafty.e("Player, Color, 2D, DOM, Collision")
				.color("green")
				.attr({ x: 32, y: 32, w: 28, h: 28 })
				.bind('Moved', function (from) {
				if (this.hit('Solid')) {
					this.attr({ x: from.x, y: from.y });
				}
			});

			Crafty.modules({ MoveTo: "release" }, function () {
				player.requires("MoveTo");
			});





		});

		Crafty.scene("Game");
	});
};