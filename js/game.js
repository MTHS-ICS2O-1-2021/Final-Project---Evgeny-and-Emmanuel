/* global Phaser */

// Created by: Emmanuel & Evgeny
// Created on: June 2022
// This is the Phaser3 configuration file

// Scene import statments
import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"
import MenuScene from "./menuScene.js"
import SecondMenuScene from "./secondMenuScene.js"
import ControlsMenuScene from "./controlsMenuScene.js"
import EasyLvlOneGameScene from "./easyLvlOneGameScene.js"
import EasyLvlTwoGameScene from "./easyLvlTwoGameScene.js"
import EasyLvlThreeGameScene from "./easyLvlThreeGameScene.js"
import HardLvlOneGameScene from "./hardLvlOneGameScene.js"
import HardLvlTwoGameScene from "./hardLvlTwoGameScene.js"
import HardLvlThreeGameScene from "./hardLvlThreeGameScene.js"

// create the new scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()
const menuScene = new MenuScene()
const secondMenuScene = new SecondMenuScene()
const controlsMenuScene = new ControlsMenuScene()
const easyLvlOneGameScene = new EasyLvlOneGameScene()
const easyLvlTwoGameScene = new EasyLvlTwoGameScene()
const easyLvlThreeGameScene = new EasyLvlThreeGameScene()
const hardLvlOneGameScene = new HardLvlOneGameScene()
const hardLvlTwoGameScene = new HardLvlTwoGameScene()
const hardLvlThreeGameScene = new HardLvlThreeGameScene()

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
game.scene.add("controlsMenuScene", controlsMenuScene)
game.scene.add("easyLvlOneGameScene", easyLvlOneGameScene)
game.scene.add("easyLvlTwoGameScene", easyLvlTwoGameScene)
game.scene.add("easyLvlThreeGameScene", easyLvlThreeGameScene)
game.scene.add("hardLvlOneGameScene", hardLvlOneGameScene)
game.scene.add("hardLvlTwoGameScene", hardLvlTwoGameScene)
game.scene.add("hardLvlThreeGameScene", hardLvlThreeGameScene)

// the start scene
game.scene.start("splashScene")
