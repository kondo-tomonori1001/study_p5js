import p5 from 'p5';

export const dotInstall = () => {
  const sketch = (p) => {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      p.noStroke();
      p.fill(255);
      p.colorMode(p.HSB, 360,100,100,100);
    }
    p.draw = () => {
      p.background(0);
      const step = 20;
      
      for(let y = 0; y <= p.height; y += step){
        for(let x = 0; x <= p.width; x += step){
          const d = p.dist(x,y,p.mouseX,p.mouseY);
          const size = p.map(p.sin(d * 0.05),-1,1,0,10);
          p.fill(p.map(p.sin(d * 0.05),-1,1,60,300),100,100);
          p.ellipse(x, y, size, size)
        }
      }
    }
  }
  new p5(sketch);
}
