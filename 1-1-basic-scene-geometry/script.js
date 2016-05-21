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

let scene = new THREE.Scene(),
    camera = new THREE.OrthographicCamera(W/-2,W/2,H/2,H/-2,-500,1000);
    //camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight,.1, 1000),
    renderer = new THREE.WebGLRenderer();

renderer.setClearColorHex(0xEFEFEF);
renderer.setSize(window.innerWidth, window.innerHeight);

//Axis helper
let axes = new THREE.AxisHelper(100);
scene.add(axes);

//Mesh = geometry + material
let planeGeometry = new THREE.PlaneGeometry(200,300),
    planeMaterial = new THREE.MeshBasicMaterial(0xffffff);

let plane = new THREE.Mesh(planeGeometry,planeMaterial);
plane.rotation.x = -.5*Math.PI;

scene.add(plane);

//Position and aim camera
camera.position.x = 20; //red
camera.position.y = 50; //green
camera.position.z = 20; //blue
camera.lookAt(scene.position);

//Append renderer DOM element
//Render
document.getElementById('gl').appendChild(renderer.domElement);
renderer.render(scene,camera);
