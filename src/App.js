import { useState, useTransition } from "react";
import { useControls } from "leva";
import {
  ContactShadows,
  AccumulativeShadows,
  RandomizedLight,
  Center,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import Model from "./model/Model";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function App() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, -15], fov: 55 }}
      gl={{ preserveDrawingBuffer: true }}
      eventSource={document.getElementById("root")}
      eventPrefix="client">
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} position={[-5, 1, 0]}>
          <Model />
        </group>
        <Environment preset="sunset" background blur={0.88} />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  );
}
export default App;
