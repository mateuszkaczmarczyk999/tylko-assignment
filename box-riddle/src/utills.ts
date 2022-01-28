import { Color } from 'three';

export type Box = { x1: number, x2: number, y1: number, y2: number, z1: number, z2: number };
export type Point = { x: number, y: number, z: number };
export type Scale = { x: number, y: number, z: number };

export const getPositionForBox = (box: Box): Point => ({
  x: box.x1 + (box.x2 - box.x1) / 2,
  y: box.y1 + (box.y2 - box.y1) / 2,
  z: box.z1 + (box.z2 - box.z1) / 2,
})

export const getScaleForBox = (box: Box): Scale => ({
  x: box.x2 - box.x1,
  y: box.y2 - box.y1,
  z: box.z2 - box.z1,
});

export const applyScale = (vector: Point | Scale, scalar: number = 0.01) => ({
  x: vector.x * scalar,
  y: vector.y * scalar,
  z: vector.z * scalar,
})

export const generateColor = (): Color => new Color(Math.random(), Math.random(), Math.random());
