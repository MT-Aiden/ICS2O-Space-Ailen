/* global Phaser */

// Copyright (c) 2022 Aiden McLeod All rights reserved
//
// Created by: Aiden McLeod
// Created on: April 2022
// This is the Title Scene

/**
  * This class is the Menu Scene.
  */
 class MenuScene extends Phaser.Scene {
    constructor () {
      super({ key: 'menuScene' })
    }
    
    init (data) {
      this.cameras.main.setBackgroundColor('#ffffff')
    }
  
    preload () {
      console.log('Menu Scene')
    }
  
    create (data) {
    }
  
    update (time, delta) {
    }
  }
  
  export default MenuScene