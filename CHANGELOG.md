# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2025-09-01

### Added
- **Core Library Features**
  - Complete anime character and series management system
  - TypeScript interfaces for `AnimeCharacter` and `AnimeSeries`
  - Power level ranking system with enum `PowerLevel`
  - Sample data for testing (`SAMPLE_CHARACTERS`, `SAMPLE_SERIES`)

- **Utility Functions**
  - `calculateTotalPower()` - Calculate total power of character array
  - `findMostPowerfulCharacter()` - Find character with highest power level
  - `sortCharactersByPower()` - Sort characters by power level (descending)
  - `getCharactersBySeries()` - Filter characters by anime series
  - `getUniqueSeries()` - Get unique series names from characters
  - `getAveragePowerLevel()` - Calculate average power level
  - `findCharactersWithAbility()` - Find characters with specific ability
  - `getSeriesByGenre()` - Filter series by genre
  - `getLongestSeries()` - Find series with most episodes
  - `getPowerRanking()` - Get power level ranking

- **Default Export Class**
  - `AnimePower` class with full CRUD operations
  - Methods for managing characters and series collections
  - Built-in sample data loading functionality

- **TypeScript Support**
  - Full TypeScript declarations (`.d.ts` files)
  - Dual package support (ESM + CommonJS)
  - Strict type checking and validation

- **Build System**
  - tsup-based build system for optimal bundling
  - Source maps for debugging
  - Tree-shaking friendly exports

- **Development Tools**
  - ESLint configuration for code quality
  - Prettier configuration for code formatting
  - Type checking scripts
  - Watch mode for development

- **NPM Publishing**
  - Proper package.json configuration
  - Files field for selective publishing
  - Repository and homepage links
  - Keywords for discoverability

### Changed
- Initial release with comprehensive anime utility functionality

### Deprecated
- None

### Removed
- None

### Fixed
- None

---

## Types of changes
- `Added` for new features
- `Changed` for changes in existing functionality
- `Deprecated` for soon-to-be removed features
- `Removed` for now removed features
- `Fixed` for any bug fixes
- `Security` in case of vulnerabilities

## Versioning
This project uses [Semantic Versioning](https://semver.org/):

- **MAJOR** version for incompatible API changes
- **MINOR** version for backwards-compatible functionality additions
- **PATCH** version for backwards-compatible bug fixes

## Contributing
When contributing to this project, please:
1. Update the CHANGELOG.md file with your changes
2. Follow the existing commit message format
3. Test your changes thoroughly
4. Update version numbers according to semantic versioning

---

[Unreleased]: https://github.com/domucchi/anime-power/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/domucchi/anime-power/releases/tag/v0.1.0
