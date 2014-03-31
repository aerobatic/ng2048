'use strict';

angular
.module('twentyfourtyeightApp', ['Game', 'Keyboard', 'ngAnimate', 'ngCookies'])
.controller('GameController', function($scope, GameManager, GridService, KeyboardService) {

  this.game_manager = GameManager;
  KeyboardService.init();

  this.newGame = function() {
    this.game_manager.newGame();
    this.startGame();
  }

  this.startGame = function() {
    var self = this;
    KeyboardService.on(function(key, evt) {
      self.game_manager.move(key).then(function() {
      });
    });
  }

  this.newGame();
});
