/**
 * Created by siqi on 5/21/16.
 */

// space for objects
var scene = new THREE.Scene();

// eye
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

// performs the rendering
var renderer = new THREE.WebGLRenderer();

// fixes a place in space for the camera
camera.position.set(-80,60,-80);

// situates the cameras angle
camera.lookAt(scene.position);

// add the camera to the scene as an object
scene.add(camera);

var planeGeometry = new THREE.PlaneGeometry(100,60),
    planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
var planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);

planeMesh.rotation.x = -Math.PI/2;
planeMesh.receiveShadow = true;
scene.add(planeMesh);

var cube = new THREE.BoxGeometry(10, 6, 6),
    cubeMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, wireFrame: true });

var cubeMesh = new THREE.Mesh(cube, cubeMaterial);

cubeMesh.position.y = 10

scene.add(cubeMesh);
// ???
var axes = new THREE.AxisHelper( 20 );
scene.add(axes);

// append the render element into the document
document.getElementById("gl").appendChild(renderer.domElement);

// set the renderer's size
renderer.setSize(window.innerWidth, window.innerHeight);

// set its canvac background color
renderer.setClearColorHex(0xeeeeee);
renderer.shadowMapEnabled = true;

// final step - ACTION!
// renderer.render(scene, camera);


var options = new function() {
  this.cameraX = -80;
  this.cameraY = 60;
  this.cameraZ = -80;
  this.cameraFOV = 60;

  this.plX = -20;
  this.plY = 20;
  this.plZ = -20;

  this.addCube = addCube;
};

var pointLight = new THREE.PointLight(0xff0000);
pointLight.position.set(-20,20,-20);
scene.add(pointLight);

render();

function addCube () {
  console.log("adding cube");
  var size = Math.random()*3+12;
  var cubeGeometry = new THREE.BoxGeometry(size, size, size),
      cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});

  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.x = Math.random()*100-50;
  cube.position.y = Math.random()*5;
  cube.position.z= Math.random()*60-60;

  cube.rotation.x = Math.PI*Math.random();
  cube.rotation.y = Math.PI*Math.random();
  cube.rotation.z = Math.PI*Math.random();

  cube.castShadow = true;

  scene.add(cube);
}

var gui = new dat.GUI();
gui.add(options, 'cameraX', -80,80);
gui.add(options, 'cameraY', 0,200);
gui.add(options, 'cameraZ', -100, 100);
gui.add(options, 'cameraFOV', 10,90);

gui.add(options, 'plX', -100,100);
gui.add(options, 'plY', -100,100);
gui.add(options, 'plZ', -100,100);

gui.add(options, 'addCube');

function render() {
  // This runs ~60 fps
  renderer.render(scene, camera);

  camera.position.x = options.cameraX;
  camera.position.y = options.cameraY;
  camera.position.z = options.cameraZ;
  camera.fov = options.cameraFOV;
  camera.updateProjectionMatrix();

  pointLight.position.set(options.plX, options.plY, options.plZ);

  requestAnimationFrame(render);
}

