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
    this.startButton = null
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
    this.load.image("secondMenuSceneBackground", "./assets/secondMenuSceneBackground.png")
  }

  /**
   * create program
   */
  create(data) {
    this.secondMenuSceneBackgroundImage = this.add.sprite(0, 0, "secondMenuSceneBackground")
    this.secondMenuSceneBackgroundImage.x = 1920 / 2
    this.secondMenuSceneBackgroundImage.y = 1080 / 2

  }

  /**
   * update program
   */
  update(time, delta) {}

  /**
   * clickbutton program
   */
  clickButton() {
    this.scene.start("secondMenuScene")
  }
}

export default ControlsMenuScene
