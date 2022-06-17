/* global Phaser */

// Copyright (c) 2022  Emmanuel & Evgeny All rights reserved

// Created by: Emmanuel & Evgeny
// Created on: June 2022
// This is the Splash scene

/**
 * Easy Level One Game Scene
 */

class EasyLvlOneGameScene extends Phaser.Scene {

  // create a pixel to fix loop
  createAPixel () {
    const aPixel = this.physics.add.sprite(2020, 540, "aPixel")
    //hard difficulty change!
    aPixel.body.velocity.x = -400
    this.aPixelGroup.add(aPixel)
  }

  // create a verticalRock
  createRocks () {
    const verticalRockYLocation = Math.floor(Math.random() * 500 - 200) + 1 //spawns the rock between 1 and 1921 pixel
    const aVerticalRock = this.physics.add.sprite(2020, verticalRockYLocation, "verticalRock")
    const rockYLocation = Math.floor(verticalRockYLocation + 1000) + 1 //spawns the rock between 1 and 1921 pixel
    const aRock = this.physics.add.sprite(2020, rockYLocation, "rock").setImmovable()
    //hard difficulty change!
    aVerticalRock.body.velocity.x = -400
    this.verticalRockGroup.add(aVerticalRock)
    aRock.body.velocity.x = -400
    this.rockGroup.add(aRock)
  }

  /**
   * constructor program
   */
  constructor() {
    super({ key: "easyLvlOneGameScene" })

    this.levelOneBackgroundImage = null
    this.startText = null
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
    this.load.image("doge", "./assets/dogeLvlOne.png")
    this.load.image("startText", "./assets/startText.png")
    this.load.image("verticalRock", "./assets/verticalRock.png")
    this.load.image("rock", "./assets/rock.png")
    this.load.image("invisibleWall", "./assets/invisibleWall.png")
    this.load.image("aPixel", "./assets/aPixel.png")
    this.load.image("exitButton", "./assets/exitButton.png")
    this.load.image("retryButton", "./assets/retryButton.png")
    this.load.image("easyModeDeath", "./assets/easyModeDeath.png")
    this.load.image("easyDeathTextBlack", "./assets/easyDeathTextBlack.png")
  }

  /**
   * create program
   */
  create(data) {
    this.physics.pause()
    this.game.sound.stopAll()
    this.levelOneBackground = this.add.tileSprite(
      1920,
      540,
      3840,
      1080,
      "levelOneBackground"
    )
     //create doge
    this.doge = this.physics.add.sprite(1920 / 2 - 450, 1080 / 2, "doge")
    this.doge.body.bounce.y = 0.4
    this.doge.body.gravity.y = 800
    this.doge.body.collideWorldBounds = true

    this.invisibleWall = this.physics.add.sprite(1920 / 2 + 300, 1080 / 2, "invisibleWall").setImmovable()

    this.startText = this.add.sprite(
      1920 / 2,
      1080 / 2,
      "startText"
    ).setScale(2)

    //create a group for the verticalrock
    this.verticalRockGroup = this.add.group()
    this.rockGroup = this.add.group()
    this.createRocks()
    //create a group for the verticalrock
    this.aPixelGroup = this.add.group()
    this.createAPixel()
    
    //colision between invisble wall and rocks
    this.physics.add.collider(this.invisibleWall, this.aPixelGroup, function (invisibleWallCollide, aPixelCollide){
      aPixelCollide.destroy()
      this.createAPixel ()
      this.createRocks ()
    }.bind(this))

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
    this.levelOneBackground.tilePositionX += 3

    if (keySpaceObj.isDown === true) {
      this.doge.body.velocity.y = -300
      this.physics.resume()
      this.startText.destroy()
    }

    //collisions between doge and the rock
    this.physics.add.collider(this.doge, this.rockGroup, function (dogeCollide, rockCollide){
      this.physics.pause()
      dogeCollide.destroy()
      this.easyModeDeath = this.add.sprite(1920 / 2, 1080 / 2 + 200, "easyModeDeath")
      this.easyDeathTextBlack = this.add.sprite(1920 / 2, 1080 / 2 + 200, "easyDeathTextBlack")
      this.retryButton = this.add.sprite(1920 / 2, 1080 / 2 + 200, "retryButton")
      this.retryButton.setInteractive({ useHandCursor: true })
      this.retryButton.on("pointerdown", () => this.scene.start("secondMenuScene"))
      this.exitButton = this.add.sprite(1920 / 2, 1080 / 2 - 200, "exitButton")
      this.exitButton.setInteractive({ useHandCursor: true })
      this.exitButton.on("pointerdown", () => this.scene.start("easyLvlOneGameScene"))
      this.lvlOneMusic.stop()
    }.bind(this))
    //collisions between doge and the vertical rocks
    this.physics.add.collider(this.doge, this.verticalRockGroup, function (dogeCollide, verticalRockCollide){
      this.physics.pause()
      dogeCollide.destroy()
      this.easyModeDeath = this.add.sprite(1920 / 2, 1080 / 2 + 200, "easyModeDeath")
      this.easyDeathTextBlack = this.add.sprite(1920 / 2, 1080 / 2 + 200, "easyDeathTextBlack")
      this.retryButton = this.add.sprite(1920 / 2, 1080 / 2 + 200, "retryButton")
      this.retryButton.setInteractive({ useHandCursor: true })
      this.retryButton.on("pointerdown", () => this.scene.start("secondMenuScene"))
      this.exitButton = this.add.sprite(1920 / 2, 1080 / 2 - 200, "exitButton")
      this.exitButton.setInteractive({ useHandCursor: true })
      this.exitButton.on("pointerdown", () => this.scene.start("easyLvlOneGameScene"))
      this.lvlOneMusic.stop()
    }.bind(this))
  }
}

export default EasyLvlOneGameScene
