/* global Phaser */

// Copyright (c) 2022  Emmanuel & Evgeny All rights reserved

// Created by: Emmanuel & Evgeny
// Created on: June 2022
// This is the Splash scene

//*Splash scene*/
class SplashScene extends Phaser.Scene {
  //*constructor program*/
  constructor() {
    super({ key: "splashScene" })
  }

  //*init program*/
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  //*preload program*/
  preload() {
    console.log("Splash Scene")
    this.load.image("splashSceneBackground", "./assets/splashSceneImage.png")
  }

  //*create program*/
  create(data) {
    this.splashSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "splashSceneBackground"
    )
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }

  //*update program*/
  update(time, delta) {
    if (time > 3000) {
      this.scene.switch("titleScene")
    }
  }
}

export default SplashScene
