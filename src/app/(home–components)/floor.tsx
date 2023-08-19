"use client"
import * as THREE from 'three'
import { useHelper, Reflector } from '@react-three/drei';
import { dir } from 'console';
import { use, useRef } from 'react';
import { CameraHelper, DirectionalLight, DirectionalLightHelper, Object3D, OrthographicCamera, PointLight, PointLightHelper } from 'three'
import { useShadowHelper } from '../(hooks)/use-camera-shadow-helper';

export const SetFloor = () => {
        const geometry = new THREE.PlaneGeometry(100, 100, 1, 1);
        const material = new THREE.MeshPhysicalMaterial({ color: 0xFaF4e5, side: THREE.BackSide });
    
        return (
                    <mesh geometry={geometry} material={material} position={[0, -0.8, 0]} rotation={[Math.PI / 2, 0, 0]} receiveShadow/>
            )
        }
        
// export const SetFloor = () => {
//     const mirrorMesh = useRef(null!);

//     return (
//         <group>
//             <Reflector
//                 resolution={512}
//                 args={[100, 100]} // width, height
//                 mirror={0.5}
//                 rotation={[-Math.PI/2, 0, Math.PI/2]}
//                 position={[0, -0.8, 0]}
//                 receiveShadow
//                 ref={mirrorMesh}
//                 blur={[400, 100]} // Adjust blur for the reflection
//                 mixBlur={10} // Adjust mixBlur for the reflection
//                 mixStrength={0.8} // Adjust mixStrength for the reflection
//                 depthScale={0.2} // Adjust depthScale for the reflection
//                 // minDepthThreshold={0.9} // Adjust minDepthThreshold for the reflection
//                 // maxDepthThreshold={1.0} // Adjust maxDepthThreshold for the reflection
//             >
//                 {(Material: React.ElementType,props: React.ComponentProps<typeof Material>) => (
//                     <Material {...props} color={0xFaF4e5} metalness={0.5}/>
//                 )}
//             </Reflector>
//         </group>
//     )
// }