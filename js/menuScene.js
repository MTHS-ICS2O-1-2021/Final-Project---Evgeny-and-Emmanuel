/* global Phaser */

// Copyright (c) 2022  Emmanuel & Evgeny All rights reserved

// Created by: Emmanuel & Evgeny
// Created on: June 2022
// This is the Splash scene

/**
 * Menu scene
 */
class MenuScene extends Phaser.Scene {
  /**
   * constructor program
   */
  constructor() {
    super({ key: "menuScene" })

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
    this.load.audio("mainMenuMusic", "./assets/mainMenuMusic.mp3")
    console.log("Menu Scene")
    this.load.image("menuSceneBackground", "./assets/menuSceneBackground.png")
    this.load.image("startButton", "./assets/playButton.png")
  }

  /**
   * create program
   */
  create(data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, "menuSceneBackground")
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, 1080 / 2 + 100, "startButton")
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on("pointerdown", () => this.clickButton())

//background music
    this.mainMenuMusic = this.sound.add('mainMenuMusic', {
volume: 0.2,
loop: true
  	})
  	this.mainMenuMusic.play()
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

export default MenuScene
