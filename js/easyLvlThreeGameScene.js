/* global Phaser */

// Copyright (c) 2022  Emmanuel & Evgeny All rights reserved

// Created by: Emmanuel & Evgeny
// Created on: June 2022
// This is the Splash scene

/**
 * Easy Level Three Game Scene
 */
class EasyLvlThreeGameScene extends Phaser.Scene {
  /**
   * constructor program
   */
  constructor() {
    super({ key: "easyLvlThreeGameScene" })

    this.levelThreeBackgroundImage = null
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
    console.log("Easy Mode Level Three Game Scene")
    this.load.audio("lvlThreeMusic", "./assets/lvlThreeMusic.mp3")
    this.load.image("levelThreeBackground", "./assets/levelTheeBackground.png")
    this.load.image("doge", "./assets/dogeLvlOne.png")
  }

  /**
   * create program
   */
  create(data) {
    this.game.sound.stopAll()
    this.levelThreeBackground = this.add.tileSprite(
      960,
      540,
      1920,
      1080,
      "levelThreeBackground"
    )
    //main Character
    this.doge = this.physics.add.sprite(1920 / 2 - 450, 1080 / 2, "doge")
    this.doge.body.bounce.y = 0.5
    this.doge.body.gravity.y = 800
    this.doge.body.collideWorldBounds
    this.doge.body.collideWorldBounds = true

    //background music
    this.lvlThreeMusic = this.sound.add("lvlThreeMusic", {
      volume: 0.2,
      loop: true,
    })
    this.lvlThreeMusic.play()
  }

  /**
   * update program
   */
  update(time, delta) {
    const keySpaceObj = this.input.keyboard.addKey("SPACE")
    this.levelThreeBackground.tilePositionX += 3

    if (keySpaceObj.isDown === true) {
      this.doge.body.velocity.y = -300
    }
  }
}

export default EasyLvlThreeGameScene
