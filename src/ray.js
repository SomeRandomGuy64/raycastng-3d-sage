import Phaser from "phaser";

class Ray {
  constructor(scene, x, y) {
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.dirXAddLength = 10;

    this.pos = new Phaser.Math.Vector2(x, y);
    this.dir = new Phaser.Math.Vector2(x + this.dirXAddLength, y);
  }

  create() {
    const line = new Phaser.Geom.Line(
      this.pos.x,
      this.pos.y,
      this.dir.x,
      this.dir.y
    );

    const graphics = this.scene.add.graphics({
      lineStyle: { width: 2, color: 0xffffff },
    });

    graphics.strokeLineShape(line);
  }
}

export default Ray;