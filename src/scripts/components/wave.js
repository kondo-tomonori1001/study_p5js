import p5 from 'p5';

export const wave = () => {
  const sketch = (p) => {

    let offset = 0;
    
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      // p.angleMode(p.DEGREES);
    }
    p.draw = () => {
      
      p.background("#131821");

      p.stroke("#fff");
      p.noFill();
      // 画面中央を原点に
      p.translate(0, p.height / 2);

      p.beginShape();
      for(let x = 0; x < p.windowWidth; x ++){
        // const rad = Math.PI * i / 180;
        const angle = offset + x * 0.01;
        const y = p.map(p.sin(angle), -1, 1, 150, 250);
        p.vertex(x, y);
      }
      p.endShape();
      offset += 0.05;

      // p.beginShape();
      // // for(let i = 0; i < p.windowWidth; i += 10){
      //   const rad = Math.PI * p.frameCount / 180 ;
      //   const x = p.frameCount;
      //   console.log(x);
      //   const y = p.map(p.sin(rad) , -1, 1, 150, 250);
      //   p.vertex(x, y);
      // // }
      // p.endShape();



      }
    }
    new p5(sketch);
  }
