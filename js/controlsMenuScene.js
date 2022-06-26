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
    this.mouseButton = null
    this.spaceButton = null
    this.arrowsButton = null
    this.wasdButton = null
    this.toMoveText = null
    this.jumpOrShootText = null
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
    this.load.audio("spaceMusic", "./assets/spaceMusic.mp3")
    this.load.image("backButton", "./assets/backButton.png")
    this.load.image("spaceButton", "./assets/spaceButton.png")
    this.load.image("arrowsButton", "./assets/arrowsButtons.png")
    this.load.image("wasdButton", "./assets/wasdButtons.png")
    this.load.image("toMoveText", "./assets/toMoveText.png")
    this.load.image("jumpOrShootText", "./assets/jumpOrShootText.png")
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

    this.backButton = this.add
      .sprite(1920 / 2 + 750, 1080 / 2 + 400, "backButton")
      .setScale(1.2)
    this.backButton.setInteractive({ useHandCursor: true })
    this.backButton.on("pointerdown", () => this.clickBackButton())

    this.toMoveText = this.add.sprite(
      1920 / 2 - 450,
      1080 / 2 - 200,
      "toMoveText"
    )

    this.jumpOrShootText = this.add.sprite(
      1920 / 2 + 450,
      1080 / 2 - 200,
      "jumpOrShootText"
    )

    this.spaceButton = this.add
      .sprite(1920 / 2 + 475, 1080 / 2 + 50, "spaceButton")
      .setScale(3)
    this.spaceButton.setInteractive({ useHandCursor: true })
    this.spaceButton.on("pointerdown", () => this.clickSpaceButton())

    this.arrowsButton = this.add
      .sprite(1920 / 2 - 200, 1080 / 2, "arrowsButton")
      .setScale(3)

    this.wasdButton = this.add
      .sprite(1920 / 2 - 700, 1080 / 2, "wasdButton")
      .setScale(3)

    //background music
    this.spaceMusic = this.sound.add("spaceMusic", {
      volume: 0.2,
      loop: true,
    })
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
  /**
   * oopsie doopsie protocol
   */
  clickSpaceButton() {
    this.game.sound.stopAll()
    this.spaceMusic.play()
  }
}

export default ControlsMenuScene
