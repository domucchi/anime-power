/**
 * Anime Power - A powerful anime utility library
 * @packageDocumentation
 */

import { PowerLevel } from './types.js'
import { SAMPLE_CHARACTERS, SAMPLE_SERIES } from './data.js'

import {
  calculateTotalPower,
  findMostPowerfulCharacter,
  getCompletedSeries,
  getAverageEpisodes,
  getPowerRanking,
  sortCharactersByPower,
  getCharactersBySeries,
  getUniqueSeries,
  getAveragePowerLevel,
  findCharactersWithAbility,
  getSeriesByGenre,
  getLongestSeries,
} from './utils.js'

// Re-export types
export type { AnimeCharacter, AnimeSeries } from './types.js'
export { PowerLevel }

// Re-export sample data
export { SAMPLE_CHARACTERS, SAMPLE_SERIES } from './data.js'

// Re-export utility functions
export {
  calculateTotalPower,
  findMostPowerfulCharacter,
  getCompletedSeries,
  getAverageEpisodes,
  getPowerRanking,
  sortCharactersByPower,
  getCharactersBySeries,
  getUniqueSeries,
  getAveragePowerLevel,
  findCharactersWithAbility,
  getSeriesByGenre,
  getLongestSeries,
}

// Library version
export const VERSION = '0.1.0'

// Default export: aggregated API object
const AnimePower = {
  VERSION,
  PowerLevel,
  SAMPLE_CHARACTERS,
  SAMPLE_SERIES,
  calculateTotalPower,
  findMostPowerfulCharacter,
  getCompletedSeries,
  getAverageEpisodes,
  getPowerRanking,
  sortCharactersByPower,
  getCharactersBySeries,
  getUniqueSeries,
  getAveragePowerLevel,
  findCharactersWithAbility,
  getSeriesByGenre,
  getLongestSeries,
} as const

export default AnimePower
