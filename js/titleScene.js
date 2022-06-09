/* global Phaser */

// Copyright (c) 2022  Emmanuel & Evgeny All rights reserved

// Created by: Emmanuel & Evgeny
// Created on: June 2022
// This is the Phaser3 configuration file

//*Title scene*/
class TitleScene extends Phaser.Scene {
//*constructor program*/
  constructor() {
    super({ key: "titleScene" })
  }

//*init program*/
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

//*preload program*/
  preload() {
    console.log("Title Scene")
  }

//*create program*/
  create(data) {}

//*update program*/
  update(time, delta) {}
}

export default TitleScene
