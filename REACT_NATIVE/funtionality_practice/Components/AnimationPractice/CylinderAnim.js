import React, {useRef} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {WebGLRenderer} from 'three/examples/jsm/renderers/WebGLRenderer';
import {OrthographicCamera, Euler, Vector3, Color} from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import SplineLoader from '@splinetool/loader';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const CylinderAnim = () => {
  const renderer = useRef(null);
  const scene = useRef(new THREE.Scene()).current;
  const camera = useRef(
    new OrthographicCamera(
      screenWidth / -2,
      screenWidth / 2,
      screenHeight / 2,
      screenHeight / -2,
      -50000,
      100000,
    ),
  ).current;

  camera.position.set(-709.5, 163.73, 714.45);
  camera.quaternion.setFromEuler(new Euler(-0.43, -0.73, -0.3));

  const loader = new SplineLoader();
  loader.load(
    'https://prod.spline.design/pquooL9RI5uIAuxA/scene.splinecode',
    splineScene => {
      scene.add(splineScene);
    },
  );

  const controls = useRef(new OrbitControls(camera, renderer.current)).current;
  controls.enableDamping = true;
  controls.dampingFactor = 0.125;

  const onLayout = () => {
    if (renderer.current) {
      const {width, height} =
        renderer.current.domElement.getBoundingClientRect();
      camera.left = width / -2;
      camera.right = width / 2;
      camera.top = height / 2;
      camera.bottom = height / -2;
      camera.updateProjectionMatrix();
    }
  };

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.current.render(scene, camera);
  };

  return (
    <View style={styles.container} onLayout={onLayout}>
      <WebGLRenderer
        antialias={true}
        onCreated={r => (renderer.current = r)}
        style={styles.renderer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  renderer: {
    flex: 1,
    backgroundColor: new Color('#ffdab6'),
  },
});

export default CylinderAnim;
