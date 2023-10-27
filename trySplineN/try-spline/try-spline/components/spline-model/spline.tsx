"use client"

import React, { useEffect } from "react";
import { Application } from '@splinetool/runtime';

const Model = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    if (canvas) {
      const canvasElement = canvas as HTMLCanvasElement;
      const app = new Application(canvasElement);
      // app.load('https://prod.spline.design/8Fe6Zk7zZVKaUOiV/scene.splinecode');
      app.load('https://prod.spline.design/sXaGi19VGxPNUwVS/scene.splinecode');

      return () => {
        app.dispose();
      };
    }
  }, []);

  return (
    <div  id="canvas">
      <canvas id="canvas3d"></canvas>
    </div>
  );
}

export default Model;
