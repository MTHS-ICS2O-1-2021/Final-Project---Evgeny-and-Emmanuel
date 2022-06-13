/* global Phaser */

// Copyright (c) 2022  Emmanuel & Evgeny All rights reserved

// Created by: Emmanuel & Evgeny
// Created on: June 2022
// This is the Splash scene


class GameScene extends Phaser.Scene {
  /**
   * constructor program
   */
  constructor() {
    super({ key: "gameScene" })
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
    console.log("Game Scene")
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

export default GameScene
