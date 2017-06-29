import p5 from 'p5'
export function DatHSVtoHSB (hsv) {
  return p5.color(p5.HSB, hsv.h, hsv.s, hsv.v);
}

export function getHSB(hsv) {
  return DatHSVtoHSB(hsv);
}
