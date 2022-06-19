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
  }

  /**
   * init program
   */
  init(data) {
    this.cameras.main.setBackgroundColor("#101E4A")

    this.levelThreeBackground = null
  }

  /**
   * preload program
   */
  preload() {
    console.log("Easy Mode Level Three Game Scene")
    this.load.audio("lvlThreeMusic", "./assets/lvlThreeMusic.mp3")
    this.load.image("levelThreeBackground", "./assets/levelThreeBackground.png")
    this.load.image("bullet", "./assets/bullet.png")
    this.load.image("doge", "./assets/dogeLvlTwo.png")
  }

  /**
   * create program
   */
  create(data) {
    this.game.sound.stopAll()
    this.levelThreeBackground = this.add.sprite(0, 0, "levelThreeBackground")
    this.levelThreeBackground.x = 1920 / 2
    this.levelThreeBackground.y = 1080 / 2
    //main Character
    this.doge = this.physics.add.sprite(1920 / 2 - 750, 1080 / 2, "doge")
    this.doge.body.collideWorldBounds
    this.doge.body.collideWorldBounds = true

    //create a group for the bullets
    this.bulletGroup = this.physics.add.group()

    //background music
    this.lvlThreeMusic = this.sound.add("lvlThreeMusic", {
      volume: 0.4,
      loop: false,
    })
    this.lvlThreeMusic.play()
  }

  /**
   * update program
   */
  update(time, delta) {
    const keySpace = this.input.keyboard.addKey("SPACE")
    const keyForward = this.input.keyboard.addKey("W")
    const keyLeft = this.input.keyboard.addKey("A")
    const keyBackward = this.input.keyboard.addKey("S")
    const keyRight = this.input.keyboard.addKey("D")
    const keyForwardArrow = this.input.keyboard.addKey("UP")
    const keyLeftArrow = this.input.keyboard.addKey("LEFT")
    const keyBackwardArrow = this.input.keyboard.addKey("DOWN")
    const keyRightArrow = this.input.keyboard.addKey("RIGHT")

    if (keyForward.isDown === true || keyForwardArrow.isDown === true) {
      this.doge.y -= 10
    }

    if (keyLeft.isDown === true || keyLeftArrow.isDown === true) {
      this.doge.x -= 10
    }

    if (keyBackward.isDown === true || keyBackwardArrow.isDown === true) {
      this.doge.y += 10
    }

    if (keyRight.isDown === true ||  keyRightArrow.isDown === true) {
      this.doge.x += 10
      if (this.doge.x > 960) {
        this.doge.x = 960
      }
    }
    if (keySpace.isDown === true) {
      if (this.fireBullet === false) {
        //fire bullet
        this.fireBullet = true
        const aNewBullet = this.physics.add.sprite(this.doge.x, this.doge.y, "bullet")
        this.bulletGroup.add(aNewBullet)
      }
    }

    if (keySpace.isUp === true) {
      this.fireBullet = false
    }

    this.bulletGroup.children.each(function (item) {
      item.x += 15
      if (item.x > 1920) {
        item.destroy()
        console.log("destroyed bullet")
      }
    })
  }
}

export default EasyLvlThreeGameScene
