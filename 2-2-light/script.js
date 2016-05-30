/**
 * Created by siqi on 5/21/16.
 */

//Initialize scene, renderer, camera
var scene = new THREE.Scene(),
    renderer = new THREE.WebGLRenderer(),
    camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,.1,1000);

//Add helper and camera to the scene
var axisHelper = new THREE.AxisHelper(50);
scene.add(axisHelper);

camera.position.set(-40,30,-40);
camera.lookAt(scene.position);
scene.add(axisHelper);

//Add some mesh objects
var planeGeometry = new THREE.PlaneGeometry(100,60),
    planeMaterial = new THREE.MeshLambertMaterial({color:0xffffff});
var planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);

planeMesh.rotation.x = -Math.PI/2;
scene.add(planeMesh);

//Attach renderer to DOM
document.getElementById('gl').appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColorHex(0xeeeeee);
renderer.render(scene, camera);

//Use dat.gui to add and remove cube meshes


//



