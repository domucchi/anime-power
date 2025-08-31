/**
 * Utility functions for the Anime Power library
 */

import type { AnimeCharacter, AnimeSeries } from './types.js'
import { PowerLevel } from './types.js'

/**
 * Calculate the total power level of multiple characters
 * @param characters - Array of anime characters
 * @returns The sum of all character power levels
 */
export function calculateTotalPower(characters: AnimeCharacter[]): number {
  return characters.reduce(
    (total, character) => total + character.powerLevel,
    0
  )
}

/**
 * Find the most powerful character in an array
 * @param characters - Array of anime characters
 * @returns The character with the highest power level, or null if array is empty
 */
export function findMostPowerfulCharacter(
  characters: AnimeCharacter[]
): AnimeCharacter | null {
  if (characters.length === 0) return null

  return characters.reduce((mostPowerful, current) =>
    current.powerLevel > mostPowerful.powerLevel ? current : mostPowerful
  )
}

/**
 * Filter completed anime series
 * @param series - Array of anime series
 * @returns Array of completed series only
 */
export function getCompletedSeries(series: AnimeSeries[]): AnimeSeries[] {
  return series.filter(s => s.completed)
}

/**
 * Get the average episodes count for a series array
 * @param series - Array of anime series
 * @returns The average number of episodes
 */
export function getAverageEpisodes(series: AnimeSeries[]): number {
  if (series.length === 0) return 0

  const totalEpisodes = series.reduce((sum, s) => sum + s.episodes, 0)
  return Math.round(totalEpisodes / series.length)
}

/**
 * Get power level ranking based on power value
 * @param powerLevel - The power level value
 * @returns The power level ranking
 */
export function getPowerRanking(powerLevel: number): PowerLevel {
  if (powerLevel >= 10000) return PowerLevel.GODLIKE
  if (powerLevel >= 8000) return PowerLevel.LEGENDARY
  if (powerLevel >= 5000) return PowerLevel.STRONG
  if (powerLevel >= 2000) return PowerLevel.MODERATE
  return PowerLevel.WEAK
}

/**
 * Sort characters by power level (descending)
 * @param characters - Array of anime characters
 * @returns Sorted array of characters
 */
export function sortCharactersByPower(
  characters: AnimeCharacter[]
): AnimeCharacter[] {
  return [...characters].sort((a, b) => b.powerLevel - a.powerLevel)
}

/**
 * Filter characters by series
 * @param characters - Array of anime characters
 * @param series - The series name to filter by
 * @returns Filtered array of characters
 */
export function getCharactersBySeries(
  characters: AnimeCharacter[],
  series: string
): AnimeCharacter[] {
  return characters.filter(character =>
    character.series?.toLowerCase().includes(series.toLowerCase())
  )
}

/**
 * Get unique series names from characters
 * @param characters - Array of anime characters
 * @returns Array of unique series names
 */
export function getUniqueSeries(characters: AnimeCharacter[]): string[] {
  const series = characters
    .map(character => character.series)
    .filter((series): series is string => series !== undefined)

  return [...new Set(series)]
}

/**
 * Calculate average power level of characters
 * @param characters - Array of anime characters
 * @returns The average power level
 */
export function getAveragePowerLevel(characters: AnimeCharacter[]): number {
  if (characters.length === 0) return 0
  const totalPower = calculateTotalPower(characters)
  return Math.round(totalPower / characters.length)
}

/**
 * Find characters with specific ability
 * @param characters - Array of anime characters
 * @param ability - The ability to search for
 * @returns Array of characters with the specified ability
 */
export function findCharactersWithAbility(
  characters: AnimeCharacter[],
  ability: string
): AnimeCharacter[] {
  return characters.filter(character =>
    character.abilities.some(a =>
      a.toLowerCase().includes(ability.toLowerCase())
    )
  )
}

/**
 * Get series by genre
 * @param series - Array of anime series
 * @param genre - The genre to filter by
 * @returns Filtered array of series
 */
export function getSeriesByGenre(
  series: AnimeSeries[],
  genre: string
): AnimeSeries[] {
  return series.filter(s => s.genre.toLowerCase().includes(genre.toLowerCase()))
}

/**
 * Get the longest running series
 * @param series - Array of anime series
 * @returns The series with the most episodes
 */
export function getLongestSeries(series: AnimeSeries[]): AnimeSeries | null {
  if (series.length === 0) return null
  return series.reduce((longest, current) =>
    current.episodes > longest.episodes ? current : longest
  )
}
