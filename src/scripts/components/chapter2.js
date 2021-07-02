import p5 from 'p5';

export const chapter2 = () => {
  const sketch = (p) => {

    var centX;
    var centY;
    let diam = 10;


    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      p.frameRate(24);

      centX = p.width / 2;
      centY = p.height / 2;

      p.smooth();
      p.background(180);
      // 線の色
      p.stroke(0);
      // 線の太さ
      p.strokeWeight(1);
      p.noFill();
      p.fill(255, 10);

    }
    p.draw = () => {
        if( diam <= 400 ){
          console.log(diam);
          // p.background(180);
          p.ellipse(centX, centY, diam, diam)
          diam += 10;
        }
      }
    }
    new p5(sketch);
}