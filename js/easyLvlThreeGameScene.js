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
   * create a pixel
   */
  createAPixel() {
    const aPixel = this.physics.add.sprite(2020, 540, "aPixel")
    aPixel.body.velocity.x = -1000
    this.aPixelGroup.add(aPixel)
  }
  /**
   * create second pixel
   */
  createSecondPixel() {
    const secondPixel = this.physics.add.sprite(2020, 540, "aPixel")
    secondPixel.body.velocity.x = -750
    this.secondPixelGroup.add(secondPixel)
  }
  /**
   * create third pixel
   */
  createThirdPixel() {
    const thirdPixel = this.physics.add.sprite(2020, 540, "aPixel")
    thirdPixel.body.velocity.x = -750
    this.thirdPixelGroup.add(thirdPixel)
  }
  /**
   * create fourth pixel
   */
  createFourthPixel() {
    const fourthPixel = this.physics.add.sprite(2020, 540, "aPixel")
    fourthPixel.body.velocity.x = -300
    this.fourthPixelGroup.add(fourthPixel)
  }

  /**
   * create poop pixel
   */
  createPoopPixel() {
    const poopPixel = this.physics.add.sprite(2020, 540, "aPixel")
    poopPixel.body.velocity.x = -200
    this.poopPixelGroup.add(poopPixel)
  }

  /**
   * create second phase
   */
  createSecondPhase() {
    const secondPhase = this.physics.add.sprite(2650, 540, "aPixel")
    secondPhase.body.velocity.x = -9
    this.secondPhaseGroup.add(secondPhase)
  }

  /**
   * create first wave
   */
  createFirstWave() {
    const firstWave = this.physics.add.sprite(2640, 540, "aPixel")
    firstWave.body.velocity.x = -5
    this.firstWaveGroup.add(firstWave)
  }
  /**
   * create second wave
   */
  createSecondWave() {
    const secondWave = this.physics.add.sprite(2640, 540, "aPixel")
    secondWave.body.velocity.x = -4.1
    this.secondWaveGroup.add(secondWave)
  }
  /**
   * create third wave
   */
  createThirdWave() {
    const thirdWave = this.physics.add.sprite(2840, 540, "aPixel")
    thirdWave.body.velocity.x = -4.1
    this.thirdWaveGroup.add(thirdWave)
  }
  /**
   * create kill floppa
   */
  createKillFloppa() {
    const killFloppa = this.physics.add.sprite(3100, 540, "aPixel")
    killFloppa.body.velocity.x = -4.1
    this.killFloppaGroup.add(killFloppa)
  }
  /**
   * create finish level
   */
  createFinishLevel() {
    const finishLevel = this.physics.add.sprite(3160, 540, "aPixel")
    finishLevel.body.velocity.x = -4.1
    this.finishLevelGroup.add(finishLevel)
  }

  /**
   * create a rocks
   */
  createRocks() {
    const verticalRockYLocation = Math.floor(Math.random() * 450 - 200) + 1 //spawns the rock between 1 and 1921 pixel
    const aVerticalRock = this.physics.add.sprite(
      2020,
      verticalRockYLocation,
      "verticalMagmaRock"
    )
    const rockYLocation = Math.floor(verticalRockYLocation + 1000) + 1 //spawns the rock between 1 and 1921 pixel
    const aRock = this.physics.add
      .sprite(2020, rockYLocation, "magmaRock")
      .setImmovable()
    aVerticalRock.body.velocity.x = -1000
    this.verticalRockGroup.add(aVerticalRock)
    aRock.body.velocity.x = -1000
    this.rockGroup.add(aRock)
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
   * create battle cat
   */
  createBattleCat() {
    const battleCatYLocation = Math.floor(Math.random() * 1080) + 1 //spawns the battle cat between 1 and 1081 pixel
    const aBattleCat = this.physics.add
      .sprite(2220, battleCatYLocation, "battleCat")
      .setScale(0.5)
    aBattleCat.body.velocity.x = -500
    this.battleCatGroup.add(aBattleCat)
  }

  /**
   * create big floppa
   */
  createBigFloppa() {
    const aBigFloppa = this.physics.add
      .sprite(1620, 640, "bigFloppa")
      .setScale(2)
    this.bigFloppaGroup.add(aBigFloppa)
  }

  /**
   * create poop
   */
  createPoop() {
    const poopYLocation = Math.floor(Math.random() * 1080) + 1 //spawns the poop between 1 and 1081 pixel
    const aPoop = this.physics.add
      .sprite(2220, poopYLocation, "poop")
      .setScale(0.5)
    aPoop.body.velocity.x = -500
    this.poopGroup.add(aPoop)
  }

  /**
   * create big poop
   */
  createBigPoop() {
    const bigPoopYLocation = Math.floor(Math.random() * 1080) + 1 //spawns the poop between 1 and 1081 pixel
    const aBigPoop = this.physics.add
      .sprite(1620, bigPoopYLocation, "poop")
      .setScale(0.75)
    aBigPoop.body.velocity.x = -400
    this.bigPoopGroup.add(aBigPoop)
  }

  /**
   * create fish skeleton
   */
  createFishSkeleton() {
    const fishSkeletonYLocation = Math.floor(Math.random() * 1080) + 1 //spawns the fish skeleton between 1 and 1081 pixel
    const aFishSkeleton = this.physics.add
      .sprite(2220, fishSkeletonYLocation, "fishSkeleton")
      .setScale(0.5)
    aFishSkeleton.body.velocity.x = -500
    this.fishSkeletonGroup.add(aFishSkeleton)
  }

  /**
   * create a blue portal
   */
  createBluePortal() {
    const bluePortalYLocation = Math.floor(Math.random() * 1080) + 1 //spawns the nyan cat between 1 and 1081 pixel
    const aBluePortal = this.physics.add
      .sprite(2020, bluePortalYLocation, "bluePortal")
      .setScale(0.5)
      .setImmovable()
    aBluePortal.body.velocity.x = -750
    this.aBluePortalGroup.add(aBluePortal)
  }

  /**
   * create a red portal
   */
  createRedPortal() {
    const redPortalYLocation = Math.floor(Math.random() * 1080) + 1 //spawns the nyan cat between 1 and 1081 pixel
    const aRedPortal = this.physics.add
      .sprite(1920, redPortalYLocation, "redPortal")
      .setImmovable()
    aRedPortal.body.velocity.x = -750
    this.aRedPortalGroup.add(aRedPortal)
  }
  /**
   * create a purple portal
   */
  createPurplePortal() {
    const purplePortalYLocation = Math.floor(Math.random() * 1080) + 1 //spawns the nyan cat between 1 and 1081 pixel
    const aPurplePortal = this.physics.add
      .sprite(1820, purplePortalYLocation, "purplePortal")
      .setImmovable()
    aPurplePortal.body.velocity.x = -750
    this.aPurplePortalGroup.add(aPurplePortal)
  }

  /**
   * constructor program
   */
  constructor() {
    super({ key: "easyLvlThreeGameScene" })

    this.easyLvlThreeGameSceneText = null
    this.easyLvlThreeGameSceneTextStyle = {
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

    this.levelThreeBackground = null
  }

  /**
   * preload program
   */
  preload() {
    console.log("Easy Mode Level Three Game Scene")
    this.load.audio("deathSound", "./assets/deathSound.mp3")
    this.load.audio("lvlThreeMusic", "./assets/lvlThreeMusic.mp3")
    this.load.audio("gunSound", "./assets/gunSound.mp3")
    this.load.image("levelThreeBackground", "./assets/levelThreeBackground.png")
    this.load.image("dogeLvlTwo", "./assets/dogeLvlTwo.png")
    this.load.image("magmaRock", "./assets/magmaRock.png")
    this.load.image("verticalMagmaRock", "./assets/verticalMagmaRock.png")
    this.load.image("invisibleWall", "./assets/invisibleWall.png")
    this.load.image("aPixel", "./assets/aPixel.png")
    this.load.image("exitButton", "./assets/exitButton.png")
    this.load.image("retryButton", "./assets/retryButton.png")
    this.load.image("continueButton", "./assets/continueButton.png")
    this.load.image("easyModeDeath", "./assets/easyModeDeath.png")
    this.load.image("easyModeDeathText", "./assets/easyModeDeathText.png")
    this.load.image("redPortal", "./assets/redPortal.png")
    this.load.image("bluePortal", "./assets/bluePortal.png")
    this.load.image("purplePortal", "./assets/purplePortal.png")
    this.load.image("bullet", "./assets/bullet.png")
    this.load.image("nyanCat", "./assets/nyanCat.png")
    this.load.image("tacNyan", "./assets/tacNyan.png")
    this.load.image("battleCat", "./assets/battleCat.png")
    this.load.image("bigFloppa", "./assets/bigFloppa.png")
    this.load.image("poop", "./assets/poop.png")
    this.load.image("fishSkeleton", "./assets/fishSkeleton.png")
    this.load.image("wonText", "./assets/wonText.png")
    this.load.image("sadFloppa", "./assets/sadFloppa.png")
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
    this.doge = this.physics.add.sprite(1920 / 2 - 750, 1080 / 2, "dogeLvlTwo")
    this.doge.setSize(150, 75)
    this.doge.body.collideWorldBounds = true

    this.invisibleWall = this.physics.add
      .sprite(1920 / 2 + 200, 1080 / 2, "invisibleWall")
      .setImmovable()
    this.secondInvisibleWall = this.physics.add
      .sprite(1920 / 2 - 2000, 1080 / 2, "invisibleWall")
      .setImmovable()

    this.easyLvlThreeGameSceneText = this.add.text(
      0,
      0,
      "Task: Find Floppa and beat it.",
      this.easyLvlThreeGameSceneTextStyle
    )

    //create a group for rocks
    this.verticalRockGroup = this.add.group()
    this.rockGroup = this.add.group()
    this.createRocks()
    //create first wave
    this.firstWaveGroup = this.add.group()
    this.createFirstWave()
    //create second wave
    this.secondWaveGroup = this.add.group()
    this.createSecondWave()
    //create finish level
    this.finishLevelGroup = this.add.group()
    this.createFinishLevel()
    //create second phase
    this.secondPhaseGroup = this.add.group()
    this.createSecondPhase()
    //create third wave
    this.thirdWaveGroup = this.add.group()
    this.createThirdWave()
    //create a group for nyan cat
    this.nyanCatGroup = this.add.group()
    //create a group for tac nyan
    this.tacNyanGroup = this.add.group()
    //create a group for battle cat
    this.battleCatGroup = this.add.group()
    //create a group for big floppa
    this.bigFloppaGroup = this.add.group()
    //create a group for poop
    this.poopGroup = this.add.group()
    //create a group for big poop
    this.bigPoopGroup = this.add.group()
    //create a group for fish skeleton
    this.fishSkeletonGroup = this.add.group()
    //create a group for the a red portal
    this.aRedPortalGroup = this.add.group()
    //create a group for the a blue portal
    this.aBluePortalGroup = this.add.group()
    //create a group for the a purple portal
    this.aPurplePortalGroup = this.add.group()
    //create a group for the bullets
    this.bulletGroup = this.physics.add.group()
    //create a group for a pixel
    this.aPixelGroup = this.add.group()
    this.createAPixel()
    //create a group for second pixel
    this.secondPixelGroup = this.add.group()
    //create a group for third pixel
    this.thirdPixelGroup = this.add.group()
    //create a group for fourth pixel
    this.fourthPixelGroup = this.add.group()
    //create a group for poop pixel
    this.poopPixelGroup = this.add.group()

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

    //colision between second phase pixel and the first pixel
    this.physics.add.collider(
      this.aPixelGroup,
      this.secondPhaseGroup,
      function (aPixelCollide, secondPhaseCollide) {
        secondPhaseCollide.destroy()
        aPixelCollide.destroy()
        this.createSecondPixel()
      }.bind(this)
    )

    //colision between second phase pixel and the invisible wall
    this.physics.add.collider(
      this.invisibleWall,
      this.secondPixelGroup,
      function (invisibleWallCollide, secondPixelCollide) {
        secondPixelCollide.destroy()
        this.createSecondPixel()
        this.createRedPortal()
        this.createBluePortal()
        this.createPurplePortal()
      }.bind(this)
    )

    //colision between second pixel and the first wave
    this.physics.add.collider(
      this.firstWaveGroup,
      this.secondPixelGroup,
      function (firstWaveCollide, secondPixelCollide) {
        secondPixelCollide.destroy()
        firstWaveCollide.destroy()
        this.createThirdPixel()
        this.createNyanCat()
        this.createTacNyan()
        this.createBattleCat()
        this.createPoop()
        this.createFishSkeleton()
      }.bind(this)
    )

    //colision between third pixel and the invisible wall
    this.physics.add.collider(
      this.invisibleWall,
      this.thirdPixelGroup,
      function (invisibleWallCollide, thirdPixelCollide) {
        thirdPixelCollide.destroy()
        this.createThirdPixel()
        this.createNyanCat()
        this.createTacNyan()
        this.createBattleCat()
        this.createPoop()
        this.createFishSkeleton()
      }.bind(this)
    )

    //colision between third pixel and the third wave
    this.physics.add.collider(
      this.thirdWaveGroup,
      this.thirdPixelGroup,
      function (thirdWaveCollide, thirdPixelCollide) {
        thirdPixelCollide.destroy()
        thirdWaveCollide.destroy()
        this.createFourthPixel()
        this.createNyanCat()
        this.createTacNyan()
        this.createBattleCat()
        this.createPoopPixel()
        this.createBigFloppa()
      }.bind(this)
    )

    //colision between fourth pixel and the invisible wall
    this.physics.add.collider(
      this.invisibleWall,
      this.fourthPixelGroup,
      function (invisibleWallCollide, fourthPixelCollide) {
        fourthPixelCollide.destroy()
        this.createFourthPixel()
        this.createNyanCat()
        this.createTacNyan()
        this.createBattleCat()
        this.createPoopPixel()
      }.bind(this)
    )

    //colision between poop pixel and the invisible wall
    this.physics.add.collider(
      this.invisibleWall,
      this.poopPixelGroup,
      function (invisibleWallCollide, poopPixelCollide) {
        poopPixelCollide.destroy()
        this.createPoopPixel()
        this.createBigPoop()
      }.bind(this)
    )

    //background music
    this.lvlThreeMusic = this.sound.add("lvlThreeMusic", {
      volume: 0.4,
      loop: false,
    })

    //bullet sound effect
    this.gunSound = this.sound.add("gunSound", {
      volume: 0.1,
    })
    this.lvlThreeMusic.play()

    //collisions between finish level and floppa
    this.physics.add.collider(
      this.bigFloppaGroup,
      this.finishLevelGroup,
      function (bigFloppaCollide, finishLevelCollide) {
        this.physics.pause()
        bigFloppaCollide.destroy()
        this.sound.play("deathSound")
        this.wonText = this.add.sprite(
          1920 / 2 + 225,
          1080 / 2 - 250,
          "wonText"
        )
        this.sadFloppa = this.add.sprite(
          1920 / 2 - 225,
          1080 / 2 - 250,
          "sadFloppa"
        )
        this.continueButton = this.add.sprite(
          1920 / 2,
          1080 / 2 + 200,
          "continueButton"
        )
        this.continueButton.setInteractive({ useHandCursor: true })
        this.continueButton.on("pointerdown", () => this.clickContinueButton())
        this.lvlThreeMusic.stop()
      }.bind(this)
    )

    //collisions between doge and enemies
    //collisions between doge and the rock
    this.physics.add.collider(
      this.doge,
      this.rockGroup,
      function (dogeCollide, rockCollide) {
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
          this.scene.start("easyLvlThreeGameScene")
        )
        this.exitButton = this.add
          .sprite(1920 / 2 - 400, 1080 / 2 + 175, "exitButton")
          .setScale(1.5)
        this.exitButton.setInteractive({ useHandCursor: true })
        this.exitButton.on("pointerdown", () =>
          this.scene.start("secondMenuScene")
        )
        this.lvlThreeMusic.stop()
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
          this.scene.start("easyLvlThreeGameScene")
        )
        this.exitButton = this.add
          .sprite(1920 / 2 - 400, 1080 / 2 + 175, "exitButton")
          .setScale(1.5)
        this.exitButton.setInteractive({ useHandCursor: true })
        this.exitButton.on("pointerdown", () =>
          this.scene.start("secondMenuScene")
        )
        this.lvlThreeMusic.stop()
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
          this.scene.start("easyLvlThreeGameScene")
        )
        this.exitButton = this.add
          .sprite(1920 / 2 - 400, 1080 / 2 + 175, "exitButton")
          .setScale(1.5)
        this.exitButton.setInteractive({ useHandCursor: true })
        this.exitButton.on("pointerdown", () =>
          this.scene.start("secondMenuScene")
        )
        this.lvlThreeMusic.stop()
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
          this.scene.start("easyLvlThreeGameScene")
        )
        this.exitButton = this.add
          .sprite(1920 / 2 - 400, 1080 / 2 + 175, "exitButton")
          .setScale(1.5)
        this.exitButton.setInteractive({ useHandCursor: true })
        this.exitButton.on("pointerdown", () =>
          this.scene.start("secondMenuScene")
        )
        this.lvlThreeMusic.stop()
      }.bind(this)
    )

    //collisions between doge and the battle cat
    this.physics.add.collider(
      this.doge,
      this.battleCatGroup,
      function (dogeCollide, battleCatCollide) {
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
          this.scene.start("easyLvlThreeGameScene")
        )
        this.exitButton = this.add
          .sprite(1920 / 2 - 400, 1080 / 2 + 175, "exitButton")
          .setScale(1.5)
        this.exitButton.setInteractive({ useHandCursor: true })
        this.exitButton.on("pointerdown", () =>
          this.scene.start("secondMenuScene")
        )
        this.lvlThreeMusic.stop()
      }.bind(this)
    )
    //collisions between doge and the red portal
    this.physics.add.collider(
      this.doge,
      this.aRedPortalGroup,
      function (dogeCollide, redPortalCollide) {
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
          this.scene.start("easyLvlThreeGameScene")
        )
        this.exitButton = this.add
          .sprite(1920 / 2 - 400, 1080 / 2 + 175, "exitButton")
          .setScale(1.5)
        this.exitButton.setInteractive({ useHandCursor: true })
        this.exitButton.on("pointerdown", () =>
          this.scene.start("secondMenuScene")
        )
        this.lvlThreeMusic.stop()
      }.bind(this)
    )
    //collisions between doge and the fish skeleton
    this.physics.add.collider(
      this.doge,
      this.fishSkeletonGroup,
      function (dogeCollide, fishSkeletonCollide) {
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
          this.scene.start("easyLvlThreeGameScene")
        )
        this.exitButton = this.add
          .sprite(1920 / 2 - 400, 1080 / 2 + 175, "exitButton")
          .setScale(1.5)
        this.exitButton.setInteractive({ useHandCursor: true })
        this.exitButton.on("pointerdown", () =>
          this.scene.start("secondMenuScene")
        )
        this.lvlThreeMusic.stop()
      }.bind(this)
    )
    //collisions between doge and the poop
    this.physics.add.collider(
      this.doge,
      this.poopGroup,
      function (dogeCollide, poopCollide) {
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
          this.scene.start("easyLvlThreeGameScene")
        )
        this.exitButton = this.add
          .sprite(1920 / 2 - 400, 1080 / 2 + 175, "exitButton")
          .setScale(1.5)
        this.exitButton.setInteractive({ useHandCursor: true })
        this.exitButton.on("pointerdown", () =>
          this.scene.start("secondMenuScene")
        )
        this.lvlThreeMusic.stop()
      }.bind(this)
    )
    //collisions between doge and the purple portal
    this.physics.add.collider(
      this.doge,
      this.aPurplePortalGroup,
      function (dogeCollide, purplePortalCollide) {
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
          this.scene.start("easyLvlThreeGameScene")
        )
        this.exitButton = this.add
          .sprite(1920 / 2 - 400, 1080 / 2 + 175, "exitButton")
          .setScale(1.5)
        this.exitButton.setInteractive({ useHandCursor: true })
        this.exitButton.on("pointerdown", () =>
          this.scene.start("secondMenuScene")
        )
        this.lvlThreeMusic.stop()
      }.bind(this)
    )

    //colision between a blue portal and doge
    this.physics.add.collider(
      this.doge,
      this.aBluePortalGroup,
      function (dogeCollide, aBluePortalCollide) {
        this.doge.x = Math.random() * 960
        this.doge.y = Math.random() * 540
      }.bind(this)
    )

    //collisions between doge and the big poop
    this.physics.add.collider(
      this.doge,
      this.bigPoopGroup,
      function (dogeCollide, bigPoopCollide) {
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
          this.scene.start("easyLvlThreeGameScene")
        )
        this.exitButton = this.add
          .sprite(1920 / 2 - 400, 1080 / 2 + 175, "exitButton")
          .setScale(1.5)
        this.exitButton.setInteractive({ useHandCursor: true })
        this.exitButton.on("pointerdown", () =>
          this.scene.start("secondMenuScene")
        )
        this.lvlThreeMusic.stop()
      }.bind(this)
    )
    //collisions between bullets all cat enemies
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
    //collisions between bullets and battle cat
    this.physics.add.collider(
      this.bulletGroup,
      this.battleCatGroup,
      function (bulletCollide, battleCatCollide) {
        battleCatCollide.destroy()
        bulletCollide.destroy()
      }.bind(this)
    )
    //collisions between the second invisible wall and enemy sprites
    //collisions between second invisible wall and the rock
    this.physics.add.collider(
      this.secondInvisibleWall,
      this.rockGroup,
      function (secondInvisibleWallCollide, rockCollide) {
        rockCollide.destroy()
        console.log("Destroyed rock")
      }.bind(this)
    )
    //collisions between second invisible wall and the vertical rock
    this.physics.add.collider(
      this.secondInvisibleWall,
      this.verticalRockGroup,
      function (secondInvisibleWallCollide, verticalRockCollide) {
        verticalRockCollide.destroy()
        console.log("Destroyed vertical rock")
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
    //collisions between second invisible wall and the battle cat
    this.physics.add.collider(
      this.secondInvisibleWall,
      this.battleCatGroup,
      function (secondInvisibleWallCollide, battleCatCollide) {
        battleCatCollide.destroy()
        console.log("Destroyed battle cat")
      }.bind(this)
    )
    //collisions between second invisible wall and the fish skeleton
    this.physics.add.collider(
      this.secondInvisibleWall,
      this.fishSkeletonGroup,
      function (secondInvisibleWallCollide, fishSkeletonCollide) {
        fishSkeletonCollide.destroy()
        console.log("Destroyed fish skeleton")
      }.bind(this)
    )
    //collisions between second invisible wall and the poop
    this.physics.add.collider(
      this.secondInvisibleWall,
      this.poopGroup,
      function (secondInvisibleWallCollide, poopCollide) {
        poopCollide.destroy()
        console.log("Destroyed poop")
      }.bind(this)
    )
    //collisions between second invisible wall and the big poop
    this.physics.add.collider(
      this.secondInvisibleWall,
      this.bigPoopGroup,
      function (secondInvisibleWallCollide, bigPoopCollide) {
        bigPoopCollide.destroy()
        console.log("Destroyed big poop")
      }.bind(this)
    )
    //collisions between second invisible wall and the blue portal
    this.physics.add.collider(
      this.secondInvisibleWall,
      this.aBluePortalGroup,
      function (secondInvisibleWallCollide, bluePortalCollide) {
        bluePortalCollide.destroy()
        console.log("Destroyed blue portal")
      }.bind(this)
    )
    //collisions between second invisible wall and the red portal
    this.physics.add.collider(
      this.secondInvisibleWall,
      this.aRedPortalGroup,
      function (secondInvisibleWallCollide, redPortalCollide) {
        redPortalCollide.destroy()
        console.log("Destroyed red portal")
      }.bind(this)
    )
    //collisions between second invisible wall and the purple portal
    this.physics.add.collider(
      this.secondInvisibleWall,
      this.aPurplePortalGroup,
      function (secondInvisibleWallCollide, purplePortalCollide) {
        purplePortalCollide.destroy()
        console.log("Destroyed purple portal")
      }.bind(this)
    )
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
      this.doge.y -= 14
    }

    if (keyLeft.isDown === true || keyLeftArrow.isDown === true) {
      this.doge.x -= 14
    }

    if (keyBackward.isDown === true || keyBackwardArrow.isDown === true) {
      this.doge.y += 14
    }

    if (keyRight.isDown === true || keyRightArrow.isDown === true) {
      this.doge.x += 14
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
  /**
   * clickContinueButton program
   */
  clickContinueButton() {
    this.scene.start("credScene")
  }
}

export default EasyLvlThreeGameScene
