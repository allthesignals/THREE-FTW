/**
 * Created by siqi on 5/21/16.
 */

//Scene
//Add, remove, getChildByName, traverse
var scene = new THREE.Scene(),
    renderer = new THREE.WebGLRenderer(),
    camera = new THREE.PerspectiveCamera(45, window.innerWidth/innerHeight,.1, 1000);

renderer.setClearColorHex(0xeeeeee);
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('gl').appendChild(renderer.domElement);

//Add some objects to the scene
var light = new THREE.AmbientLight(0x0c0c0c);
scene.add(light);

var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-40, 60, -10);
spotLight.castShadow = true;
scene.add(spotLight);


var axis = new THREE.AxisHelper(20);
scene.add(axis);

var planeGeometry = new THREE.PlaneGeometry(80,50),
    planeMaterial = new THREE.MeshLambertMaterial({color:0xefefef});
var plane = new THREE.Mesh(planeGeometry,planeMaterial);
plane.rotation.x = -Math.PI/2;
scene.add(plane);


//Geometry
//Create custom geometry; update geometry
for(var i = 0; i<100; i++){
    var size = Math.random()*1.5+1;
    var cubeGeometry = new THREE.BoxGeometry(size, size, size),
        cubeMaterial = new THREE.MeshLambertMaterial({color:0xff0000});
    var cube = new THREE.Mesh(cubeGeometry,cubeMaterial);

    cube.position.x = 80*Math.random()-40;
    cube.position.y = 3*Math.random()+1;
    cube.position.z = 50*Math.random() - 25;
    cube.name = 'cube-'+i;

    scene.add(cube);
}


//Mesh
//Translate, rotate,


//Camera
camera.position.x = -50;
camera.position.y = 50;
camera.position.z = -50;
camera.lookAt(scene.position);
renderer.render(scene, camera);