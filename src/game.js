import Phaser from "phaser";
import Boundary from "./boundary";
import Ray from "./ray";

class MainScene {
  preload() {}

  create() {
    let wall = new Boundary(this, 600, 100, 600, 300);
    wall.create();

    let ray = new Ray(this, 100, 101);
    ray.create();
  }

  update() {}
}

let config = {
  width: 700,
  height: 400,
  backgroundColor: "#000000",
  scene: MainScene,
  physics: { default: "arcade" },
  parent: "game",
};

new Phaser.Game(config);
