var createFont = function(text, x, y, z, scaling) {
	//create an element to render the font on
	var bitmap = document.createElement('canvas');
	bitmap.width = 512;
	bitmap.height = 512;
	var g = bitmap.getContext('2d');
	//draw boundary for debugging
	//g.strokeStyle = '#ff0000';
	//g.strokeRect(0, 0, 560, 560);

	g.textBaseline = "alphabetic";

	var metrics = g.measureText( text );
	var textWidth = metrics.width;

	//draw the font on the element
	g.fillStyle = 'rgb(255,255,255)';
	g.textAlign = "centre";
	g.font = '30px Helvetica';
    g.fillText(text, 256,256);
	g.strokeStyle = 'rgba(255,255,255)';
	g.strokeText(text,256,256);

	//create a texture with the element and put it on threejs object
	var texture = new THREE.Texture(bitmap);
	texture.needsUpdate = true;
	var spriteMaterial = new THREE.SpriteMaterial( {  map: texture, color: '#ffffff'} );
	var sprite = new THREE.Sprite( spriteMaterial );

	//scale up the texture
	sprite.scale.set( scaling, scaling, 1.0 );

	// now set the position at the correct 3D space
	sprite.position.set(x, y, z);
	return sprite;
}

var addLabelToScene = function(scene, text, x, y, z, scaling) {
	var label = createFont(text, x, y, z, scaling);
	scene.addObject(label);
	console.log(label);
}
