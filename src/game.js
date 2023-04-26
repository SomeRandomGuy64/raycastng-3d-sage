import Phaser from "phaser";
import Boundary from "./boundary";

class MainScene {
  preload() {}

  create() {
    let wall = new Boundary(this, 10, 10, 100, 100);
    wall.create();
  }

  update() {}
}

let config = {
  width: 700,
  height: 400,
  backgroundColor: "#3498DB",
  scene: MainScene,
  physics: { default: "arcade" },
  parent: "game",
};

new Phaser.Game(config);
