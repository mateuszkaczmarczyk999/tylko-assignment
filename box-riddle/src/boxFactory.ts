import { Color, Mesh, MeshStandardMaterial, BoxGeometry } from 'three';

export const buildBoxExample = (): Mesh => {
  // setup color for box
  const redColor = new Color(1, 0, 0);
  const material = new MeshStandardMaterial( { color: redColor } );

  // setup geometry data template for box
  const geometry = new BoxGeometry();

  // initializing our drawable mesh geometry
  const box = new Mesh( geometry, material );

  // customize position
  const position = { x: 1, y: 2, z: 3 };
  box.position.set(position.x, position.y, position.z);

  // customize scale
  const scale = { x: 1, y: 2, z: 3 };
  box.scale.set(scale.x, scale.y, scale.z);

  return box;
}
