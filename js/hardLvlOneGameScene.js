/* global Phaser */

// Copyright (c) 2022  Emmanuel & Evgeny All rights reserved

// Created by: Emmanuel & Evgeny
// Created on: June 2022
// This is the Splash scene

/**
 * Game scene
 */
class HardLvlOneGameScene extends Phaser.Scene {
  /**
   * constructor program
   */
  constructor() {
    super({ key: "hardLvlOneGameScene" })
  }

  /**
   * init program
   */
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  /**
   * preload program
   */
  preload() {
    console.log("Hard Mode Level One Game Scene")
  }

  /**
   * create program
   */
  create(data) {}

  /**
   * update program
   */
  update(time, delta) {}
}

export default HardLvlOneGameScene
