// "use client"
// import * as THREE from 'three'
// import { Canvas, useFrame, useThree } from '@react-three/fiber'
// import { OrbitControls, OrthographicCamera as OrthographicCameraComponent, Text, Svg, Html } from '@react-three/drei'
// import { RoomModel } from './(room)/room3'
// import React, { MouseEventHandler, useCallback, useEffect, useRef, useState } from 'react'
// import { useContainerDimensions } from '@/app/(hooks)/use-resize-observer'
// import { AmbientLight, Camera, DirectionalLight, Euler, OrthographicCamera, Raycaster, RectAreaLight, Vector3 } from 'three'
// import { SunlightSource, LampLightSource, RectAreaLightSource, HemisphereLightSource } from '@/app/(home–components)/(room)/lights'
// import { SetFloor } from '@/app/(home–components)/floor'
// import { useSpring, config } from '@react-spring/three'
// import { animated, AnimatedComponent } from '@react-spring/three'
// import { lerp } from 'three/src/math/MathUtils'

// const calcRotation = (clientX: number) => ((clientX - window.innerWidth / 2) * 0.2) / window.innerWidth;
// const interpolateRotation = (rotateY: number) => [0, rotateY, 0] as const;

// interface CameraMoveAnimationProps {
//   objectClicked: boolean;
// }

// const CameraMoveAnimation: React.FC<CameraMoveAnimationProps> = ({ objectClicked }) => {
//   const { camera } = useThree();

//   // const cameraRotation: any = camera.rotation;

//   useFrame(() => {
//     if (objectClicked) {
//       const targetQuaternion = new THREE.Quaternion().setFromEuler(new Euler(0, Math.PI/2, 0, 'YXZ'));

//       const currentLookAt = camera.getWorldDirection(new Vector3());
//       const targetLookAt = new Vector3(-50, -0.15, 0.5);
//       const lerpLookAt = new Vector3().lerpVectors(currentLookAt, targetLookAt, 0.004);
//       const newLookAt = new Vector3().addVectors(camera.position, lerpLookAt);

//       camera.zoom = lerp(camera.zoom, 1800, 0.2); // Adjust the second parameter for speed
//       camera.position.lerp(new Vector3(250, 0, -0.5), 0.2); // Adjust the second parameter for speed
//       camera.quaternion.slerp(targetQuaternion, 0.2);
//       camera.lookAt(newLookAt);
//       camera.updateProjectionMatrix();
//     }
//   });

//   return null;
// };

// export const MainCanvas = () => {
//   const [objectClicked, setObjectClicked] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { aspectRatio } = useContainerDimensions(containerRef);
//   const orbitControlsRef = useRef<any>();
//   // console.log("Camera position", orbitControlsRef.current?.object.position);
//   // console.log("Camera rotation", orbitControlsRef.current?.object.rotation);
//   // console.log('Camera zoom', orbitControlsRef.current?.object.zoom);
//   const [cameraPosition, setCameraPosition] = useState(new Vector3(2, 1.88, 2));
//   const [cameraRotation, setCameraRotation] = useState(new Euler(-Math.PI/6, Math.PI/4, 0, 'YXZ'));
//   const [cameraZoom, setCameraZoom] = useState(250);
//   const [cameraDisplacement, setCameraDisplacement] = useState(0);

//   const checkObjectClicked = () => {
//     if(!objectClicked){
//       setObjectClicked(true);
//     }
//   }

//   const [props, set] = useSpring(() => ({
//     rotateY: 0,
//     config: config.default
//   }))

//   // TODO: Make this calc relative to the container not the window
//   const onMouseMove = useCallback<MouseEventHandler<HTMLDivElement>>(({ clientX, clientY }) => {
//     const rotation = calcRotation(clientX);
//     set({ rotateY: rotation })
//   }, [set]);

//   return (
//     <div ref={containerRef} className='w-full h-full' onMouseMove={onMouseMove}>
//       <Canvas 
//         shadows
//         orthographic
//         camera={{
//           position: cameraPosition, 
//           rotation: cameraRotation, 
//           zoom: cameraZoom, 
//         }}
//       >
//         <SetFloor />
//         <SunlightSource />
//         <HemisphereLightSource/>
//         <RoomModel 
//           {...{ }}
//           onAnyObjectClicked={checkObjectClicked}
//           rotation={objectClicked ? [0, 0, 0] : props.rotateY.to(interpolateRotation) as unknown as [number, number, number]}
//           position={[-0.1, -0.7, 0]}
//           scale={[0.11, 0.11, 0.11]}
//         />
//         <CameraMoveAnimation objectClicked={objectClicked}/>
//         <OrbitControls
//           ref={orbitControlsRef}
//           position = {cameraPosition}
//         />
//       </Canvas>
//     </div>
//   )
// }


// ----------------------------------------------------

// "use client"
// import * as THREE from 'three'
// import { Canvas, useFrame, useThree } from '@react-three/fiber'
// import { OrbitControls, OrthographicCamera as OrthographicCameraComponent, Text, Svg, Html } from '@react-three/drei'
// import { RoomModel } from './(room)/room3'
// import React, { MouseEventHandler, useCallback, useEffect, useRef, useState } from 'react'
// import { useContainerDimensions } from '@/app/(hooks)/use-resize-observer'
// import { AmbientLight, Camera, DirectionalLight, Euler, OrthographicCamera, Raycaster, RectAreaLight, Vector3 } from 'three'
// import { SunlightSource, LampLightSource, RectAreaLightSource, HemisphereLightSource } from '@/app/(home–components)/(room)/lights'
// import { SetFloor } from '@/app/(home–components)/floor'
// import { useSpring, config } from '@react-spring/three'
// import { animated, AnimatedComponent } from '@react-spring/three'
// import { lerp } from 'three/src/math/MathUtils'

// const calcRotation = (clientX: number) => ((clientX - window.innerWidth / 2) * 0.2) / window.innerWidth;
// const interpolateRotation = (rotateY: number) => [0, rotateY, 0] as const;

// interface CameraMoveAnimationProps {
//   objectClicked: boolean;
// }

// const CameraMoveAnimation: React.FC<CameraMoveAnimationProps> = ({ objectClicked }) => {
//   const { camera } = useThree();
//   const targetLookAt = new THREE.Vector3(-50, -0.15, 0.5);
//   const animationDuration = 2; // Duration of the animation in seconds
//   const startTimeRef = useRef<number | null>(null);

//   useFrame(() => {
//     if (objectClicked) {
//       const targetQuaternion = new THREE.Quaternion().setFromEuler(new Euler(0, Math.PI/2, 0, 'YXZ'));
//       camera.zoom = lerp(camera.zoom, 1800, 0.2); // Adjust the second parameter for speed
//       camera.position.lerp(new Vector3(250, 0, -0.5), 0.2); // Adjust the second parameter for speed
//       camera.quaternion.slerp(targetQuaternion, 0.2);
//       camera.updateProjectionMatrix();

//       if (startTimeRef.current === null) {
//         startTimeRef.current = performance.now();
//       }
      
//       const currentTime = performance.now();
//       const elapsedTime = (currentTime - startTimeRef.current) / 1000;

//       if(elapsedTime <= animationDuration){
//         const t = elapsedTime / animationDuration; // Calculate the interpolation factor
//         const easingT = easeInOutCubic(t); // Apply easing function

//         // Calculate the intermediate lookAt position using lerp
//         const intermediateLookAt = new THREE.Vector3().lerpVectors(
//           camera.position,
//           targetLookAt,
//           easingT
//         );

//         console.log('intermediateLookAt', intermediateLookAt)

//         camera.lookAt(intermediateLookAt);
//       } else {
//         // Animation is complete, set the final lookAt position
//         camera.lookAt(targetLookAt);
//       }

//       camera.updateProjectionMatrix();
//     } else {
//       startTimeRef.current = null; // Reset the animation start time
//     }
//   });

//   useEffect(() => {
//     if (!objectClicked) {
//       camera.lookAt(new THREE.Vector3(0, 0, 0)); // Reset to the default lookAt position
//       camera.updateProjectionMatrix();
//     }
//   }, [objectClicked]);

//   // Easing function for smooth animation
//   function easeInOutCubic(t: number): number {
//     return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
//   }

//   return null;
// };

// export const MainCanvas = () => {
//   const [objectClicked, setObjectClicked] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { aspectRatio } = useContainerDimensions(containerRef);
//   const orbitControlsRef = useRef<any>();
//   // console.log("Camera position", orbitControlsRef.current?.object.position);
//   // console.log("Camera rotation", orbitControlsRef.current?.object.rotation);
//   // console.log('Camera zoom', orbitControlsRef.current?.object.zoom);
//   const [cameraPosition, setCameraPosition] = useState(new Vector3(2, 1.88, 2));
//   const [cameraRotation, setCameraRotation] = useState(new Euler(-Math.PI/6, Math.PI/4, 0, 'YXZ'));
//   const [cameraZoom, setCameraZoom] = useState(250);
//   const [cameraDisplacement, setCameraDisplacement] = useState(0);

//   const checkObjectClicked = () => {
//     if(!objectClicked){
//       setObjectClicked(true);
//     }
//   }

//   const [props, set] = useSpring(() => ({
//     rotateY: 0,
//     config: config.default
//   }))

//   // TODO: Make this calc relative to the container not the window
//   const onMouseMove = useCallback<MouseEventHandler<HTMLDivElement>>(({ clientX, clientY }) => {
//     const rotation = calcRotation(clientX);
//     set({ rotateY: rotation })
//   }, [set]);

//   return (
//     <div ref={containerRef} className='w-full h-full' onMouseMove={onMouseMove}>
//       <Canvas 
//         shadows
//         orthographic
//         camera={{
//           position: cameraPosition, 
//           rotation: cameraRotation, 
//           zoom: cameraZoom, 
//         }}
//       >
//         <SetFloor />
//         <SunlightSource />
//         <HemisphereLightSource/>
//         <RoomModel 
//           {...{ }}
//           onAnyObjectClicked={checkObjectClicked}
//           rotation={objectClicked ? [0, 0, 0] : props.rotateY.to(interpolateRotation) as unknown as [number, number, number]}
//           position={[-0.1, -0.7, 0]}
//           scale={[0.11, 0.11, 0.11]}
//         />
//         <CameraMoveAnimation objectClicked={objectClicked}/>
//         <OrbitControls
//           ref={orbitControlsRef}
//           position = {cameraPosition}
//         />
//       </Canvas>
//     </div>
//   )
// }


