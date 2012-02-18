window.onload = function() {
	//start crafty
	Crafty.init(960, 640);
	Crafty.canvas.init();
	

	Crafty.modules({ TiledLevel: 'dev-uncompressed' }, function () {
		//module is ready
		Crafty.e("TiledLevel").tiledLevel("map.json");
	});
};