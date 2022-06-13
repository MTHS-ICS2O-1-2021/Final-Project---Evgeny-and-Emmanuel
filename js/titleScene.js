/* global Phaser */

// Copyright (c) 2022  Emmanuel & Evgeny All rights reserved

// Created by: Emmanuel & Evgeny
// Created on: June 2022
// This is the Phaser3 configuration file

/**
 * Title scene
 */
class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "titleScene" })

    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = {
      font: "100px Pixelo",
      fill: "#080A29",
      align: "center"
    }
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#101E4A")
  }

  preload() {
    console.log("Title Scene")
    this.load.image("titleSceneBackground", "./assets/titleSceneImage.png")
  }

  create(data) {
    this.titleSceneBackgroundImage = this.add
      .sprite(0, 0, "titleSceneBackground")
      .setScale(2.15)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    this.titleSceneText = this.add
      .text(1920 / 2, (1080 / 2) - 50, "We Present", this.titleSceneTextStyle)
      .setOrigin(0.5)
  }

  update(time, delta) {
    if (time > 6000) {
      this.scene.switch("menuScene")
    }
  }
}

export default TitleScene
