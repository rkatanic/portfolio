import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

interface Props {
  type: "tetrahedron" | "octahedron";
}

const Shape = ({ type }: Props): JSX.Element => {
  const boxRef = useRef<any>();

  useFrame((): void => {
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={boxRef} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
      {type === "tetrahedron" ? (
        <tetrahedronBufferGeometry args={[3]} />
      ) : (
        <octahedronBufferGeometry args={[3]} />
      )}
      <meshBasicMaterial wireframe color={"hsl(0,0%,30%)"} />
    </mesh>
  );
};

export default Shape;
