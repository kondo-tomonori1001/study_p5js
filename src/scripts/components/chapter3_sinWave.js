import p5 from 'p5';

export const chapter3_sinWave = () => {
  const sketch = (p) => {

    let step = 1;

    let lastX = -999;
    let lastY = -999;
    let angle = 0;
    let y = 200;
    
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      for(let x = 20; x <= p.width - 20; x += step){
        // const rad = p.radians(p.noise(angle) * 200);
        const rad = p.radians(angle);
        // console.log(angle);
        y = p.sin(rad) * 50 + 300;
        if(lastX > -999){
          p.line(x,y,lastX,lastY);
        }
        lastX = x;
        lastY = y;
        angle += 5;
      }
    }
    p.draw = () => {
    }
  }
    new p5(sketch);
}