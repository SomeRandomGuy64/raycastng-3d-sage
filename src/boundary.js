import Phaser from "phaser";

class Boundary {
  constructor(scene, x1, y1, x2, y2) {
    this.scene = scene;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  create() {
    const line = new Phaser.Geom.Line(this.x1, this.y1, this.x2, this.y2);

    const graphics = this.scene.add.graphics({
      lineStyle: { width: 2, color: 0xffffff },
    });

    graphics.strokeLineShape(line);
  }
}

export default Boundary;
