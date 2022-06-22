/* global Phaser */

// Copyright (c) 2022 Aiden McLeod All rights reserved
//
// Created by: Aiden
// Created on: April 2022
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
    constructor () {
      super({ key: 'splashScene'})
    }
  
    init (data) {
      this.cameras.main.setBackgroundColor('#ffffff')
    }
  
    preload () {
      console.log('Splash Scene')
    }
  
    creat (data) {
    }
  
    update (time, delta) {
    }
  }
  
  export default SplashScene
  