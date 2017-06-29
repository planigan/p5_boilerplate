/* eslint no-unused-vars: 0 */
/* global window, console */
// import p5 from 'p5';
import SettingsPanel from 'SettingsPanel';
import { getHSB } from 'Utils';

const sketch = p5 => {
  let settings;
  const canvasWidth  = p5.windowWidth;
  const canvasHeight = p5.windowHeight;
  this.bgColor = [50,50,60];
  // this.fgColor = { h: 360, s: 1, v: 1 };
  this.fgColor = [255,255,255];
  this.radius = Math.min(canvasWidth/3, canvasHeight/3);
  this.maxRadius = this.radius * 3;
  const sketchPanelOptions = {
    colors: ["bgColor","fgColor"],
    radius: {
      max: Math.min(window.innerWidth*0.5, window.innerHeight*0.5),
      min: 10,
      step: 10
    },
  };

  p5.setup = () => {
    // settings = SettingsPanel({object: this, options: sketchPanelOptions});
    SettingsPanel({object: this, options: sketchPanelOptions});
    p5.createCanvas(canvasWidth, canvasHeight).parent('sketch');
  }

  p5.draw = () => {
    let d = this.radius * 2;
    p5.background(this.bgColor);
    // p5.fill(getHSB(this.fgColor));
    p5.fill(this.fgColor);
    p5.ellipse(p5.width/2, p5.height/2, d, d);
  }
}

export default sketch;
