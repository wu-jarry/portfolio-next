"use client"
import * as THREE from 'three'
import { useHelper } from '@react-three/drei';
import { dir } from 'console';
import { use, useRef } from 'react';
import { CameraHelper, DirectionalLight, DirectionalLightHelper, Object3D, OrthographicCamera, PointLight, PointLightHelper } from 'three'
import { useShadowHelper } from '../(hooks)/use-camera-shadow-helper';

export const setFloor = () => {
    const geometry = new THREE.PlaneGeometry(500, 500);
    const material = new THREE.MeshStandardMaterial({ color: 0x7CB8C2, side: THREE.BackSide });

    return (
        <mesh geometry={geometry} material={material} position={[0, -0.8, 0]} rotation={[Math.PI / 2, 0, 0]} receiveShadow/>
    )
}