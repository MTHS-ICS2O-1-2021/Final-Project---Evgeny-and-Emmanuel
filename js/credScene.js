/* global Phaser */

// Copyright (c) 2022  Emmanuel & Evgeny All rights reserved

// Created by: Emmanuel & Evgeny
// Created on: June 2022
// This is the Splash scene

/**
 * Cred Scene
 */
class credScene extends Phaser.Scene {
  /**
   * constructor program
   */
  constructor() {
    super({ key: "credScene" })

    this.levelOneBackgroundImage = null
    this.startText = null
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
    console.log("Cred Scene")
    this.load.audio("credSceneMusic", "./assets/credSceneMusic.mp3")
    this.load.image("credSceneBackground", "./assets/credSceneBackground.png")
    this.load.image("credSceneImage", "./assets/credSceneImage.png")
    this.load.image("continueButton", "./assets/continueButton.png")
    this.load.image("bigFloppa", "./assets/bigFloppa.png")
    this.load.image("fullDoge", "./assets/fullDoge.png")
  }

  /**
   * create program
   */
  create(data) {
    this.game.sound.stopAll()
    this.credSceneBackground = this.add.tileSprite(
      1920,
      540,
      3840,
      1080,
      "credSceneBackground"
    )
    this.credSceneImage = this.add
      .sprite(960, 800, "credSceneImage")
      .setScale(0.15)
    this.bigFloppa = this.add.sprite(1720, 349.5, "bigFloppa")
    this.fullDoge = this.add.sprite(220, 349.5, "fullDoge")

    this.continueButton = this.add.sprite(
      2800 / 2,
      950 / 2 + 500,
      "continueButton"
    )
    this.continueButton.setInteractive({ useHandCursor: true })
    this.continueButton.on("pointerdown", () => this.scene.start("menuScene"))

    //background music
    this.credSceneMusic = this.sound.add("credSceneMusic", {
      volume: 0.2,
      loop: true,
    })
    this.credSceneMusic.play()
  }

  /**
   * update program
   */
  update(time, delta) {}
}

export default credScene
