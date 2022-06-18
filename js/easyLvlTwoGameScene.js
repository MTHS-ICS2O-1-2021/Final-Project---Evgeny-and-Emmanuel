/* global Phaser */

// Copyright (c) 2022  Emmanuel & Evgeny All rights reserved

// Created by: Emmanuel & Evgeny
// Created on: June 2022
// This is the Splash scene

/**
 * Easy Level One Game Scene
 */
class EasyLvlTwoGameScene extends Phaser.Scene {
  /**
   * constructor program
   */
  constructor() {
    super({ key: "easyLvlTwoGameScene" })

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
    console.log("Easy Mode Level Two Game Scene")
    this.load.audio("lvlOneMusic", "./assets/lvlOneMusic.mp3")
    this.load.image("levelTwoBackground", "./assets/levelTwoBackground.png")
    this.load.image("doge", "./assets/dogeLvlOne.png")
    this.load.image("logLvlOne", "./assets/logLvlOne.png")
  }

  /**
   * create program
   */
  create(data) {
    this.game.sound.stopAll()
    this.levelTwoBackground = this.add.tileSprite(
      1920,
      540,
      3840,
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
    this.lvlOneMusic = this.sound.add("lvlOneMusic", {
      volume: 0.2,   
      loop: true,
    })
    this.lvlOneMusic.play()
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

export default EasyLvlTwoGameScene