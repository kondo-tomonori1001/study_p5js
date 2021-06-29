import p5 from 'p5';

export const circleWave = () => {

  const sketch = (p) => {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight,p.WEBGL);
      p.angleMode(p.DEGREES);
    }
    p.draw = () => {
      p.background("#131821");
      p.rotateX(60);
      p.noFill();
      p.stroke('#fff')

      for(let i = 0; i < 30; i ++){
        p.beginShape();
        for(let j = 0; j < 360; j += 10){
          const rad = i * 10;
          const x = rad * p.cos(j);
          const y = rad * p.sin(j);
          const z = p.sin(p.frameCount * 2 + i * 10) * 50;

          p.vertex(x, y, z)
        }
        p.endShape(p.CLOSE)
      }
    }
  }
  new p5(sketch);
}