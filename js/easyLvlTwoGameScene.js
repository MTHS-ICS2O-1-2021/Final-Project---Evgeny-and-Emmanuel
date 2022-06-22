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
   * Create a pixel to fix loop
   */
  createAPixel() {
    const aPixel = this.physics.add.sprite(2020, 540, "aPixel")
    aPixel.body.velocity.x = -500
    this.aPixelGroup.add(aPixel)
  }

  /**
   * create nyan cat
   */
  createNyanCat() {
    const nyanCatYLocation = Math.floor(Math.random() * 1080) + 1 //spawns the nyan cat between 1 and 1081 pixel
    const aNyanCat = this.physics.add
      .sprite(2220, nyanCatYLocation, "nyanCat")
      .setScale(0.5)
    aNyanCat.body.velocity.x = -500
    this.nyanCatGroup.add(aNyanCat)
  }

  /**
   * create tac nyan
   */
  createTacNyan() {
    const tacNyanYLocation = Math.floor(Math.random() * 1080) + 1 //spawns the tac nyan between 1 and 1081 pixel
    const aTacNyan = this.physics.add
      .sprite(2020, tacNyanYLocation, "tacNyan")
      .setScale(0.4)
    aTacNyan.body.velocity.x = -500
    this.tacNyanGroup.add(aTacNyan)
  }

  /**
   * create a blue portal
   */
  createBluePortal() {
    const bluePortalYLocation = Math.floor(Math.random() * 1080) + 1 //spawns the nyan cat between 1 and 1081 pixel
    const aBluePortal = this.physics.add
      .sprite(1970, bluePortalYLocation, "bluePortal")
      .setScale(0.5)
      .setImmovable()
    aBluePortal.body.velocity.x = -500
    this.bluePortalGroup.add(aBluePortal)
  }

  /**
   * create a red portal
   */
  createRedPortal() {
    const aRedPortal = this.physics.add
      .sprite(2620, 640, "redPortal")
      .setScale(2)
    aRedPortal.body.velocity.x = -25
    this.aRedPortalGroup.add(aRedPortal)
  }

  /**
   * constructor program
   */
  constructor() {
    super({ key: "easyLvlTwoGameScene" })
    this.levelTwoBackgroundImage = null
    this.doge = null
    this.fireBullet = false

    this.easyLvlTwoGameSceneText = null
    this.easyLvlTwoGameSceneTextStyle = {
      font: "40px Pixelo",
      fill: "#ffffff",
      align: "center",
    }
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
    this.load.audio("deathSound", "./assets/deathSound.mp3")
    this.load.audio("lvlTwoMusic", "./assets/lvlTwoMusic.mp3")
    this.load.audio("gunSound", "./assets/gunSound.mp3")
    this.load.image("levelTwoBackground", "./assets/levelTwoBackground.png")
    this.load.image("doge", "./assets/dogeLvlTwo.png")
    this.load.image("nyanCat", "./assets/nyanCat.png")
    this.load.image("tacNyan", "./assets/tacNyan.png")
    this.load.image("invisibleWall", "./assets/invisibleWall.png")
    this.load.image("aPixel", "./assets/aPixel.png")
    this.load.image("exitButton", "./assets/exitButton.png")
    this.load.image("retryButton", "./assets/retryButton.png")
    this.load.image("easyModeDeath", "./assets/easyModeDeath.png")
    this.load.image("easyModeDeathText", "./assets/easyModeDeathText.png")
    this.load.image("redPortal", "./assets/redPortal.png")
    this.load.image("bullet", "./assets/bullet.png")
    this.load.image("bluePortal", "./assets/bluePortal.png")
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
    this.doge.setSize(150, 75)
    this.doge.body.collideWorldBounds = true

    this.invisibleWall = this.physics.add
      .sprite(1920 / 2 + 200, 1080 / 2, "invisibleWall")
      .setImmovable()
    this.secondInvisibleWall = this.physics.add
      .sprite(1920 / 2 - 2000, 1080 / 2, "invisibleWall")
      .setImmovable()

    this.easyLvlTwoGameSceneText = this.add.text(
      0,
      0,
      "Task: Find and enter the red portal.",
      this.easyLvlTwoGameSceneTextStyle
    )

    //create a group for nyan cat
    this.nyanCatGroup = this.add.group()
    this.createNyanCat()
    //create a group for tac nyan
    this.tacNyanGroup = this.add.group()
    this.createTacNyan()
    //create a group for a pixel
    this.aPixelGroup = this.add.group()
    this.createAPixel()
    //create a group for the a red portal
    this.aRedPortalGroup = this.add.group()
    this.createRedPortal()
    //create a group for the a blue portal
    this.bluePortalGroup = this.add.group()
    this.createBluePortal()
    //create a group for the bullets
    this.bulletGroup = this.physics.add.group()

    //colision between a red portal and doge
    this.physics.add.collider(
      this.doge,
      this.aRedPortalGroup,
      function (dogeCollide, aRedPortalCollide) {
        this.scene.start("easyLvlThreeGameScene")
      }.bind(this)
    )

    //colision between a blue portal and doge
    this.physics.add.collider(
      this.doge,
      this.bluePortalGroup,
      function (dogeCollide, aBluePortalCollide) {
        this.doge.x = Math.random() * 960
        this.doge.y = Math.random() * 540
      }.bind(this)
    )

    //colision between a blue protal and nyan cat
    this.physics.add.collider(
      this.bluePortalGroup,
      this.nyanCatGroup,
      function (bluePortalCollide, nyanCatCollide) {
        nyanCatCollide.destroy()
        this.createNyanCat()
      }.bind(this)
    )

    //colision between a blue protal and tac nyan
    this.physics.add.collider(
      this.bluePortalGroup,
      this.tacNyanGroup,
      function (bluePortalCollide, tacNyanCollide) {
        tacNyanCollide.destroy()
        this.createTacNyan()
      }.bind(this)
    )

    //colision between invisble wall and pixel
    this.physics.add.collider(
      this.invisibleWall,
      this.aPixelGroup,
      function (invisibleWallCollide, aPixelCollide) {
        aPixelCollide.destroy()
        this.createAPixel()
        this.createTacNyan()
        this.createTacNyan()
        this.createTacNyan()
        this.createNyanCat()
        this.createNyanCat()
        this.createNyanCat()
        this.createBluePortal()
      }.bind(this)
    )

    //collisions between bullets and nyan cat
    this.physics.add.collider(
      this.bulletGroup,
      this.nyanCatGroup,
      function (bulletCollide, nyanCatCollide) {
        nyanCatCollide.destroy()
        bulletCollide.destroy()
      }.bind(this)
    )

    //collisions between bullets and tac nyan
    this.physics.add.collider(
      this.bulletGroup,
      this.tacNyanGroup,
      function (bulletCollide, tacNyanCollide) {
        tacNyanCollide.destroy()
        bulletCollide.destroy()
      }.bind(this)
    )

    //collisions between doge and the tac nyan
    this.physics.add.collider(
      this.doge,
      this.tacNyanGroup,
      function (dogeCollide, tacNyanCollide) {
        this.physics.pause()
        dogeCollide.destroy()
        this.sound.play("deathSound")
        this.easyModeDeath = this.add.sprite(
          1920 / 2 + 225,
          1080 / 2 - 250,
          "easyModeDeath"
        )
        this.easyModeDeathText = this.add.sprite(
          1920 / 2 - 225,
          1080 / 2 - 250,
          "easyModeDeathText"
        )
        this.retryButton = this.add
          .sprite(1920 / 2 + 400, 1080 / 2 + 200, "retryButton")
          .setScale(2)
        this.retryButton.setInteractive({ useHandCursor: true })
        this.retryButton.on("pointerdown", () =>
          this.scene.start("easyLvlTwoGameScene")
        )
        this.exitButton = this.add
          .sprite(1920 / 2 - 400, 1080 / 2 + 175, "exitButton")
          .setScale(1.5)
        this.exitButton.setInteractive({ useHandCursor: true })
        this.exitButton.on("pointerdown", () =>
          this.scene.start("secondMenuScene")
        )
        this.lvlTwoMusic.stop()
      }.bind(this)
    )

    //collisions between doge and the nyan cat
    this.physics.add.collider(
      this.doge,
      this.nyanCatGroup,
      function (dogeCollide, nyanCatCollide) {
        this.physics.pause()
        dogeCollide.destroy()
        this.sound.play("deathSound")
        this.easyModeDeath = this.add.sprite(
          1920 / 2 + 225,
          1080 / 2 - 250,
          "easyModeDeath"
        )
        this.easyModeDeathText = this.add.sprite(
          1920 / 2 - 225,
          1080 / 2 - 250,
          "easyModeDeathText"
        )
        this.retryButton = this.add
          .sprite(1920 / 2 + 400, 1080 / 2 + 200, "retryButton")
          .setScale(2)
        this.retryButton.setInteractive({ useHandCursor: true })
        this.retryButton.on("pointerdown", () =>
          this.scene.start("easyLvlTwoGameScene")
        )
        this.exitButton = this.add
          .sprite(1920 / 2 - 400, 1080 / 2 + 175, "exitButton")
          .setScale(1.5)
        this.exitButton.setInteractive({ useHandCursor: true })
        this.exitButton.on("pointerdown", () =>
          this.scene.start("secondMenuScene")
        )
        this.lvlTwoMusic.stop()
      }.bind(this)
    )

    //collisions between second invisible wall and the tac nyan
    this.physics.add.collider(
      this.secondInvisibleWall,
      this.tacNyanGroup,
      function (secondInvisibleWallCollide, tacNyanCollide) {
        tacNyanCollide.destroy()
        console.log("Destroyed tac nyan")
      }.bind(this)
    )

    //collisions between second invisible wall and the nyan cat
    this.physics.add.collider(
      this.secondInvisibleWall,
      this.nyanCatGroup,
      function (secondInvisibleWallCollide, nyanCatCollide) {
        nyanCatCollide.destroy()
        console.log("Destroyed nyan cat")
      }.bind(this)
    )

    //collisions between second invisible wall and the blue portal
    this.physics.add.collider(
      this.secondInvisibleWall,
      this.bluePortalGroup,
      function (secondInvisibleWallCollide, bluePortalCollide) {
        bluePortalCollide.destroy()
        console.log("Destroyed blue portal")
      }.bind(this)
    )

    //background music
    this.lvlTwoMusic = this.sound.add("lvlTwoMusic", {
      volume: 0.2,
      loop: true,
    })

    //bullet sound effect
    this.gunSound = this.sound.add("gunSound", {
      volume: 0.1,
    })
    this.lvlTwoMusic.play()
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
    this.levelTwoBackground.tilePositionX += 3

    if (keyForward.isDown === true || keyForwardArrow.isDown === true) {
      this.doge.y -= 10
    }

    if (keyLeft.isDown === true || keyLeftArrow.isDown === true) {
      this.doge.x -= 10
    }

    if (keyBackward.isDown === true || keyBackwardArrow.isDown === true) {
      this.doge.y += 10
    }

    if (keyRight.isDown === true || keyRightArrow.isDown === true) {
      this.doge.x += 10
      if (this.doge.x > 960) {
        this.doge.x = 960
      }
    }
    if (keySpace.isDown === true) {
      if (this.fireBullet === false) {
        //fire bullet
        this.fireBullet = true
        const aNewBullet = this.physics.add.sprite(
          this.doge.x,
          this.doge.y,
          "bullet"
        )
        this.sound.play("gunSound")
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

export default EasyLvlTwoGameScene
