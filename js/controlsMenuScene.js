/* global Phaser */

// Copyright (c) 2022  Emmanuel & Evgeny All rights reserved

// Created by: Emmanuel & Evgeny
// Created on: June 2022
// This is the Splash scene

/**
 * Menu scene
 */
class ControlsMenuScene extends Phaser.Scene {
  /**
   * constructor program
   */
  constructor() {
    super({ key: "controlsMenuScene" })

    this.menuSceneBackgroundImage = null
    this.backButton = null
    this.menuSceneText = null
  }

  /**
   * init program
   */
  init(data) {
    this.cameras.main.setBackgroundColor("#101E4A")
  }

  /**
   * preload program
   */
  preload() {
    console.log("Controls Menu Scene")
    this.load.image(
      "secondMenuSceneBackground",
      "./assets/secondMenuSceneBackground.png"
    )
    this.load.image("backButton", "./assets/backButton.png")
    this.load.image("mouseButton", "./assets/mouse.png")
    this.load.image("spaceButton", "./assets/spaceButton.png")
    this.load.image("arrowsButton", "./assets/arrowsButtons.png")
    this.load.image("wasdButton", "./assets/wasdButtons.png")
  }

  /**
   * create program
   */
  create(data) {
    this.secondMenuSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "secondMenuSceneBackground"
    )
    this.secondMenuSceneBackgroundImage.x = 1920 / 2
    this.secondMenuSceneBackgroundImage.y = 1080 / 2

    this.backButton = this.add.sprite(1920 / 2 + 750, 1080 / 2 + 400, "backButton")
    this.backButton.setInteractive({ useHandCursor: true })
    this.backButton.on("pointerdown", () => this.clickBackButton())
    
    this.mouseButton = this.add.sprite(1920 / 2, 1080 / 2 + 400, "mouseButton")
    
    this.spaceButton = this.add.sprite(1920 / 2, 1080 / 2 + 400, "spaceButton")
    
    this.arrowsButton = this.add.sprite(1920 / 2, 1080 / 2 + 400, "arrowsButton")
    
    this.wasdButton = this.add.sprite(1920 / 2, 1080 / 2 + 400, "wasdButton")
  }

  /**
   * update program
   */
  update(time, delta) {}

  /**
   * clickbutton program
   */
  clickBackButton() {
    this.scene.start("secondMenuScene")
  }
}

export default ControlsMenuScene
