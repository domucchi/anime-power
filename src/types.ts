/**
 * Type definitions for the Anime Power library
 */

/**
 * Represents an anime character
 */
export type AnimeCharacter = {
  /** The character's name */
  name: string
  /** The character's age (optional) */
  age?: number
  /** The character's power level */
  powerLevel: number
  /** Special abilities */
  abilities: string[]
  /** Character's anime series */
  series?: string
}

/**
 * Represents an anime series
 */
export type AnimeSeries = {
  /** The series title */
  title: string
  /** The main genre */
  genre: string
  /** Episodes count */
  episodes: number
  /** Whether it's completed */
  completed: boolean
  /** Release year */
  releaseYear?: number
}

/**
 * Power ranking levels
 */
export enum PowerLevel {
  WEAK = 'weak',
  MODERATE = 'moderate',
  STRONG = 'strong',
  LEGENDARY = 'legendary',
  GODLIKE = 'godlike',
}
