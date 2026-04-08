import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";
import { useAppContext } from "@/src/lib/context";
import { cn } from "@/src/lib/utils";

function ParticleSwarm(props: any) {
  const ref = useRef<THREE.Points>(null);
  const sphere = useMemo(() => random.inSphere(new Float32Array(3000), { radius: 1.5 }), []);
  const { theme } = useAppContext();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color={theme === 'dark' ? "#ffffff" : "#000000"}
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);
  const { theme } = useAppContext();
  const color = theme === 'dark' ? "#ffffff" : "#000000";

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Abstract screen/card 1 */}
      <mesh position={[-1, 0.5, 0]} rotation={[0.2, 0.5, -0.1]}>
        <planeGeometry args={[1.2, 0.8]} />
        <meshBasicMaterial color={color} transparent opacity={0.05} side={THREE.DoubleSide} />
        <lineSegments>
          <edgesGeometry args={[new THREE.PlaneGeometry(1.2, 0.8)]} />
          <lineBasicMaterial color={color} transparent opacity={0.2} />
        </lineSegments>
      </mesh>

      {/* Abstract screen/card 2 */}
      <mesh position={[1, -0.2, 0.5]} rotation={[-0.1, -0.4, 0.1]}>
        <planeGeometry args={[0.9, 1.3]} />
        <meshBasicMaterial color={color} transparent opacity={0.03} side={THREE.DoubleSide} />
        <lineSegments>
          <edgesGeometry args={[new THREE.PlaneGeometry(0.9, 1.3)]} />
          <lineBasicMaterial color={color} transparent opacity={0.15} />
        </lineSegments>
      </mesh>
    </group>
  );
}

export function HeroScene() {
  const { theme } = useAppContext();
  const fogColor = theme === 'dark' ? "#0a0a0a" : "#ffffff";
  const gradientClass = theme === 'dark' 
    ? "bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)]"
    : "bg-[radial-gradient(circle_at_center,transparent_0%,#ffffff_100%)]";

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <fog attach="fog" args={[fogColor, 2, 5]} />
        <ParticleSwarm />
        <FloatingShapes />
      </Canvas>
      {/* Gradient Overlay to blend with background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className={cn("absolute inset-0", gradientClass)} />
    </div>
  );
}
