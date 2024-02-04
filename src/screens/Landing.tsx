import styles from "./Landing.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Landing = () => {
  console.log("landing");
  const navigate = useNavigate();
  let toRotate = false;

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(10, 0, 10);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.shadowMap.enabled = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;

    const gridHelper = new THREE.GridHelper(10, 10);
    gridHelper.name = "grid_helper";
    scene.add(gridHelper);

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("draco/");
    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    let clock = new THREE.Clock();
    let model:
        | THREE.Object3D<THREE.Object3DEventMap>
        | THREE.AnimationObjectGroup,
      mixer: THREE.AnimationMixer,
      action;
    gltfLoader.load("coffee_shop.glb", (gltf) => {
      model = gltf.scene;
      scene.add(model);
      mixer = new THREE.AnimationMixer(model);
      action = mixer.clipAction(gltf.animations[0]);
      action.play();
    });

    const light = new THREE.DirectionalLight(0xffe7cf, 8);
    light.position.y = 3;
    light.position.z = 1;
    light.castShadow = true;
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffe7cf, 4));

    let frames = 0;
    let moveForward = false;
    let velocity = new THREE.Vector3();
    let angle: number,
      multiplier: number,
      radius = 10 * Math.sqrt(2);
    function animate() {
      const animationId = requestAnimationFrame(animate);
      let delta = clock.getDelta();
      mixer && mixer.update(delta);
      velocity.z -= velocity.z * 10.0 * delta;
      velocity.y -= velocity.y * 10.0 * delta;
      if (model) {
        if (toRotate) {
          if (!angle) {
            angle = Math.atan2(camera.position.z, camera.position.x);
            multiplier = angle > -2.35619 && angle <= 0.785398 ? 1 : -1;
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
          camera.position.x = radius * Math.cos(angle);
          camera.position.z = radius * Math.sin(angle);
          camera.lookAt(scene.position);
          angle += 0.05 * multiplier;
          if (
            +camera.position.x.toFixed(0) === 10 &&
            +camera.position.z.toFixed(0) === 10
          ) {
            toRotate = false;
            moveForward = true;
            document.querySelector("body")?.classList.add(styles.fade);
            let selectedObject = scene.getObjectByName(gridHelper.name);
            selectedObject && scene.remove(selectedObject);
          }
        }
        if (moveForward) {
          velocity.z -= 30.0 * delta;
          velocity.y += 2.0 * delta;
          if (camera.position.z < 2.5) {
            moveForward = false;
            cancelAnimationFrame(animationId);
            while (scene.children.length > 0) {
              scene.remove(scene.children[0]);
            }
            document.querySelector("body canvas")?.remove();
            navigate("/warp");
            document.querySelector("body")?.classList.remove(styles.fade);
          }
          camera.translateZ(velocity.z * delta);
          camera.translateY(velocity.y * delta);
        }
      }
      renderer.render(scene, camera);
      frames++;
    }
    animate();
  }, []);
  return (
    <div className={styles.Banner}>
      <button
        onClick={() => {
          toRotate = true;
        }}
      >
        Enter
      </button>
    </div>
  );
};

export default Landing;
