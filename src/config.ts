import type { SceneKey } from '@/types'
import Phaser from 'phaser'
import GameScene from '@/Scenes/GameScene'
import StartScene from '@/Scenes/StartScene'

export const config = {
    width: 1920,
    height: 1080,
    type: Phaser.AUTO,

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },

    physics: {
        default: 'arcade',
    },

    scene: [
        StartScene,
        GameScene,
    ]
}

export const events = {
    togglePlaceholderVisibility: 'toggleplaceholdervisibility',
    towerIsPlaced: 'towerisplaced',
    enemyKilled: 'enemykilled',
}

export const scene: Record<SceneKey, SceneKey> = {
    StartScene: 'StartScene',
    GameScene: 'GameScene',
    LoadingScene: 'LoadingScene',
}