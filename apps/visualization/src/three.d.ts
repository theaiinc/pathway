declare module 'three/examples/jsm/controls/OrbitControls' {
  import { Camera, MOUSE, Vector3 } from 'three';

  export class OrbitControls {
    constructor(object: Camera, domElement?: HTMLElement);

    object: Camera;
    domElement: HTMLElement;

    // API
    enabled: boolean;
    target: Vector3;

    enableDamping: boolean;
    dampingFactor: number;

    enableZoom: boolean;
    zoomSpeed: number;

    enableRotate: boolean;
    rotateSpeed: number;

    enablePan: boolean;
    panSpeed: number;
    screenSpacePanning: boolean;
    keyPanSpeed: number;

    autoRotate: boolean;
    autoRotateSpeed: number;

    minDistance: number;
    maxDistance: number;

    minZoom: number;
    maxZoom: number;

    minPolarAngle: number;
    maxPolarAngle: number;

    minAzimuthAngle: number;
    maxAzimuthAngle: number;

    keys: { LEFT: string; UP: string; RIGHT: string; BOTTOM: string };
    mouseButtons: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE };
    touches: { ONE: MOUSE; TWO: MOUSE };

    update(): boolean;

    listenToKeyEvents(domElement: HTMLElement): void;

    saveState(): void;

    reset(): void;

    dispose(): void;

    getPolarAngle(): number;
    getAzimuthalAngle(): number;
  }
}
