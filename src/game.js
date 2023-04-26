import Phaser from "phaser";

let player;
let pdx, pdy, pa;
const mapX=8, mapY=8, mapS=64;
const map = [
  1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 1, 0, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1
]

function drawMap(scene, map, mapX, mapY, mapS) {
  const graphics = scene.add.graphics();
  graphics.fillStyle(0xFFFFFF, 1); // Fill color and alpha
  graphics.lineStyle(1, 0x000000, 1); // Line width, color, and alpha
  for (let i = 0; i < map.length; i++) {
    const x = (i % mapX) * mapS;
    const y = Math.floor(i / mapX) * mapS;
    graphics.strokeRect(x, y, mapS, mapS);
    if (map[i] === 1) {
      graphics.fillRect(x, y, mapS, mapS);
    }
  }
}



function drawPlayer(scene, xPos, yPos, size) {
  const graphics = scene.add.graphics();
  graphics.fillStyle(0xFFFF00, 1); // Fill color and alpha
  player = graphics.fillRect(xPos, yPos, size, size); // x, y, width, height
}

function playerMovement(cursors) {
  if (cursors.up.isDown) {
    player.y -= 5; // move up
  } else if (cursors.left.isDown) {
    player.x -= 5; // move left
  } else if (cursors.down.isDown) {
    player.y += 5; // move down
  } else if (cursors.right.isDown) {
    player.x += 5; // move right
  }
}

class MainScene {
  preload() {}

  create() {
    drawMap(this, map, mapX, mapY, mapS);
    drawPlayer(this, 300, 300, 16, 32);
  }

  update() {
    const cursors = this.input.keyboard.createCursorKeys();
    playerMovement(cursors);
  }
}

let config = {
  width: 1024,
  height: 512,
  backgroundColor: "#4D4D4D",
  scene: MainScene,
  physics: { default: "arcade" },
  parent: "game",
};

new Phaser.Game(config);
