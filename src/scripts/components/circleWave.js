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

      for(let i = 0; i < 20; i ++){

        // 色ランダム
        const r = p.map(p.sin(p.frameCount),-1,1,0,255);
        const g = p.map(i,0,30,0,255);
        const b = p.map(p.cos(p.frameCount),-1,1,200,255);

        p.stroke(0,0,b);

        // p.rotate(p.frameCount / 100);

        p.beginShape();
        for(let j = 0; j < 360; j += 40){
          const rad = i * 20;
          const x = rad * p.cos(j);
          const y = rad * p.sin(j);
          const z = p.sin(p.frameCount * 2 + i * 5) * 200;

          p.vertex(x, y, z)
        }
        p.endShape(p.CLOSE)
      }
    }
  }
  new p5(sketch);
}