"use client"
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { ComponentProps, Suspense, use, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useGLTF, useAnimations, useHelper, useVideoTexture, } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { Group, SpotLight, SpotLightHelper, PerspectiveCamera, CameraHelper, MeshBasicMaterial, MeshPhysicalMaterial, AnimationMixer, PointLight, PointLightHelper, } from "three";
import { useSpring, animated, config, AnimatedComponent } from '@react-spring/three'
import { MeshBasicMaterialProps } from '@react-three/fiber'
import { useShadowHelper } from "@/app/(hooks)/use-camera-shadow-helper";
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';
import { GLTF } from "three-stdlib";
import { LampLightSource } from "./lights";
import { timeStamp } from "console";
import { AnimationStates } from "../main-canvas";

type GLTFResult = GLTF & {
    nodes: {
        Plane: THREE.Mesh;
        Plane_1: THREE.Mesh;
        Sphere: THREE.Mesh;
        Sphere_1: THREE.Mesh;
        Cylinder: THREE.Mesh;
        Cylinder_1: THREE.Mesh;
        Poster: THREE.Mesh;
        Cube011: THREE.Mesh;
        Cube011_1: THREE.Mesh;
        Cube011_2: THREE.Mesh;
        Cube011_3: THREE.Mesh;
        Cube014: THREE.Mesh;
        Cube014_1: THREE.Mesh;
        Cube043: THREE.Mesh;
        Cube043_1: THREE.Mesh;
        Cube043_2: THREE.Mesh;
        Cube043_3: THREE.Mesh;
        Cube043_4: THREE.Mesh;
        Cube043_5: THREE.Mesh;
        Cube043_6: THREE.Mesh;
        fish: THREE.Mesh;
        Plane002: THREE.Mesh;
        Plane002_1: THREE.Mesh;
        Plane002_2: THREE.Mesh;
        Plane002_3: THREE.Mesh;
        FloorFirst: THREE.Mesh;
        Dirt: THREE.Mesh;
        FloorSecond: THREE.Mesh;
        FloorThird: THREE.Mesh;
        Cube081: THREE.Mesh;
        Cube081_1: THREE.Mesh;
        Cylinder021: THREE.Mesh;
        Cylinder021_1: THREE.Mesh;
        Cylinder021_2: THREE.Mesh;
        Plane010: THREE.Mesh;
        Plane010_1: THREE.Mesh;
        Cube062: THREE.Mesh;
        Cube062_1: THREE.Mesh;
        Cube062_2: THREE.Mesh;
        Cube062_3: THREE.Mesh;
        Cube062_4: THREE.Mesh;
        Cube062_5: THREE.Mesh;
        Cube062_6: THREE.Mesh;
        Cube062_7: THREE.Mesh;
        Cube062_8: THREE.Mesh;
        Cube062_9: THREE.Mesh;
        Cube062_10: THREE.Mesh;
        Cube062_11: THREE.Mesh;
        Cube062_12: THREE.Mesh;
        Cube062_13: THREE.Mesh;
        Cube062_14: THREE.Mesh;
        Cube062_15: THREE.Mesh;
        Cube062_16: THREE.Mesh;
        Cylinder014: THREE.Mesh;
        Cylinder014_1: THREE.Mesh;
        Cylinder014_2: THREE.Mesh;
        Cube006: THREE.Mesh;
        Cube006_1: THREE.Mesh;
        Cube006_2: THREE.Mesh;
        Cube007: THREE.Mesh;
        Cube007_1: THREE.Mesh;
        Cube007_2: THREE.Mesh;
        Cube007_3: THREE.Mesh;
        Cube007_4: THREE.Mesh;
        Cube007_5: THREE.Mesh;
        Cube007_6: THREE.Mesh;
        Cube007_7: THREE.Mesh;
        Cube007_8: THREE.Mesh;
        Cube007_9: THREE.Mesh;
        Cube007_10: THREE.Mesh;
        Cube128: THREE.Mesh;
        Cube128_1: THREE.Mesh;
        Cube129: THREE.Mesh;
        Cube129_1: THREE.Mesh;
        Cube129_2: THREE.Mesh;
        Cube129_3: THREE.Mesh;
        Cube129_4: THREE.Mesh;
        Cube116: THREE.Mesh;
        Cube116_1: THREE.Mesh;
        Cube116_2: THREE.Mesh;
        Cube116_3: THREE.Mesh;
        Cube116_4: THREE.Mesh;
        Cube116_5: THREE.Mesh;
        Cube116_6: THREE.Mesh;
        Cube116_7: THREE.Mesh;
        Cube116_8: THREE.Mesh;
        Cube116_9: THREE.Mesh;
        Cube116_10: THREE.Mesh;
        Cube116_11: THREE.Mesh;
        Cube116_12: THREE.Mesh;
        Cube116_13: THREE.Mesh;
        Chair: THREE.Mesh;
        Cylinder019: THREE.Mesh;
        Cylinder019_1: THREE.Mesh;
        Cube256: THREE.Mesh;
        Cube256_1: THREE.Mesh;
    };
    materials: {
        Walls: THREE.MeshPhysicalMaterial;
        ["Wall 2"]: THREE.MeshStandardMaterial;
        ["Ceiling light"]: THREE.MeshStandardMaterial;
        ["Ceiling rod"]: THREE.MeshStandardMaterial;
        Sign: THREE.MeshStandardMaterial;
        ["Welcome text"]: THREE.MeshStandardMaterial;
        ["Trash lid"]: THREE.MeshStandardMaterial;
        ["Desk top.001"]: THREE.MeshPhysicalMaterial;
        Poster: THREE.MeshStandardMaterial;
        Rug: THREE.MeshStandardMaterial;
        ["Floor tile 2"]: THREE.MeshStandardMaterial;
        ["Monitor frame"]: THREE.MeshStandardMaterial;
        ["Monitor screen"]: THREE.MeshStandardMaterial;
        ["Fish tank"]: THREE.MeshPhysicalMaterial;
        Rock: THREE.MeshStandardMaterial;
        ["Fish tank holder"]: THREE.MeshStandardMaterial;
        ["Fish tank thing 2"]: THREE.MeshStandardMaterial;
        ["Fish tank thing 1"]: THREE.MeshStandardMaterial;
        ["Fish thank thing 3"]: THREE.MeshStandardMaterial;
        Seaweed: THREE.MeshStandardMaterial;
        Fish: THREE.MeshPhysicalMaterial;
        ["Floor tile 1"]: THREE.MeshStandardMaterial;
        Blanket: THREE.MeshPhysicalMaterial;
        Couch: THREE.MeshStandardMaterial;
        Pillow: THREE.MeshPhysicalMaterial;
        ["Couch cushions"]: THREE.MeshStandardMaterial;
        Dirt: THREE.MeshStandardMaterial;
        ["Floor tile 3"]: THREE.MeshStandardMaterial;
        ["Side floor"]: THREE.MeshStandardMaterial;
        Pages: THREE.MeshStandardMaterial;
        ["Book cover blue"]: THREE.MeshStandardMaterial;
        Lamp: THREE.MeshPhysicalMaterial;
        ["Lamp light"]: THREE.MeshStandardMaterial;
        ["Pencil base 2"]: THREE.MeshStandardMaterial;
        ["Trackpad base"]: THREE.MeshStandardMaterial;
        ["Trackpad face"]: THREE.MeshStandardMaterial;
        Leaves: THREE.MeshStandardMaterial;
        Pot: THREE.MeshStandardMaterial;
        ["White keys"]: THREE.MeshStandardMaterial;
        ["Blue keys"]: THREE.MeshStandardMaterial;
        ["Orange keys"]: THREE.MeshStandardMaterial;
        Keyboard: THREE.MeshStandardMaterial;
        ["Pencil holder"]: THREE.MeshStandardMaterial;
        ["Pencil head"]: THREE.MeshStandardMaterial;
        ["Pencil lead"]: THREE.MeshStandardMaterial;
        ["Pencil base"]: THREE.MeshStandardMaterial;
        Mug: THREE.MeshStandardMaterial;
        ["Desk legs.001"]: THREE.MeshStandardMaterial;
        ["Desk leg black.001"]: THREE.MeshPhysicalMaterial;
        ["Table legs"]: THREE.MeshStandardMaterial;
        Table: THREE.MeshStandardMaterial;
        ["Book cover green"]: THREE.MeshStandardMaterial;
        ["Picture frame"]: THREE.MeshStandardMaterial;
        Picture: THREE.MeshStandardMaterial;
        ["Pot 2"]: THREE.MeshStandardMaterial;
        ["Book cover red"]: THREE.MeshStandardMaterial;
        ["Book cover brown"]: THREE.MeshStandardMaterial;
        ["Lamp base"]: THREE.MeshStandardMaterial;
        ["Box top"]: THREE.MeshStandardMaterial;
        Chair: THREE.MeshStandardMaterial;
    };
};


function VideoMaterial({ url, ...props }: { url: string } & MeshBasicMaterialProps) {
    // https://codesandbox.io/s/video-texture-39hg8?file=/src/App.js:512-650
    const texture = useVideoTexture(url)
    texture.flipY = false;
    // console.log({ texture })
    return <meshBasicMaterial map={texture}  {...props} />
}

const interpolateBoxPosition = (translateY: number) => [0.875, 7.8 + translateY, 3.613] as const;


type RoomModelProps = ComponentProps<typeof animated.group> & {
    animationState: AnimationStates;
    progressAnimationState: (state?: AnimationStates) => void;
}
export function RoomModel({ animationState, progressAnimationState, ...props }: RoomModelProps) {
    const group = useRef<Group>(null);
    const { nodes, materials, animations } = useGLTF("/models/website.glb") as GLTFResult;
    const { actions } = useAnimations(animations, group);

    const [boxTranslateSpringProps, setboxTranslateSpringProps] = useSpring(() => ({
        boxTranslateY: (animationState >= AnimationStates.BOX_OFF) ? 100 : 0,
        config: {
            duration: 1000
        }
    }), [animationState]);

    const [lightOnSpringProps] = useSpring(() => ({
        lightIntensity: (animationState >= AnimationStates.LIGHTS_ON) ? 1 : 0,
        config: {
            duration: 400
        }
    }), [animationState]);



    useEffect(() => {
        if (actions.FishAction) {
            actions.FishAction.play();
        }
    });

    return (
        <animated.group
            ref={group}
            {...props}
            dispose={null}
        >
            <group name="Scene">
                <>
                    <group
                        name="Body"
                        position={[-1.532, 9.082, -4.773]}
                        rotation={[0, -0.785, -Math.PI / 2]}
                    >
                        <mesh
                            name="Plane"
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane.geometry}
                            material={materials.Walls}
                        />
                        <mesh
                            name="Plane_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane_1.geometry}
                            material={materials["Wall 2"]}
                        />


                    </group>
                    <group
                        name="Ceiling_lamp"
                        position={[0.875, 13.279, 3.613]}
                        rotation={[-Math.PI, 0.785, -Math.PI]}
                    >
                        <LampLightSource intensity={lightOnSpringProps.lightIntensity} />

                        <mesh
                            name="Sphere"
                            geometry={nodes.Sphere.geometry}
                        // material={materials["Wall 2"]}

                        >
                            {/* 
                        // @ts-ignore */}
                            <animated.meshStandardMaterial
                                attach="material"
                                color={0xffffff}
                                emissive={0xffffff}
                                emissiveIntensity={lightOnSpringProps.lightIntensity}
                                metalness={0}
                                roughness={0.5}
                                opacity={1}
                            />
                        </mesh>
                        <mesh
                            name="Sphere_1"
                            geometry={nodes.Sphere_1.geometry}
                            material={materials["Ceiling rod"]}
                        />
                    </group>
                    <group
                        name="WelcomeSign"
                        position={[-7.114, 1.031, 10.663]}
                        rotation={[-Math.PI, 1.145, -Math.PI]}
                    >
                        <mesh
                            name="Cylinder"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder.geometry}
                            material={materials.Sign}
                        />
                        <mesh
                            name="Cylinder_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder_1.geometry}
                            material={materials["Welcome text"]}
                        />
                    </group>
                    <group
                        name="WelcomeSign"
                        position={[-7.114, 1.031, 10.663]}
                        rotation={[-Math.PI, 1.145, -Math.PI]}
                    >
                        <mesh
                            name="Cylinder"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder.geometry}
                            material={materials.Sign}
                        />
                        <mesh
                            name="Cylinder_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder_1.geometry}
                            material={materials["Welcome text"]}
                        />
                    </group>
                    <mesh
                        name="Poster"
                        castShadow
                        receiveShadow
                        geometry={nodes.Poster.geometry}
                        material={materials.Poster}
                        position={[6.732, 11.016, -1.217]}
                        rotation={[Math.PI, -Math.PI / 4, 0]}
                    />
                    <group
                        name="Floor_items"
                        position={[-6.639, 2.336, 4.187]}
                        rotation={[0, -0.785, 0]}
                    >
                        <mesh
                            name="Cube011"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube011.geometry}
                            material={materials["Trash lid"]}
                        />
                        <mesh
                            name="Cube011_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube011_1.geometry}
                            material={materials["Desk top.001"]}
                        />
                        <mesh
                            name="Cube011_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube011_2.geometry}
                            material={materials.Rug}
                        />
                        <mesh
                            name="Cube011_3"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube011_3.geometry}
                            material={materials["Floor tile 2"]}
                        />
                    </group>
                    <group
                        name="Computer"
                        position={[-6.419, 5.176, 0.666]}
                        rotation={[0, -0.785, 0]}
                    >
                        <mesh
                            name="Cube014"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube014.geometry}
                            material={materials["Monitor frame"]}
                        />
                        <mesh
                            name="Cube014_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube014_1.geometry}
                            material={materials["Monitor screen"]}
                        >
                            <Suspense fallback={
                                <meshBasicMaterial
                                    map={materials["Monitor screen"].map}
                                />}
                            >
                                <VideoMaterial url="/textures/kda.mp4" />
                            </Suspense>
                        </mesh>
                    </group>
                    <group
                        name="Aquarium"
                        position={[8.247, 2.18, 2.693]}
                        rotation={[0, -0.785, 0]}
                    >
                        <mesh
                            name="Cube043"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube043.geometry}
                            material={materials["Fish tank"]}
                        >
                            <meshPhysicalMaterial roughness={0.2} color={0xb8f3ff} ior={3} transmission={1} opacity={1} thickness={0.1} />
                        </mesh>
                        <mesh
                            name="Cube043_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube043_1.geometry}
                            material={materials.Rock}
                        />
                        <mesh
                            name="Cube043_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube043_2.geometry}
                            material={materials["Fish tank holder"]}
                        />
                        <mesh
                            name="Cube043_3"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube043_3.geometry}
                            material={materials["Fish tank thing 2"]}
                        />
                        <mesh
                            name="Cube043_4"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube043_4.geometry}
                            material={materials["Fish tank thing 1"]}
                        />
                        <mesh
                            name="Cube043_5"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube043_5.geometry}
                            material={materials["Fish thank thing 3"]}
                        />
                        <mesh
                            name="Cube043_6"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube043_6.geometry}
                            material={materials.Seaweed}
                        />
                    </group>
                    <mesh
                        name="fish"
                        castShadow
                        receiveShadow
                        geometry={nodes.fish.geometry}
                        material={materials.Fish}
                        position={[7.059, 4.797, 9.881]}
                        rotation={[1.748, 0.024, 1.661]}
                    />
                    <group
                        name="Couch"
                        position={[4.16, 3.575, -1.665]}
                        rotation={[0, Math.PI / 4, 0]}
                    >
                        <mesh
                            name="Plane002"
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane002.geometry}
                            material={materials.Blanket}
                        />
                        <mesh
                            name="Plane002_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane002_1.geometry}
                            material={materials.Couch}
                        />
                        <mesh
                            name="Plane002_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane002_2.geometry}
                            material={materials.Pillow}
                        />
                        <mesh
                            name="Plane002_3"
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane002_3.geometry}
                            material={materials["Couch cushions"]}
                        />
                    </group>
                    <mesh
                        name="FloorFirst"
                        castShadow
                        receiveShadow
                        geometry={nodes.FloorFirst.geometry}
                        material={materials["Floor tile 1"]}
                        position={[-3.761, 1.017, 10.987]}
                        rotation={[Math.PI, -0.786, Math.PI]}
                    />
                    <mesh
                        name="Dirt"
                        castShadow
                        receiveShadow
                        geometry={nodes.Dirt.geometry}
                        material={materials.Dirt}
                        position={[-7.114, 1.017, 10.663]}
                        rotation={[-Math.PI, 0.785, -Math.PI]}
                    />
                    <mesh
                        name="FloorSecond"
                        castShadow
                        receiveShadow
                        geometry={nodes.FloorSecond.geometry}
                        material={materials["Floor tile 2"]}
                        position={[-4.779, 1.017, 11.696]}
                        rotation={[Math.PI, -0.786, Math.PI]}
                    />
                    <mesh
                        name="FloorThird"
                        castShadow
                        receiveShadow
                        geometry={nodes.FloorThird.geometry}
                        material={materials["Floor tile 3"]}
                        position={[-5.317, 1.017, 12.869]}
                        rotation={[Math.PI, -0.786, Math.PI]}
                    />
                    <group
                        name="Mini_floor"
                        position={[-5.615, 0.874, 14.642]}
                        rotation={[0, -0.785, 0]}
                    >
                        <mesh
                            name="Cube081"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube081.geometry}
                            material={materials.Walls}
                        />
                        <mesh
                            name="Cube081_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube081_1.geometry}
                            material={materials["Side floor"]}
                        />
                    </group>
                    <group
                        name="Mailbox"
                        position={[-3.046, 1.002, 13.776]}
                        rotation={[-Math.PI, 0.785, -Math.PI]}
                    >
                        <mesh
                            name="Cylinder021"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder021.geometry}
                            material={materials.Pages}
                        />
                        <mesh
                            name="Cylinder021_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder021_1.geometry}
                            material={materials["Book cover blue"]}
                        />
                        <mesh
                            name="Cylinder021_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder021_2.geometry}
                            material={materials["Desk top.001"]}
                        />
                    </group>
                    <group
                        name="Lamp"
                        position={[-5.877, 1.001, 9.444]}
                        rotation={[-Math.PI, 0.785, -Math.PI]}
                    >
                        <mesh
                            name="Plane010"
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane010.geometry}
                            material={materials.Lamp}
                        />
                        <mesh
                            name="Plane010_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane010_1.geometry}
                            material={materials["Lamp light"]}
                        />
                    </group>
                    <group
                        name="Desks"
                        position={[0.877, 2.605, -3.222]}
                        rotation={[-Math.PI, 0.785, -Math.PI]}
                    >
                        <mesh
                            name="Cylinder014"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder014.geometry}
                            material={materials["Desk top.001"]}
                        />
                        <mesh
                            name="Cylinder014_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder014_1.geometry}
                            material={materials["Desk legs.001"]}
                        />
                        <mesh
                            name="Cylinder014_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder014_2.geometry}
                            material={materials["Desk leg black.001"]}
                        />
                    </group>
                    <group
                        name="Table_stuff001"
                        position={[0.251, 4.382, -3.301]}
                        rotation={[-1.3, 0.172, -1.026]}
                    >
                        <mesh
                            name="Cube006"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube006.geometry}
                            material={materials.Leaves}
                        />
                        <mesh
                            name="Cube006_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube006_1.geometry}
                            material={materials.Pot}
                        />
                        <mesh
                            name="Cube006_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube006_2.geometry}
                            material={materials.Dirt}
                        />
                    </group>
                    <group
                        name="Table_stuff002"
                        position={[0.251, 4.382, -3.301]}
                        rotation={[-1.3, 0.172, -1.026]}
                    >
                        <mesh
                            name="Cube007"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube007.geometry}
                            material={materials["Pencil base 2"]}
                        />
                        <mesh
                            name="Cube007_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube007_1.geometry}
                            material={materials["Trackpad base"]}
                        />
                        <mesh
                            name="Cube007_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube007_2.geometry}
                            material={materials["Trackpad face"]}
                        />
                        <mesh
                            name="Cube007_3"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube007_3.geometry}
                            material={materials["White keys"]}
                        />
                        <mesh
                            name="Cube007_4"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube007_4.geometry}
                            material={materials["Blue keys"]}
                        />
                        <mesh
                            name="Cube007_5"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube007_5.geometry}
                            material={materials["Orange keys"]}
                        />
                        <mesh
                            name="Cube007_6"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube007_6.geometry}
                            material={materials.Keyboard}
                        />
                        <mesh
                            name="Cube007_7"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube007_7.geometry}
                            material={materials["Pencil holder"]}
                        />
                        <mesh
                            name="Cube007_8"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube007_8.geometry}
                            material={materials["Pencil head"]}
                        />
                        <mesh
                            name="Cube007_9"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube007_9.geometry}
                            material={materials["Pencil lead"]}
                        />
                        <mesh
                            name="Cube007_10"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube007_10.geometry}
                            material={materials["Pencil base"]}
                        />
                    </group>
                    <group
                        name="TableOne"
                        position={[1.47, 1.457, 6.437]}
                        rotation={[2.787, 0.176, -3.08]}
                    >
                        <mesh
                            name="Cube128"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube128.geometry}
                            material={materials["Table legs"]}
                        />
                        <mesh
                            name="Cube128_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube128_1.geometry}
                            material={materials.Table}
                        />
                    </group>
                    <group
                        name="Table_items"
                        position={[0.799, 2.599, 5.186]}
                        rotation={[Math.PI, -0.109, Math.PI]}
                    >
                        <mesh
                            name="Cube129"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube129.geometry}
                            material={materials.Dirt}
                        />
                        <mesh
                            name="Cube129_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube129_1.geometry}
                            material={materials.Mug}
                        />
                        <mesh
                            name="Cube129_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube129_2.geometry}
                            material={materials["Book cover blue"]}
                        />
                        <mesh
                            name="Cube129_3"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube129_3.geometry}
                            material={materials.Pages}
                        />
                        <mesh
                            name="Cube129_4"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube129_4.geometry}
                            material={materials["Book cover green"]}
                        />
                    </group>
                    <group
                        name="Shelves"
                        position={[3.586, 9.094, -4.161]}
                        rotation={[2.731, 0.742, -2.856]}
                    >
                        <mesh
                            name="Cube116"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube116.geometry}
                            material={materials["Picture frame"]}
                        />
                        <mesh
                            name="Cube116_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube116_1.geometry}
                            material={materials.Picture}
                        />
                        <mesh
                            name="Cube116_2"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube116_2.geometry}
                            material={materials["Desk top.001"]}
                        />
                        <mesh
                            name="Cube116_3"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube116_3.geometry}
                            material={materials.Leaves}
                        />
                        <mesh
                            name="Cube116_4"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube116_4.geometry}
                            material={materials["Pot 2"]}
                        />
                        <mesh
                            name="Cube116_5"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube116_5.geometry}
                            material={materials.Dirt}
                        />
                        <mesh
                            name="Cube116_6"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube116_6.geometry}
                            material={materials["Book cover red"]}
                        />
                        <mesh
                            name="Cube116_7"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube116_7.geometry}
                            material={materials.Pages}
                        />
                        <mesh
                            name="Cube116_8"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube116_8.geometry}
                            material={materials["Book cover green"]}
                        />
                        <mesh
                            name="Cube116_9"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube116_9.geometry}
                            material={materials["Book cover blue"]}
                        />
                        <mesh
                            name="Cube116_10"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube116_10.geometry}
                            material={materials["Book cover brown"]}
                        />
                        <mesh
                            name="Cube116_11"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube116_11.geometry}
                            material={materials["Lamp base"]}
                        />
                        <mesh
                            name="Cube116_12"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube116_12.geometry}
                            material={materials["Blue keys"]}
                        />
                        <mesh
                            name="Cube116_13"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube116_13.geometry}
                            material={materials["Box top"]}
                        />
                    </group>
                    <mesh
                        name="Chair"
                        castShadow
                        receiveShadow
                        geometry={nodes.Chair.geometry}
                        material={materials.Chair}
                        position={[-3.598, 2.782, 3.567]}
                        rotation={[Math.PI, -1.413, Math.PI]}
                    />
                    <group
                        name="Clock"
                        position={[9.149, 13.027, 1.246]}
                        rotation={[-Math.PI / 2, 0, 2.357]}
                    >
                        <mesh
                            name="Cylinder019"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder019.geometry}
                            material={materials["Desk top.001"]}
                        />
                        <mesh
                            name="Cylinder019_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder019_1.geometry}
                            material={materials.Pages}
                        />
                    </group>
                </>
                <animated.group
                    name="Cube"
                    position={boxTranslateSpringProps.boxTranslateY.to(interpolateBoxPosition)}
                    rotation={[Math.PI, -0.763, Math.PI]}
                    scale={[20, 20, 20]}
                >
                    <mesh
                        name="Cube256"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube256.geometry}
                        material={materials.Walls}
                    />
                    <mesh
                        name="Cube256_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube256_1.geometry}
                        material={materials["Wall 2"]}
                    />
                </animated.group>
            </group>
        </animated.group>
    );
}

useGLTF.preload("/models/website.glb");
