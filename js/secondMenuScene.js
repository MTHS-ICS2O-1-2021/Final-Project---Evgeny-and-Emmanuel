``/* global Phaser */
// Copyright (c) 2022  Emmanuel & Evgeny All rights reserved

// Created by: Emmanuel & Evgeny
// Created on: June 2022
// This is the Splash scene

/**
 * secondMenu scene
 */
class secondMenuScene extends Phaser.Scene {
  /**
   * constructor program
   */
  constructor() {
    super({ key: "secondMenuScene" })

    this.secondMenuSceneBackgroundImage = null
    this.easyButton = null
    this.hardButton = null
    this.controlsButton = null
    this.backButton = null
  }

  /**
   * init program
   */
  init(data) {
    this.cameras.main.setBackgroundColor("#37a156")
  }

  /**
   * preload program
   */
  preload() {
    console.log("Second Menu Scene")
    this.load.image(
      "secondMenuSceneBackground",
      "./assets/secondMenuSceneBackground.png"
    )
    this.load.image("easyButton", "./assets/easyButton.png")
    this.load.image("hardButton", "./assets/hardButton.png")
    this.load.image("controlsButton", "./assets/controlsButton.png")
    this.load.image("backButton", "./assets/backButton.png")
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

    this.easyButton = this.add.sprite(1920 / 2, 1080 / 2 - 200, "easyButton")
    this.easyButton.setInteractive({ useHandCursor: true })
    this.easyButton.on("pointerdown", () => this.clickEasyButton())

    this.hardButton = this.add.sprite(1920 / 2, 1080 / 2, "hardButton")
    this.hardButton.setInteractive({ useHandCursor: true })
    this.hardButton.on("pointerdown", () => this.clickHardButton())

    this.controlsButton = this.add.sprite(
      1920 / 2,
      1080 / 2 + 200,
      "controlsButton"
    )
    this.controlsButton.setInteractive({ useHandCursor: true })
    this.controlsButton.on("pointerdown", () => this.clickControlsButton())

    this.backButton = this.add
      .sprite(1920 / 2 + 750, 1080 / 2 + 400, "backButton")
      .setScale(1.2)
    this.backButton.setInteractive({ useHandCursor: true })
    this.backButton.on("pointerdown", () => this.clickBackButton())
  }

  /**
   * update program
   */
  update(time, delta) {}

  /**
   * go to easy game scene
   */
  clickEasyButton() {
    this.scene.start("easyLvlOneGameScene")
  }
  /**
   * go to hard game scene
   */
  clickHardButton() {
    this.scene.start("hardLvlOneGameScene")
  }
  /**
   * go to controls scene
   */
  clickControlsButton() {
    this.scene.start("controlsMenuScene")
  }
  /**
   * go back
   */
  clickBackButton() {
    this.scene.start("menuScene")
  }
}

export default secondMenuScene
