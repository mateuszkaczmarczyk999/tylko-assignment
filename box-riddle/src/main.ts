import { Scene, PerspectiveCamera, WebGLRenderer, HemisphereLight } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { buildBoxExample } from './boxFactory';

const run = () => {
  // setup webgl context
  const renderer = new WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  // setup scene, camera, and controls
  const scene = new Scene();
  const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  const controls = new OrbitControls( camera, renderer.domElement );

  // adding simple lighting to aour scene
  const light = new HemisphereLight(0xf6e86d, 0x404040, 1);
  scene.add(light);

  // adding example of box geometry to aour scene
  const boxExample = buildBoxExample();
  scene.add( boxExample );

  // set initial camera position
  camera.position.set(5, 5, 5);
  controls.update();

  // loop function for rendering each frame
  function animate() {
    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );
  };

  animate();
}

// start of the application
run()
