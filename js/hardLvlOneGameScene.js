/* global Phaser */

// Copyright (c) 2022  Emmanuel & Evgeny All rights reserved

// Created by: Emmanuel & Evgeny
// Created on: June 2022
// This is the Splash scene

/**
 * Hard Level One Game Scene
 */
class HardLvlOneGameScene extends Phaser.Scene {
  /**
   * Create a pixel to fix loop
   */
  createAPixel() {
    const aPixel = this.physics.add.sprite(2020, 540, "aPixel")
    aPixel.body.velocity.x = -600
    this.aPixelGroup.add(aPixel)
  }

  /**
   * create a vertical rock
   */
  createRocks() {
    const verticalRockYLocation = Math.floor(Math.random() * 450 - 200) + 1 //spawns the rock between 1 and 1921 pixel
    const aVerticalRock = this.physics.add.sprite(
      2020,
      verticalRockYLocation,
      "verticalRock"
    )
    const rockYLocation = Math.floor(verticalRockYLocation + 1000) + 1 //spawns the rock between 1 and 1921 pixel
    const aRock = this.physics.add
      .sprite(2020, rockYLocation, "rock")
      .setImmovable()
    aVerticalRock.body.velocity.x = -600
    this.verticalRockGroup.add(aVerticalRock)
    aRock.body.velocity.x = -600
    this.rockGroup.add(aRock)
  }

  /**
   * create a plane upgrade
   */
  createAPlaneUpgrade() {
    const aPlaneUpgrade = this.physics.add
      .sprite(2020, 640, "upgradePlane")
      .setScale(0.5)
    aPlaneUpgrade.body.velocity.x = -25
    this.aPlaneUpgradeGroup.add(aPlaneUpgrade)
  }

  /**
   * constructor program
   */
  constructor() {
    super({ key: "hardLvlOneGameScene" })

    this.levelOneBackgroundImage = null
    this.startText = null

    this.hardLvlOneGameSceneText = null
    this.hardLvlOneGameSceneTextStyle = {
      font: "40px Pixelo",
      fill: "#b50214",
      align: "center",
    }
  }

  /**
   * init program
   */
  init(data) {
    this.cameras.main.setBackgroundColor("#4C9900")
  }

  /**
   * preload program
   */
  preload() {
    console.log("Hard Mode Level One Game Scene")
    this.load.audio("deathSound", "./assets/deathSound.mp3")
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
    this.load.image("hardModeDeath", "./assets/hardModeDeath.png")
    this.load.image("hardModeDeathText", "./assets/hardModeDeathText.png")
    this.load.image("upgradePlane", "./assets/upgradePlane.png")
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
    this.doge.body.gravity.y = 2500
    this.doge.setSize(150, 75)
    this.doge.body.collideWorldBounds = true

    this.invisibleWall = this.physics.add
      .sprite(1920 / 2 + 200, 1080 / 2, "invisibleWall")
      .setImmovable()
    this.secondInvisibleWall = this.physics.add
      .sprite(1920 / 2 - 2000, 1080 / 2, "invisibleWall")
      .setImmovable()

    this.startText = this.add
      .sprite(1920 / 2, 1080 / 2, "startText")
      .setScale(2)

    this.hardLvlOneGameSceneText = this.add.text(
      0,
      0,
      "Task: Find the screwdriver and wrench to repair your plane.",
      this.hardLvlOneGameSceneTextStyle
    )

    //create a group for rocks
    this.verticalRockGroup = this.add.group()
    this.rockGroup = this.add.group()
    this.createRocks()
    //create a group for a pixel
    this.aPixelGroup = this.add.group()
    this.createAPixel()
    //create a group for the a plane upgrade
    this.aPlaneUpgradeGroup = this.add.group()
    this.createAPlaneUpgrade()

    //colision between a plane upgrade wall and doge
    this.physics.add.collider(
      this.doge,
      this.aPlaneUpgradeGroup,
      function (dogeCollide, aPlaneUpgradeCollide) {
        this.scene.start("hardLvlTwoGameScene")
      }.bind(this)
    )

    //colision between invisble wall and rocks
    this.physics.add.collider(
      this.invisibleWall,
      this.aPixelGroup,
      function (invisibleWallCollide, aPixelCollide) {
        aPixelCollide.destroy()
        this.createAPixel()
        this.createRocks()
      }.bind(this)
    )

    //collisions between doge and the rock
    this.physics.add.collider(
      this.doge,
      this.rockGroup,
      function (dogeCollide, rockCollide) {
        this.physics.pause()
        dogeCollide.destroy()
        this.sound.play("deathSound")
        this.hardModeDeath = this.add.sprite(
          1920 / 2 + 225,
          1080 / 2 - 250,
          "hardModeDeath"
        )
        this.hardModeDeathText = this.add.sprite(
          1920 / 2 - 225,
          1080 / 2 - 250,
          "hardModeDeathText"
        )
        this.retryButton = this.add
          .sprite(1920 / 2 + 400, 1080 / 2 + 200, "retryButton")
          .setScale(2)
        this.retryButton.setInteractive({ useHandCursor: true })
        this.retryButton.on("pointerdown", () =>
          this.scene.start("hardLvlOneGameScene")
        )
        this.exitButton = this.add
          .sprite(1920 / 2 - 400, 1080 / 2 + 175, "exitButton")
          .setScale(1.5)
        this.exitButton.setInteractive({ useHandCursor: true })
        this.exitButton.on("pointerdown", () =>
          this.scene.start("secondMenuScene")
        )
        this.lvlOneMusic.stop()
      }.bind(this)
    )

    //collisions between doge and the vertical rocks
    this.physics.add.collider(
      this.doge,
      this.verticalRockGroup,
      function (dogeCollide, verticalRockCollide) {
        this.physics.pause()
        dogeCollide.destroy()
        this.sound.play("deathSound")
        this.hardModeDeath = this.add.sprite(
          1920 / 2 + 225,
          1080 / 2 - 250,
          "hardModeDeath"
        )
        this.hardModeDeathText = this.add.sprite(
          1920 / 2 - 225,
          1080 / 2 - 250,
          "hardModeDeathText"
        )
        this.retryButton = this.add
          .sprite(1920 / 2 + 400, 1080 / 2 + 200, "retryButton")
          .setScale(2)
        this.retryButton.setInteractive({ useHandCursor: true })
        this.retryButton.on("pointerdown", () =>
          this.scene.start("hardLvlOneGameScene")
        )
        this.exitButton = this.add
          .sprite(1920 / 2 - 400, 1080 / 2 + 175, "exitButton")
          .setScale(1.5)
        this.exitButton.setInteractive({ useHandCursor: true })
        this.exitButton.on("pointerdown", () =>
          this.scene.start("secondMenuScene")
        )
        this.lvlOneMusic.stop()
      }.bind(this)
    )

    //collisions between second invisible wall wall and the rock
    this.physics.add.collider(
      this.secondInvisibleWall,
      this.rockGroup,
      function (secondInvisibleWallCollide, rockCollide) {
        rockCollide.destroy()
        console.log("Destroyed rock")
      }.bind(this)
    )

    //collisions between invisible wall and the vertical rocks
    this.physics.add.collider(
      this.secondInvisibleWall,
      this.verticalRockGroup,
      function (secondInvisibleWallCollide, verticalRockCollide) {
        verticalRockCollide.destroy()
        console.log("Destroyed vertical rock")
      }.bind(this)
    )

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
    this.levelOneBackground.tilePositionX += 9

    try {
      if (keySpaceObj.isDown === true) {
        this.doge.body.velocity.y = -600
        this.physics.resume()
        this.startText.destroy()
      }
    } catch (err) {}
  }
}

export default HardLvlOneGameScene
