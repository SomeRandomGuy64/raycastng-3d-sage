import Phaser from "phaser";

class MainScene {
  preload() {}

  create() {}

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
