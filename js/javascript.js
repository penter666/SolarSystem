/*
  _________      .__                   _________               __                   
 /   _____/ ____ |  | _____ _______   /   _____/__.__. _______/  |_  ____   _____   
 \_____  \ /  _ \|  | \__  \\_  __ \  \_____  <   |  |/  ___/\   __\/ __ \ /     \  
 /        (  <_> )  |__/ __ \|  | \/  /        \___  |\___ \  |  | \  ___/|  Y Y  \ 
/_______  /\____/|____(____  /__|    /_______  / ____/____  > |__|  \___  >__|_|  / 
        \/                 \/                \/\/         \/            \/      \/

___.                                 __  .__ 
\_ |__ ___.__. ______   ____   _____/  |_|__|
 | __ <   |  | \____ \_/ __ \ /    \   __\  |
 | \_\ \___  | |  |_> >  ___/|   |  \  | |  |
 |___  / ____| |   __/ \___  >___|  /__| |__|
     \/\/      |__|        \/     \/        

*/
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// Sphere
var geometry = new THREE.SphereGeometry( 100, 32, 32 );
var material = new THREE.MeshBasicMaterial( {
	color: 0xffff00,
	ambient: 0x121212,
	emissive: 0x121212
	} );
var sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

/**/
// earth
parent2 = new THREE.Object3D();
scene.add( parent2 );

// pivots
var pivot2 = new THREE.Object3D();
pivot2.rotation.z = 0;
parent2.add( pivot2 );
// mesh
var geometry1 = new THREE.SphereGeometry( 3, 32, 32 );
var material1 = new THREE.MeshBasicMaterial( {color: 0x008FFF} );
var mesh2 = new THREE.Mesh( geometry1, material1 );
mesh2.position.z = 200;
pivot2.add( mesh2 );
/**/

/**/
// moon
parent = new THREE.Object3D();
scene.add( parent );

// pivots
var pivot1 = new THREE.Object3D();
pivot1.rotation.z = 0;
parent.add( pivot1 );
// mesh
var geometry2 = new THREE.SphereGeometry( 0.5, 32, 32 );
var material2 = new THREE.MeshBasicMaterial( {color: 0xC9C9C9} );
var mesh1 = new THREE.Mesh( geometry2, material2 );
mesh1.position.z = 200;
mesh1.position.x = 4;
pivot1.add( mesh1 );
/**/

/**/
// mercury
parent3 = new THREE.Object3D();
scene.add( parent3 );

// pivots
var pivot3 = new THREE.Object3D();
pivot3.rotation.z = 0;
parent3.add( pivot3 );
// mesh
var geometry3 = new THREE.SphereGeometry( 1.5, 32, 32 );
var material3 = new THREE.MeshBasicMaterial( {color: 0x993F00} );
var mesh3 = new THREE.Mesh( geometry3, material3 );
mesh3.position.z = 150;
pivot3.add( mesh3 );
/**/

/**/
// venus
parent4 = new THREE.Object3D();
scene.add( parent4 );

// pivots
var pivot4 = new THREE.Object3D();
pivot4.rotation.z = 0;
parent4.add( pivot4 );
// mesh
var geometry4 = new THREE.SphereGeometry( 3, 32, 32 );
var material4 = new THREE.MeshBasicMaterial( {color: 0xFF7C00} );
var mesh4 = new THREE.Mesh( geometry4, material4 );
mesh4.position.z = 175;
pivot4.add( mesh4 );
/**/

/**/
// mars
parent5 = new THREE.Object3D();
scene.add( parent5 );

// pivots
var pivot5 = new THREE.Object3D();
pivot5.rotation.z = 0;
parent5.add( pivot5 );
// mesh
var geometry5 = new THREE.SphereGeometry( 2, 32, 32 );
var material5 = new THREE.MeshBasicMaterial( {color: 0xFF5500} );
var mesh5 = new THREE.Mesh( geometry5, material5 );
mesh5.position.z = 225;
pivot5.add( mesh5 );
/**/

/**/
// jupiter
parent6 = new THREE.Object3D();
scene.add( parent6 );

// pivots
var pivot6 = new THREE.Object3D();
pivot6.rotation.z = 0;
parent6.add( pivot6 );
// mesh
var geometry6 = new THREE.SphereGeometry( 8, 32, 32 );
var material6 = new THREE.MeshBasicMaterial( {color: 0xFF5500} );
var mesh6 = new THREE.Mesh( geometry6, material6 );
mesh6.position.z = 250;
pivot6.add( mesh6 );
/**/

/**/
// saturn
parent7 = new THREE.Object3D();
scene.add( parent7 );

// pivots
var pivot7 = new THREE.Object3D();
pivot7.rotation.z = 0;
parent7.add( pivot7 );
// mesh
var geometry7 = new THREE.SphereGeometry( 6, 32, 32 );
var material7 = new THREE.MeshBasicMaterial( {color: 0xE7C48D} );
var mesh7 = new THREE.Mesh( geometry7, material7 );
mesh7.position.z = 275;
pivot7.add( mesh7 );
/**/
/**/
// saturn ring
parent8 = new THREE.Object3D();
scene.add( parent8 );

// pivots
var pivot8 = new THREE.Object3D();
pivot8.rotation.z = 0;
parent8.add( pivot8 );
// mesh
var geometry8 = new THREE.RingGeometry( 15, 8, 32 );
var material8 = new THREE.MeshBasicMaterial( { color: 0xE3D4BE, side: THREE.DoubleSide } );
var mesh8 = new THREE.Mesh( geometry8, material8 );
mesh8.position.z = 275;
mesh8.position.x = 0;
mesh8.rotation.x = Math.PI / 2;
pivot8.add( mesh8 );
/**/

/**/
// uranus
parent9 = new THREE.Object3D();
scene.add( parent9 );

// pivots
var pivot9 = new THREE.Object3D();
pivot9.rotation.z = 0;
parent9.add( pivot9 );
// mesh
var geometry9 = new THREE.SphereGeometry( 4, 32, 32 );
var material9 = new THREE.MeshBasicMaterial( {color: 0xBED3E3} );
var mesh9 = new THREE.Mesh( geometry9, material9 );
mesh9.position.z = 300;
pivot9.add( mesh9 );
/**/

/**/
// neptune
parent10 = new THREE.Object3D();
scene.add( parent10 );

// pivots
var pivot10 = new THREE.Object3D();
pivot10.rotation.z = 0;
parent10.add( pivot10 );
// mesh
var geometry10 = new THREE.SphereGeometry( 4, 32, 32 );
var material10 = new THREE.MeshBasicMaterial( {color: 0x3588C7} );
var mesh10 = new THREE.Mesh( geometry10, material10 );
mesh10.position.z = 325;
pivot10.add( mesh10 );
/**/

// Stars
//This will add a starfield to the background of a scene
var starsGeometry = new THREE.Geometry();

for ( var i = 0; i < 10000; i ++ ) {

	var star = new THREE.Vector3();
	star.x = THREE.Math.randFloatSpread( 2000 );
	star.y = THREE.Math.randFloatSpread( 2000 );
	star.z = THREE.Math.randFloatSpread( 2000 );

	starsGeometry.vertices.push( star );

}

var starsMaterial = new THREE.PointsMaterial( { color: 0x888888 } );

var starField = new THREE.Points( starsGeometry, starsMaterial );

scene.add( starField );

// camera rotation

var camera_pivot = new THREE.Object3D()
var Y_AXIS = new THREE.Vector3( 0, 1, 0 );
var X_AXIS = new THREE.Vector3( 1, 0, 0 );
var Z_AXIS = new THREE.Vector3( 0, 0, 1 );

scene.add( camera_pivot );
camera_pivot.add( camera );
camera.position.set( 400, 0, 0 );
camera.lookAt( camera_pivot.position );


/**/
/**/

// movement - please calibrate these values
var xSpeed = 0.0001;
var ySpeed = 0.0001;

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
	if (keyCode == 38){	
	xSpeed += 0.0005;
	}
	if (keyCode == 40){	
	xSpeed -= 0.0005;
	}
	if (keyCode == 37){	
	ySpeed += 0.0005;
	}
	if (keyCode == 39){	
	ySpeed -= 0.0005;
	}
	if (keyCode == 32){
	animate();
	}
};
/**/
/**//**/
var text2 = document.createElement('div');
text2.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
text2.style.width = 100;
text2.style.height = 100;
text2.style.backgroundColor = "black";
text2.innerHTML = "Controls:";
text2.style.top = 0 + 'px';
text2.style.left = 0 + 'px';
document.body.appendChild(text2);
var text3 = document.createElement('div');
text3.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
text3.style.width = 100;
text3.style.height = 100;
text3.style.backgroundColor = "black";
text3.innerHTML = "Arrows/Space";
text3.style.top = 20 + 'px';
text3.style.left = 0 + 'px';
document.body.appendChild(text3);

function toXYCoords (pos) {
        var vector = projector.projectVector(pos.clone(), camera);
        vector.x = (vector.x + 1)/2 * window.innerWidth;
        vector.y = -(vector.y - 1)/2 * window.innerHeight;
        return vector;
}
/**/
/**//**/
/**/

function animate() {
	requestAnimationFrame( animate );
	
	sphere.rotation.x += 0.01;
	sphere.rotation.y += 0.01;
	camera_pivot.rotateOnAxis( Y_AXIS, ySpeed );
	camera_pivot.rotateOnAxis( X_AXIS, xSpeed );
	parent.rotation.z += 0.01;
	parent.rotation.y += 0.01000; //moon
	parent2.rotation.y += 0.01000; //earth
	parent3.rotation.y += 0.01607; //mercury
	parent4.rotation.y += 0.01174; //venus
	parent5.rotation.y += 0.00802; //mars
	parent6.rotation.y += 0.00434; //jupiter
	parent7.rotation.y += 0.00323; //saturn
	parent8.rotation.y += 0.00323; //saturn ring
	parent8.rotation.z += 0.005; 
	parent9.rotation.y += 0.00228; //uranus
	parent10.rotation.y += 0.00159; //neptun

	renderer.render( scene, camera );
}
animate();
