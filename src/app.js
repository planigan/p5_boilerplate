/* globals window */
import p5 from 'p5';
// import p5 from 'p5/lib/p5.min';
// import 'p5/lib/addons/p5.sound';
// import 'p5/lib/addons/p5.dom';
import sketch from 'sketch';

/* eslint no-unused-vars: 0 */
// Load Sass/Pug files below to get webpack to deploy them.
import resetStyles from 'reset';
import styles from 'styles';
import pug from 'index';

// Init sketch
window.p5 = new p5(sketch);
