import p5 from 'p5';

export const noiseWave = () => {
  const sketch = (p) => {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
    }
    p.draw = () => {
      p.colorMode(p.HSB);
      p.background(0,0,0);
      p.noFill();
      
      const lineNum = 100;
      const segmentNum = 100;
      // const area = p.height / 3;

      
      for(let i = 0; i < lineNum; i++){
        const time = Date.now() / 5000;
        const coefficient = 50 + i;

        const h = Math.round(i / lineNum * 60) + 180; // 色相
        const s = 100; // 彩度
        const l = Math.round(i / lineNum * 75) + 25; // 明度

        p.beginShape();
        p.stroke(h,s,l);
        // === 単線 ===
        for(let j = 0; j < segmentNum; j ++){
          const x = j / ( segmentNum - 1) * p.width;
  
          // === sinカーブ ===
          // const radian = ( j / segmentNum ) * Math.PI * 3 + time;
          // const y = area * Math.sin(radian) + p.height / 2;
  
          const px = j / coefficient;
          const py = (i / 50 + time);
          const randomValue = p.noise(px,py);
          const y = randomValue * p.height;
  
          p.vertex(x, y)
        }
        p.endShape();
      }
    }
  }
  new p5(sketch);
}