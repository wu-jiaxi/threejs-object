import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt";

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight />
      <Environment preset="city" />
      {/*   <CameraRig>*/}
      {/*  <Backdrop />  */}
      <Center>
        <Shirt />
      </Center>
      {/* </CameraRig> */}
    </Canvas>
  );
};

export default CanvasModel;
