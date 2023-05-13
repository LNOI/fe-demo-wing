import React from 'react'
import {camera,renderer}  from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();
function ModelAnimation() {
  return (
    <div>ModelAnimation</div>
  )
}

export default ModelAnimation