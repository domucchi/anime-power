# @anime-power/core

A powerful TypeScript library for anime utilities and calculations.

## Features

- 🎯 **TypeScript First**: Full TypeScript support with strict typing
- 📦 **ESM & CJS**: Dual package support for maximum compatibility
- 🏗️ **tsup Build**: Fast bundling with tsup for optimal performance
- 🔧 **Bun Compatible**: Optimized for Bun runtime
- ✨ **ESLint & Prettier**: Code quality tools pre-configured
- 📁 **Modular Architecture**: Well-organized codebase with separate files for types, utilities, and data

## Installation

```bash
# Using Bun
bun add @anime-power/core

# Using npm
npm install @anime-power/core

# Using yarn
yarn add @anime-power/core

# Using pnpm
pnpm add @anime-power/core
```

## Usage

### Named Imports (Recommended)

```typescript
import {
  calculateTotalPower,
  findMostPowerfulCharacter,
  sortCharactersByPower,
  getPowerRanking,
  SAMPLE_CHARACTERS,
  PowerLevel,
  type AnimeCharacter,
  type AnimeSeries,
} from '@anime-power/core';

// Use sample data or create your own
const characters = SAMPLE_CHARACTERS;

// Calculate total power
const totalPower = calculateTotalPower(characters);
console.log(`Total power: ${totalPower}`);

// Find most powerful character
const strongest = findMostPowerfulCharacter(characters);
console.log(`Strongest: ${strongest?.name}`);

// Sort by power level
const sorted = sortCharactersByPower(characters);
console.log('Top 3 characters:');
sorted.slice(0, 3).forEach(char => {
  const ranking = getPowerRanking(char.powerLevel);
  console.log(`  ${char.name}: ${ranking} (${char.powerLevel})`);
});

// Filter by series
const dragonBallChars = characters.filter(char => char.series === 'Dragon Ball');
console.log(`Dragon Ball characters: ${dragonBallChars.length}`);

// Power level rankings
console.log(`Power ranking for 9000: ${getPowerRanking(9000)}`);
```

### Default Import (All-in-One)

```typescript
import AnimePower from '@anime-power/core';

// Access everything through the API object
const characters = AnimePower.SAMPLE_CHARACTERS;
const totalPower = AnimePower.calculateTotalPower(characters);
const strongest = AnimePower.findMostPowerfulCharacter(characters);
const ranking = AnimePower.getPowerRanking(9000);

console.log(`Total power: ${totalPower}`);
console.log(`Strongest: ${strongest?.name}`);
console.log(`Power ranking: ${ranking}`);
```

### Working with Custom Data

```typescript
import { type AnimeCharacter, calculateTotalPower } from '@anime-power/core';

// Create custom characters
const myCharacters: AnimeCharacter[] = [
  {
    name: 'Luffy',
    age: 19,
    powerLevel: 8200,
    abilities: ['Gum-Gum Pistol', 'Gear Third'],
    series: 'One Piece',
  },
  {
    name: 'Zoro',
    age: 21,
    powerLevel: 7800,
    abilities: ['Three Sword Style', 'Asura'],
    series: 'One Piece',
  },
];

const totalPower = calculateTotalPower(myCharacters);
console.log(`My characters total power: ${totalPower}`);
```

## API Reference

### Types & Enums

#### Interfaces
- **`AnimeCharacter`** - Character interface with:
  - `name: string` - Character's name
  - `age?: number` - Character's age (optional)
  - `powerLevel: number` - Character's power level
  - `abilities: string[]` - Array of special abilities
  - `series?: string` - Character's anime series (optional)

- **`AnimeSeries`** - Series interface with:
  - `title: string` - Series title
  - `genre: string` - Main genre
  - `episodes: number` - Total episodes count
  - `completed: boolean` - Whether the series is completed
  - `releaseYear?: number` - Release year (optional)

#### Enums
- **`PowerLevel`** - Power ranking levels:
  - `WEAK = 'weak'` - Power < 2000
  - `MODERATE = 'moderate'` - Power 2000-4999
  - `STRONG = 'strong'` - Power 5000-7999
  - `LEGENDARY = 'legendary'` - Power 8000-9999
  - `GODLIKE = 'godlike'` - Power ≥ 10000

### Sample Data

- **`SAMPLE_CHARACTERS`** - Array of sample anime characters
- **`SAMPLE_SERIES`** - Array of sample anime series

### Character Functions

#### Power & Statistics
- **`calculateTotalPower(characters: AnimeCharacter[])`** → `number`
  - Calculate sum of all character power levels

- **`findMostPowerfulCharacter(characters: AnimeCharacter[])`** → `AnimeCharacter | null`
  - Find character with highest power level

- **`getAveragePowerLevel(characters: AnimeCharacter[])`** → `number`
  - Calculate average power level of characters

- **`getPowerRanking(powerLevel: number)`** → `PowerLevel`
  - Get power level ranking based on power value

#### Sorting & Filtering
- **`sortCharactersByPower(characters: AnimeCharacter[])`** → `AnimeCharacter[]`
  - Sort characters by power level (descending)

- **`getCharactersBySeries(characters: AnimeCharacter[], series: string)`** → `AnimeCharacter[]`
  - Filter characters by series name

- **`findCharactersWithAbility(characters: AnimeCharacter[], ability: string)`** → `AnimeCharacter[]`
  - Find characters with specific ability

- **`getUniqueSeries(characters: AnimeCharacter[])`** → `string[]`
  - Get unique series names from characters

### Series Functions

- **`getCompletedSeries(series: AnimeSeries[])`** → `AnimeSeries[]`
  - Filter completed anime series

- **`getAverageEpisodes(series: AnimeSeries[])`** → `number`
  - Get average episodes count

- **`getSeriesByGenre(series: AnimeSeries[], genre: string)`** → `AnimeSeries[]`
  - Filter series by genre

- **`getLongestSeries(series: AnimeSeries[])`** → `AnimeSeries | null`
  - Get the series with the most episodes

### Default Export API Object

The library also provides a default export that includes all functions, types, and data:

```typescript
import AnimePower from '@anime-power/core'

// Access everything through the API object
const characters = AnimePower.SAMPLE_CHARACTERS
const totalPower = AnimePower.calculateTotalPower(characters)
const strongest = AnimePower.findMostPowerfulCharacter(characters)
const ranking = AnimePower.getPowerRanking(9000) // PowerLevel.LEGENDARY
```

### Library Constants

- **`VERSION`** - Current library version string

## Development

### Prerequisites

- [Bun](https://bun.sh/) runtime
- Node.js 18+ (for compatibility)

### Setup

```bash
# Install dependencies
bun install

# Development build with watch mode
bun run dev

# Production build
bun run build

# Lint code
bun run lint

# Fix linting issues
bun run lint:fix

# Format code
bun run format

# Type checking
bun run type-check
```

## Project Structure

```
src/
├── index.ts          # Main entry point with all exports
├── types.ts          # TypeScript interfaces and enums
├── utils.ts          # Utility functions
├── data.ts           # Sample data
└── AnimePower.ts     # Main class implementation
```

## Build Output

The library builds to multiple formats:

- `dist/index.js` - CommonJS version
- `dist/index.mjs` - ES Module version
- `dist/index.d.ts` - TypeScript declarations

## Development & Testing

This library includes a comprehensive TypeScript test application in the `test-app/` directory that demonstrates:

- Named exports usage with proper TypeScript types
- Default export API object usage
- Type annotations for better development experience
- All library functionality testing

### Running the Test App

```bash
# Install dependencies
bun install

# Run with TypeScript (development - hot reload)
bun run dev:simple

# Watch mode (restarts on changes)
bun run dev

# Build and run compiled version
bun run start
```

### Test App Features

- ✅ Full TypeScript support with type annotations
- ✅ Demonstrates all library functions and types
- ✅ Tests both named exports and default API object
- ✅ Includes custom character creation examples
- ✅ Power level ranking demonstrations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT - see the [LICENSE](LICENSE) file for details.

## Version

Current version: 0.1.0
