/**
 * Created by siqi on 5/21/16.
 */
/* http://threejs.org/docs/index.html#Manual/Introduction/Creating_a_scene*/

console.log(THREE);

//Basic components of an animation
//1. Scene
//2. Camera
//3. Renderer
const W = 800,
    H = 1000;

var scene = new THREE.Scene(),
    //camera = new THREE.OrthographicCamera(W/-2,W/2,H/2,H/-2,-500,1000)
    camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight,.1, 1000),
    renderer = new THREE.WebGLRenderer();

renderer.setClearColorHex(0xefefef);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;

//Axis helper
var axes = new THREE.AxisHelper(100);
scene.add(axes);

//Mesh = geometry + material
var planeGeometry = new THREE.PlaneGeometry(60,20),
    planeMaterial = new THREE.MeshLambertMaterial(0xffffff);
var plane = new THREE.Mesh(planeGeometry,planeMaterial);
plane.rotation.x = -.5*Math.PI;
plane.position.x = 15;
plane.receiveShadow = true;
scene.add(plane);

var cubeGeometry = new THREE.CubeGeometry(4,4,4),
    cubeMaterial = new THREE.MeshBasicMaterial({
        color:0xaaaaaa,
        wireframe:true
    });
var cube = new THREE.Mesh(cubeGeometry,cubeMaterial);
cube.position.x = 0;
cube.position.z = 0;
cube.position.y = 2;
cube.castShadow = true;
scene.add(cube);

//Add more cubes, experiment with different material properties + lights
var material2 = new THREE.MeshLambertMaterial({
        color:0xff0000
    }),
    material3 = new THREE.MeshPhongMaterial({
        color:0xffff00
    });
let cubeGeo2 = new THREE.CubeGeometry(4,4,4),
    cubeGeo3 = new THREE.CubeGeometry(4,4,4);
let cube2 = new THREE.Mesh(cubeGeo2,material2),
    cube3 = new THREE.Mesh(cubeGeo3,material3);
cube2.position.x = 10;
cube2.position.z = 0;
cube2.position.y = 2;
cube2.castShadow = true;
scene.add(cube2);

cube3.position.x = 20;
cube3.position.z = 0;
cube3.position.y = 2;
cube3.castShadow = true;
scene.add(cube3);

//Spot light
var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-20,60,0);
spotLight.castShadow = true;
scene.add(spotLight);


//Position and aim camera
camera.position.x = -30; //red
camera.position.y = 40; //green
camera.position.z = 30; //blue
camera.lookAt(scene.position);

//Append renderer DOM element
//Render
document.getElementById('gl').appendChild(renderer.domElement);

var stats = initStats();
animate();


function animate(){
    cube2.rotation.x += Math.PI*2/60;
    stats.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

function initStats(){
    var stats = new Stats();
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    stats.setMode(0);

    document.getElementById('stats-gui').appendChild(stats.domElement);
    return stats;

}