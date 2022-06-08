/* global Phaser */

// Copyright (c) 2022  Emmanuel & Evgeny All rights reserved

// Created by: Emmanuel & Evgeny
// Created on: June 2022
// This is the Phaser3 configuration file


class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "titleScene" })
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  preload() {
    console.log("Title Scene")
  }

  create(data) {
  }

  update(time, delta) {
  }
}

export default TitleScene