/* global Phaser */

// Copyright (c) 2022  Emmanuel & Evgeny All rights reserved

// Created by: Emmanuel & Evgeny
// Created on: June 2022
// This is the Splash scene

class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "menuScene" })

    this.menuSceneBackgroundImage = null
    this.startButton = null
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#101E4A")
  }

  preload() {
    console.log("Menu Scene")
    this.load.image("menuSceneBackground", "./assets/menuSceneBackground.png")
    this.load.image("startButton", "./assets/playButton.png")
  }

  create(data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, "menuSceneBackground")
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, 1080 / 2 + 100, "startButton")
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on("pointerdown", () => this.clickButton())
  }

  update(time, delta) {}

  clickButton() {
    this.scene.start("gameScene")
  }
}

export default MenuScene
