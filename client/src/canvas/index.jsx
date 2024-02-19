import { Canvas } from "@react-three/fiber";
import { Environment, Center, OrbitControls } from "@react-three/drei";

import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import Shirt2 from "./Shirt2";

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 2], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={5} />
      <Environment preset="city" />

      <Backdrop />
      <Center>
        {/* <CameraRig> */}
        <Shirt />
        <Shirt2 />
        {/* </CameraRig> */}
        <OrbitControls
          makeDefault
          enablePan={false}
          maxDistance={2.5}
          minDistance={0.45}
        />
      </Center>
    </Canvas>
  );
};

export default CanvasModel;
