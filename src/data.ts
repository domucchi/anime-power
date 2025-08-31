/**
 * Sample data for the Anime Power library
 */

import type { AnimeCharacter, AnimeSeries } from './types.js'

/**
 * Sample anime characters data
 */
export const SAMPLE_CHARACTERS: AnimeCharacter[] = [
  {
    name: 'Son Goku',
    age: 30,
    powerLevel: 9000,
    abilities: ['Kamehameha', 'Super Saiyan', 'Instant Transmission'],
    series: 'Dragon Ball',
  },
  {
    name: 'Vegeta',
    age: 32,
    powerLevel: 8500,
    abilities: ['Final Flash', 'Super Saiyan', 'Galick Gun'],
    series: 'Dragon Ball',
  },
  {
    name: 'Naruto Uzumaki',
    age: 17,
    powerLevel: 7500,
    abilities: ['Rasengan', 'Shadow Clone Jutsu', 'Sage Mode'],
    series: 'Naruto',
  },
  {
    name: 'Sasuke Uchiha',
    age: 17,
    powerLevel: 8000,
    abilities: ['Chidori', 'Sharingan', 'Rinnegan'],
    series: 'Naruto',
  },
]

/**
 * Sample anime series data
 */
export const SAMPLE_SERIES: AnimeSeries[] = [
  {
    title: 'Dragon Ball',
    genre: 'Action',
    episodes: 153,
    completed: true,
    releaseYear: 1986,
  },
  {
    title: 'Naruto',
    genre: 'Action',
    episodes: 220,
    completed: true,
    releaseYear: 2002,
  },
  {
    title: 'One Piece',
    genre: 'Adventure',
    episodes: 1100,
    completed: false,
    releaseYear: 1999,
  },
]
