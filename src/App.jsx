import { ContactShadows, Environment, Float, Html, PresentationControls, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger,useGSAP);

export default function App() {


  const macRef = useRef(null)
  const laptop = useGLTF("./model.gltf");
  let rectRef = useRef(null);

  useGSAP(()=>{

    laptop.nodes.FrontCameraRing001.visible = false
  
    let tl = gsap.timeline({
      scrollTrigger: {
        start: "top top",
        end: "+=1000px",
        scrub: 1,
      },
    })
    .from(laptop.nodes.Top.rotation, {
      x: 3.14,
    })
    .from(".screen", {
      opacity: 0,
    })
    .to(
      rectRef.current,
      {
        width: 2.5,
        height: 1.65,
      },
      "<"
    )

  },{revertOnUpdate:true})


  return (
    <>
      {/* <Environment files={'rostock_laage_airport_1k.hdr'}  /> */}
      <ambientLight intensity={0.3} />
      <PresentationControls  rotation={[0.13, 0.1, 0]} polar={[-0.4, 0.2]} azimuth={[-1, 0.75]} config={{ mass: 2, tension: 400 }} snap={{ mass: 4, tension: 400 }}>
        <Float rotationIntensity={0.9} speed={2} >
          <primitive object={laptop.scene} position-y={-1.2} >
            <Html transform wrapperClass="screen" distanceFactor={1.17} position={[0, 1.56, -1.4]} rotation-x={-0.256}>
              <iframe src="https://bruno-simon.com/html/"></iframe>
            </Html>
            <rectAreaLight ref={rectRef} width={0} height={0} intensity={65} color={"#ff9043"} rotation={[0.1, Math.PI, 0]} position={[0, 0.55, -1.15]} />
          </primitive>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
