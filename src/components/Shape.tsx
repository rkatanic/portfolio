import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Shape = (): JSX.Element => {
  const boxRef = useRef<any>();

  useFrame((): void => {
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={boxRef} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
      <tetrahedronBufferGeometry args={[2.5]} />
      <meshBasicMaterial wireframe color={"hsl(0,0%,30%)"} />
    </mesh>
  );
};

export default Shape;
