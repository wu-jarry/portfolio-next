"use client"
import * as THREE from 'three'
import { useHelper, MeshReflectorMaterial } from '@react-three/drei';
import { dir } from 'console';
import { use, useRef } from 'react';
import { CameraHelper, DirectionalLight, DirectionalLightHelper, Object3D, OrthographicCamera, PointLight, PointLightHelper } from 'three'
import { useShadowHelper } from '../(hooks)/use-camera-shadow-helper';

// export const setFloor = () => {
//     const geometry = new THREE.PlaneGeometry(500, 500);
//     const material = new THREE.MeshPhysicalMaterial({ color: 0x7CB8C2, side: THREE.BackSide, roughness: 0.5, metalness: 0.5 });

//     return (
//             <mesh geometry={geometry} material={material} position={[0, -0.8, 0]} rotation={[Math.PI / 2, 0, 0]} receiveShadow/>
//     )
// }

export const setFloor = () => {

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.8, 0]} receiveShadow>
            <planeGeometry args={[500, 500]} />
            <MeshReflectorMaterial
                envMapIntensity={0} // How much the environment map affects the surface; 0 = no reflections, 1 = full influence
                dithering={true}
                color={0x7CB8C2}
                roughness={0.7}
                blur={[1000, 400]} // Blur ground reflections (width, heigt), 0 skips blur
                mixBlur={30} // How much blur mixes with surface roughness (default = 1)
                mixStrength={1000} // Strength of the reflections
                mixContrast={1} // Contrast of the reflections
                resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
                mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
                depthScale={0.01} // Scale the depth factor (0 = no depth, default = 0)
                minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
                maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
                depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
                reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
            />
        </mesh>
    )
}