/* global Phaser */

// Copyright (c) 2022  Emmanuel & Evgeny All rights reserved

// Created by: Emmanuel & Evgeny
// Created on: June 2022
// This is the Splash scene


class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "splashScene" })
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  preload() {
    console.log("Splash Scene")
  }

  create(data) {
  }

  update(time, delta) {
  }
}

export default SplashScene