export default function sketch(p) {
  let a = 1.4;
  let b = 1.3;
  let c = 0.8;
  let d = 1.4;

  let x = 1;
  let y = 1;

  p.setup = function() {
    p.createCanvas(327, 327);
    p.background(0);
    p.stroke(255, 255, 255, 30);
    p.frameRate(10);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = props => {
    console.log(props);
    a = props.sliderAlpha;
    b = props.sliderBeta;
    c = props.sliderGamma;
    d = props.sliderDelta;
    p.background(0);
    p.draw();
  };

  p.draw = function() {
    for (let i = 0; i < 1000; i++) {
      let oldX = x;
      let oldY = y;

      x = Math.sin(a * oldY) - Math.cos(b * oldX);
      y = Math.sin(c * oldX) - Math.cos(d * oldY);

      let scaledX = p.map(x, -3, 3, 0, p.width);
      let scaledY = p.map(y, -3, 3, 0, p.height);

      p.point(scaledX, scaledY);
    }
  };
}
