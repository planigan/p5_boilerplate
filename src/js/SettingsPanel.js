/* eslint no-console: 0 */
// import dat from 'dat.gui/build/dat.gui.min';
import dat from 'dat.gui/build/dat.gui';

const SettingsPanel = args => {
  const gui = new dat.GUI();
  const object = args.object;
  const options = args.options;
  const keys = Object.keys(options);
  for ( const key of keys ) {
    const opt = options[key];
    // console.log(opt)
    if ( key === "colors" ) {
      opt.map( color => gui.addColor(object, color) );
    } else {
      let component = gui.add(object, key);
      opt.min && component.min(opt.min);
      opt.max && component.max(opt.max);
      opt.step && component.step(opt.step);
    }
  }
  return gui;
  // return new dat.GUI()
  //   .add(args.object,'radius', 10, max).step(10);
}

export default SettingsPanel;
