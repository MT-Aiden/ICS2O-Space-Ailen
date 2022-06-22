/* global Phaser */

// Copyright (c) 2022 Aiden McLeod All rights reserved
//
// Created by: Aiden McLeod
// Created on: April 2022
// This is the Title Scene

/**
 * This class is the title scene.
 */
 class TitleScene extends Phaser.Scene {
    constructor() {
      super({ key: "titleScene" });
    }
  
    init(data) {
      this.cameras.main.setBackgroundColor("#ffffff");
    }
    preload() {
      console.log("Title Scene");
    }
  
    create(data) {}
  
    update(time, delta) {}
  }
  
  export default TitleScene;
  