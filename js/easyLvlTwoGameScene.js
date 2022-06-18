/* global Phaser */

// Copyright (c) 2022  Emmanuel & Evgeny All rights reserved

// Created by: Emmanuel & Evgeny
// Created on: June 2022
// This is the Splash scene

/**
 * Easy Level Two Game Scene
 */
class EasyLvlTwoGameScene extends Phaser.Scene {
  /**
   * constructor program
   */
  constructor() {
    super({ key: "easyLvlTwoGameScene" })

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
    console.log("Easy Mode Level Two Game Scene")
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
      1920,
      540,
      3840,
      1080,
      "levelTwoBackground"
    )
     //main Character
    this.doge = this.physics.add.sprite(1920 / 2 - 450, 1080 / 2, "doge")
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
    const keyForwardObj = this.input.keyboard.addKey("W")
    const keyLeftObj = this.input.keyboard.addKey("A")
    const keyBackwardObj = this.input.keyboard.addKey("S")
    const keyRightObj = this.input.keyboard.addKey("D")
    this.levelTwoBackground.tilePositionX += 3

    if (keyForwardObj.isDown === true) {
      this.doge.y -= 6
    }
    
    if (keyLeftObj.isDown === true) {
      this.doge.x -= 6
    }
    
    if (keyBackwardObj.isDown === true) {
      this.doge.y += 6
    }
    
    if (keyRightObj.isDown === true) {
      this.doge.x += 6
      if (this.doge.x > 960) {
        this.doge.x = 960
      }
    }
  }
}

export default EasyLvlTwoGameScene