"use client"
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { ComponentProps, Suspense, use, useEffect, useMemo, useRef } from "react";
import { useGLTF, useAnimations, useHelper, useVideoTexture, } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { Group, SpotLight, SpotLightHelper, PerspectiveCamera, CameraHelper, MeshBasicMaterial, MeshPhysicalMaterial, AnimationMixer, } from "three";
import { useSpring, animated, config, AnimatedComponent } from '@react-spring/three'
import { MeshBasicMaterialProps } from '@react-three/fiber'
import { useShadowHelper } from "../(hooks)/use-camera-shadow-helper";
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh;
    Plane_1: THREE.Mesh;
    Sphere: THREE.Mesh;
    Sphere_1: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Cylinder_1: THREE.Mesh;
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
    Rug: THREE.MeshStandardMaterial;
    ["Floor tile 2"]: THREE.MeshStandardMaterial;
    ["Monitor frame"]: THREE.MeshStandardMaterial;
    ["Monitor screen"]: THREE.MeshStandardMaterial;
    ["Fish tank"]: THREE.MeshStandardMaterial;
    Rock: THREE.MeshStandardMaterial;
    ["Fish tank holder"]: THREE.MeshStandardMaterial;
    ["Fish tank thing 2"]: THREE.MeshStandardMaterial;
    ["Fish tank thing 1"]: THREE.MeshStandardMaterial;
    ["Fish thank thing 3"]: THREE.MeshStandardMaterial;
    Seaweed: THREE.MeshStandardMaterial;
    Fish: THREE.MeshPhysicalMaterial;
    ["Floor tile 1"]: THREE.MeshStandardMaterial;
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
  console.log({ texture })
  return <meshBasicMaterial map={texture}  {...props} />
}

export function RoomModel(props: ComponentProps<typeof animated.group>) {
  const group = useRef<Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/models/room.glb"
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  // const mixer = useMemo(() => new AnimationMixer(group.current!), [group]);
  // useEffect(() => {
  //   void mixer.clipAction(animations[6]).play();
  // }, [mixer, animations])
  // useFrame((state, delta) => {
  //   mixer.update(delta);
  // });

  return (
    <animated.group
      ref={group}
      {...props}
      dispose={null}
    >
      <pointLight shadow-normalBias={0.05} color={0xFFE664} intensity={1} position={[0.28, 13.279, 2.764]} castShadow />
      <group name="Scene"
      >
        <group
          name="Body"
          position={[-2.127, 9.082, -5.622]}
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
          castShadow
          receiveShadow
          position={[0.28, 13.279, 2.764]}
          rotation={[-Math.PI, 0.785, -Math.PI]}
        >
          <mesh
            name="Sphere"
            // castShadow
            receiveShadow
            geometry={nodes.Sphere.geometry}

            material={materials["Ceiling light"]}
          >
            {/* <meshPhysicalMaterial roughness={0} color={0xb8f3ff} ior={3} transmission={1} opacity={1} thickness={0.1} /> */}
          </mesh>
          <mesh
            name="Sphere_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere_1.geometry}
            material={materials["Ceiling rod"]}
          />
        </group>
        <group
          name="WelcomeSign"
          castShadow
          receiveShadow
          position={[-7.709, 1.031, 9.814]}
          rotation={[-Math.PI, 1.145, -Math.PI]}
          scale={[-0.01, -0.275, -0.01]}
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
          name="Floor_items"
          position={[-7.234, 2.336, 3.338]}
          rotation={[0, -0.785, 0]}
          castShadow
          receiveShadow
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
          position={[-7.014, 5.176, -0.182]}
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
          >
            <Suspense fallback={
              <meshBasicMaterial
                map={materials["Monitor screen"].map}
              />}
            >
              <VideoMaterial url="/textures/kda.mp4" />
            </Suspense>
          </mesh>
          <mesh
            name="Cube014_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube014_1.geometry}
            material={materials["Monitor screen"]}
          />

        </group>
        <group
          name="Aquarium"
          castShadow
          receiveShadow
          position={[6.983, 2.31, 1.175]}
          rotation={[0, -0.785, 0]}

        >
          <mesh
            name="Cube043"
            castShadow
            receiveShadow
            geometry={nodes.Cube043.geometry}
          >
            <meshPhysicalMaterial roughness={0} color={0xb8f3ff} ior={3} transmission={1} opacity={1} thickness={0.1} />
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
          position={[8.614, 5.174, 1.935]}
          rotation={[1.776, -0.091, 0.567]}
        />
        <mesh
          name="FloorFirst"
          castShadow
          receiveShadow
          geometry={nodes.FloorFirst.geometry}
          material={materials["Floor tile 1"]}
          position={[-4.356, 1.017, 10.139]}
          rotation={[Math.PI, -0.786, Math.PI]}
        />
        <mesh
          name="Dirt"
          castShadow
          receiveShadow
          geometry={nodes.Dirt.geometry}
          material={materials.Dirt}
          position={[-7.709, 1.017, 9.814]}
          rotation={[-Math.PI, 0.785, -Math.PI]}
        />
        <mesh
          name="FloorSecond"
          castShadow
          receiveShadow
          geometry={nodes.FloorSecond.geometry}
          material={materials["Floor tile 2"]}
          position={[-5.374, 1.017, 10.848]}
          rotation={[Math.PI, -0.786, Math.PI]}
        />
        <mesh
          name="FloorThird"
          castShadow
          receiveShadow
          geometry={nodes.FloorThird.geometry}
          material={materials["Floor tile 3"]}
          position={[-5.912, 1.017, 12.02]}
          rotation={[Math.PI, -0.786, Math.PI]}
        />
        <group
          name="Mini_floor"
          castShadow
          receiveShadow
          position={[-6.21, 0.874, 13.793]}
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
          castShadow
          receiveShadow
          name="Mailbox"
          position={[-3.641, 1.002, 12.928]}
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
          castShadow
          receiveShadow
          position={[-6.472, 1.001, 8.595]}
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
          name="Table_stuff"
          position={[-0.344, 4.382, -4.149]}
          rotation={[-1.3, 0.172, -1.026]}
          castShadow
          receiveShadow
        >
          <mesh
            name="Cube062"
            castShadow
            receiveShadow
            geometry={nodes.Cube062.geometry}
            material={materials["Pencil base 2"]}
          />
          <mesh
            name="Cube062_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube062_1.geometry}
            material={materials["Trackpad base"]}
          />
          <mesh
            name="Cube062_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube062_2.geometry}
            material={materials["Trackpad face"]}
          />
          <mesh
            name="Cube062_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube062_3.geometry}
            material={materials.Leaves}
          />
          <mesh
            name="Cube062_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube062_4.geometry}
            material={materials.Pot}
          />
          <mesh
            name="Cube062_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube062_5.geometry}
            material={materials.Dirt}
          />
          <mesh
            name="Cube062_6"
            castShadow
            receiveShadow
            geometry={nodes.Cube062_6.geometry}
            material={materials["White keys"]}
          />
          <mesh
            name="Cube062_7"
            castShadow
            receiveShadow
            geometry={nodes.Cube062_7.geometry}
            material={materials["Blue keys"]}
          />
          <mesh
            name="Cube062_8"
            castShadow
            receiveShadow
            geometry={nodes.Cube062_8.geometry}
            material={materials["Orange keys"]}
          />
          <mesh
            name="Cube062_9"
            castShadow
            receiveShadow
            geometry={nodes.Cube062_9.geometry}
            material={materials.Keyboard}
          />
          <mesh
            name="Cube062_10"
            castShadow
            receiveShadow
            geometry={nodes.Cube062_10.geometry}
            material={materials["Pencil holder"]}
          />
          <mesh
            name="Cube062_11"
            castShadow
            receiveShadow
            geometry={nodes.Cube062_11.geometry}
            material={materials["Pencil head"]}
          />
          <mesh
            name="Cube062_12"
            castShadow
            receiveShadow
            geometry={nodes.Cube062_12.geometry}
            material={materials["Pencil lead"]}
          />
          <mesh
            name="Cube062_13"
            castShadow
            receiveShadow
            geometry={nodes.Cube062_13.geometry}
            material={materials["Pencil base"]}
          />
          <mesh
            name="Cube062_14"
            castShadow
            receiveShadow
            geometry={nodes.Cube062_14.geometry}
            material={materials.Pages}
          />
          <mesh
            name="Cube062_15"
            castShadow
            receiveShadow
            geometry={nodes.Cube062_15.geometry}
            material={materials["Book cover blue"]}
          />
          <mesh
            name="Cube062_16"
            castShadow
            receiveShadow
            geometry={nodes.Cube062_16.geometry}
            material={materials.Mug}
          />
        </group>
        <group
          name="Desks"
          position={[0.282, 2.605, -4.071]}
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
          name="TableOne"
          position={[0.875, 1.457, 5.588]}
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
          castShadow
          receiveShadow
          name="Table_items"
          position={[0.204, 2.599, 4.338]}
          rotation={[Math.PI, -0.108, Math.PI]}
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
          position={[2.991, 9.094, -5.01]}
          rotation={[2.731, 0.742, -2.856]}
          castShadow
          receiveShadow
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
          position={[-4.193, 2.782, 2.718]}
          rotation={[Math.PI, -1.413, Math.PI]}
        />
        <group
          name="Clock"
          castShadow
          receiveShadow
          position={[8.554, 13.027, 0.398]}
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
        <group
          name="Cube"
          position={[0.22, 1.116, -10.089]}
          rotation={[Math.PI, -0.763, Math.PI]}
          scale={0.469}
          castShadow
          receiveShadow
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
        </group>
      </group>
    </animated.group>
  );
}

useGLTF.preload("/models/room.glb");
