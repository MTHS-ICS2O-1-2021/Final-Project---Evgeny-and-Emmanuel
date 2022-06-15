/* global Phaser */
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
    this.startButton = null
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
    this.easyButton.on("pointerdown", () => this.clickButton())

    this.hardButton = this.add.sprite(1920 / 2, 1080 / 2, "hardButton")
    this.hardButton.setInteractive({ useHandCursor: true })
    this.hardButton.on("pointerdown", () => this.clickButton())

    this.controlsButton = this.add.sprite(
      1920 / 2,
      1080 / 2 + 200,
      "controlsButton"
    )
    this.controlsButton.setInteractive({ useHandCursor: true })
    this.controlsButton.on("pointerdown", () => this.clickButton())
  }

  /**
   * update program
   */
  update(time, delta) {}

  /**
   * go to easy game scene
   */
  clickButton(easyButton) {
    this.scene.start("easyLvlOneGameScene")
  }
  /**
   * go to hard game scene
   */
  clickButton(hardButton) {
    this.scene.start("hardLvlOneGameScene")
  }
  /**
   * go to controls scene
   */
  clickButton(controlsButton) {
    this.scene.start("controlsMenuScene")
  }
}

export default secondMenuScene
