/* global Phaser */

// Copyright (c) 2022  Emmanuel & Evgeny All rights reserved

// Created by: Emmanuel & Evgeny
// Created on: June 2022
// This is the Splash scene

/**
 * Game scene
 */
class EasyLvlOneGameScene extends Phaser.Scene {
  /**
   * constructor program
   */
  constructor() {
    super({ key: "easyLvlOneGameScene" })

    this.levelOneBackgroundImage = null
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
    console.log("Easy Mode Level One Game Scene")
    this.load.audio("lvlOneMusic", "./assets/lvlOneMusic.mp3")
    this.load.image("levelOneBackground", "./assets/levelOneBackground.png")
  }

  /**
   * create program
   */
  create(data) {
    this.game.sound.stopAll()
    this.levelOneBackground = this.add.sprite(0, 0, "levelOneBackground")
    this.levelOneBackground.x = 1920 / 2
    this.levelOneBackground.y = 1080 / 2

    //background music
    this.lvlOneMusic = this.sound.add("lvlOneMusic", {
      volume: 0.2,
      loop: true,
    })
    this.lvlOneMusic.play()
  }

  /**
   * update program
   */
  update(time, delta) {}
}

export default EasyLvlOneGameScene
