import { Canvas, useFrame } from "@react-three/fiber";
import "./styles/index.scss"
import { useRef, useState } from "react";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";

const Cube = ({position, size, color})=>{
  const cubeRef = useRef()
  useFrame((state, delta) =>{
    const deltaChange = delta || 100000
    cubeRef.current.rotation.x += deltaChange
    cubeRef.current.rotation.y += deltaChange*2.0
    cubeRef.current.position.z = Math.sin(state.clock.elapsedTime) * 2.0
  })

  return (
      <mesh ref={cubeRef} position={position}>
          <boxGeometry args={size} />
          <meshStandardMaterial color={color} />
      </mesh>
  )
}

const Sphere = ({position, args, size, color})=>{
  const cubeRef = useRef()
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const speed = isHovered ? 0.2 : 1.0
  useFrame((state, delta) =>{
    const deltaChange = delta || 100000
    cubeRef.current.rotation.y += deltaChange*speed
  })


  return (
      <mesh ref={cubeRef} position={position} onPointerEnter={(e)=>{
        e.stopPropagation()
        setIsHovered(true)
      }}  onPointerLeave={(e)=>{
        e.stopPropagation()
        setIsHovered(false)
      }} onClick={()=>{
        setIsClicked(!isClicked)
      }}>
          <sphereGeometry args={args}  />
          <meshStandardMaterial color={"#fff"} wireframe />
      </mesh>
  )
}

const TorusKnot = ({position, args, size, color})=>{
  const cubeRef = useRef()
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const speed = isHovered ? 0.2 : 1.0
  // useFrame((state, delta) =>{
  //   const deltaChange = delta || 100000
  //   cubeRef.current.rotation.x += deltaChange
  //   cubeRef.current.rotation.y += deltaChange*speed
  // })


  return (
      <mesh ref={cubeRef} position={position} onPointerEnter={(e)=>{
        e.stopPropagation()
        setIsHovered(true)
      }}  onPointerLeave={(e)=>{
        e.stopPropagation()
        setIsHovered(false)
      }} onClick={()=>{
        setIsClicked(!isClicked)
      }}>
          <torusKnotGeometry args={size} />
          <MeshWobbleMaterial color={color} factor={5} speed={2} />
      </mesh>
  )
}

function App() {
  return (
    <div className={`App`}>
      <>
        <b>ISAAC THREE.js Dev {"</>"} <span>#2</span></b>
        <div className="canvas-holder">
          <Canvas>
            <directionalLight position={[0, 0, 2]} intensity={0.8} />
            <ambientLight intensity={0.8} position={[0, 0, 2]} />

              {/* <Cube position={[-1, 0, 0]} color={"orange"} size={[1, 1, 1]} /> */}
              {/* <Sphere position={[0, 0, 1.5]} color={"#a50"} size={[1, 1, 1]} args={[1, 30, 30]} /> */}
              <TorusKnot position={[0, 0, 0]} color={"hotpink"} size={[1, 0.15, 1000, 50]} />
            <OrbitControls enableZoom={false} maxZoom={0} minZoom={1000} />


          </Canvas>
        </div>
      </>
    </div>
  );
}

export default App;