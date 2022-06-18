/* global Phaser */

// Copyright (c) 2022  Emmanuel & Evgeny All rights reserved

// Created by: Emmanuel & Evgeny
// Created on: June 2022
// This is the Splash scene

/**
 * Hard Level Two Game Scene
 */
class HardLvlTwoGameScene extends Phaser.Scene {
  /**
   * constructor program
   */
  constructor() {
    super({ key: "hardLvlTwoGameScene" })

    this.levelTwoBackgroundImage = null
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
    console.log("hard Mode Level Two Game Scene")
    this.load.audio("lvlTwoMusic", "./assets/lvlTwoMusic.mp3")
    this.load.image("levelTwoBackground", "./assets/levelTwoBackground.png")
    this.load.image("doge", "./assets/dogeLvlOne.png")
  }

  /**
   * create program
   */
  create(data) {
    this.game.sound.stopAll()
    this.levelTwoBackground = this.add.tileSprite(
      960,
      540,
      1920,
      1080,
      "levelTwoBackground"
    )
    //main Character
    this.doge = this.physics.add.sprite(1920 / 2 - 450, 1080 / 2, "doge")
    this.doge.body.bounce.y = 0.5
    this.doge.body.gravity.y = 800
    this.doge.body.collideWorldBounds
    this.doge.body.collideWorldBounds = true

    //background music
    this.lvlTwoMusic = this.sound.add("lvlTwoMusic", {
      volume: 0.2,
      loop: true,
    })
    this.lvlTwoMusic.play()
  }

  /**
   * update program
   */
  update(time, delta) {
    const keySpaceObj = this.input.keyboard.addKey("SPACE")
    this.levelTwoBackground.tilePositionX += 3

    if (keySpaceObj.isDown === true) {
      this.doge.body.velocity.y = -300
    }
  }
}

export default HardLvlTwoGameScene
