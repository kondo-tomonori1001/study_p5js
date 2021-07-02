import p5 from 'p5';

export const chapter3 = () => {
  const sketch = (p) => {

    var centX;
    var centY;
    let step = 10;

    let lastX = -999;
    let lastY = -999;
    let y = 200;
    let yNoise = p.random(100);

    
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      for(let x = 20; x <= p.width - 20; x += step){
        // 乱数
        // y = p.random(100) + 300;
        // パリーンノイズ
        y = p.noise(yNoise)*100;
        if(lastX > -999){
          p.line(x,y,lastX,lastY);
        }
        lastX = x;
        lastY = y;
        yNoise += 0.1
      }
    }
    p.draw = () => {
      
    }
  }
    new p5(sketch);
}