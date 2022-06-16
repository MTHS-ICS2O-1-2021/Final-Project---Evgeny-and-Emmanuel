/* global Phaser */

// Created by: Emmanuel & Evgeny
// Created on: June 2022
// This is the Phaser3 configuration file

// Scene import statments
import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"
import MenuScene from "./menuScene.js"
import SecondMenuScene from "./secondMenuScene.js"
import EasyLvlOneGameScene from "./easyLvlOneGameScene.js"
import HardLvlOneGameScene from "./hardLvlOneGameScene.js"
import ControlsMenuScene from "./controlsMenuScene.js"

// create the new scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()
const menuScene = new MenuScene()
const secondMenuScene = new SecondMenuScene()
const easyLvlOneGameScene = new EasyLvlOneGameScene()
const hardLvlOneGameScene = new HardLvlOneGameScene()
const controlsMenuScene = new ControlsMenuScene()

//* Game scene */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  // set background color
  backgroundColor: 0xffffff,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)

// load scenes
// Note: remember any "key" is global and CAN NOT be reused!
game.scene.add("splashScene", splashScene)
game.scene.add("titleScene", titleScene)
game.scene.add("menuScene", menuScene)
game.scene.add("secondMenuScene", secondMenuScene)
game.scene.add("easyLvlOneGameScene", easyLvlOneGameScene)
game.scene.add("hardLvlOneGameScene", hardLvlOneGameScene)
game.scene.add("controlsMenuScene", controlsMenuScene)

// the start scene
game.scene.start("splashScene")