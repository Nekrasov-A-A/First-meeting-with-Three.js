<template>
  <div id="test">
    <h1>Epic phrase here</h1>
  </div>
</template>

<script>
import * as THREE from "three";

export default {
  data: () => ({
    renderer: null,
    scene: null,
    camera: null,
    loader: null,
    smokeArray: [],
    light: null,
    clock: null,
  }),
  methods: {
    init: function() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      this.camera.position.z = 1000;
      this.scene.add(this.camera);
      const el = document.getElementById("test");
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setClearColor(0xd3d3d3, 1);
      el.appendChild(this.renderer.domElement);

      this.light = new THREE.DirectionalLight(0xd3d3d3, 0.5);
      this.light.position.set(-1, 0, 1);
      this.scene.add(this.light);
      this.clock = new THREE.Clock();
      this.loader = new THREE.TextureLoader();
      this.loader.crossOrigin = "";
      this.loader.load(
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82015/blue-smoke.png",
        (texture) => {
          const smokeGeometry = new THREE.PlaneGeometry(200, 200);
          const smokeMaterial = new THREE.MeshLambertMaterial({
            map: texture,
            transparent: true,
          });
          for (let i = 0; i < 350; i++) {
            let smoke = new THREE.Mesh(smokeGeometry, smokeMaterial);
            smoke.position.set(
              Math.random() * 500 - 250,
              Math.random() * 500 - 250,
              Math.random() * 1000 - 100
            );
            smoke.rotation.z = Math.random() * 360;
            this.scene.add(smoke);
            this.smokeArray.push(smoke);
          }
          this.animate();
        }
      );
      this.renderer.render(this.scene, this.camera);
    },
    animate: function() {
      let delta = this.clock.getDelta();
      requestAnimationFrame(this.animate);
      [].forEach.call(this.smokeArray, (sp) => {
        sp.rotation.z += delta * 0.2;
      });
      this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="sass" scoped>
#test
    width: 80%
    height: 80vh
    position: absolute
    top: 10%
    left: 10%
    overflow: hidden
    border-radius: 16px
    box-shadow: 0px 0 4px 2px rgba(0,0,0,.2)
    > h1
      position: absolute
      z-index: 10
      color: #fff
      top: 50%
      left: 50%
      transform: translate(-50%,-50%)
</style>
