# Nx Library Scripts

This document describes all the npm scripts available for managing the Nx libraries locally.

## Build Scripts

### Build All Packages
```bash
npm run build
# Builds packageA, packageB, and packageC
```

### Build Individual Packages
```bash
npm run build:packageA    # Build only packageA
npm run build:packageB    # Build only packageB  
npm run build:packageC    # Build only packageC
```

### Build Affected Packages Only
```bash
npm run build:affected
# Only builds packages that have changed since the last commit
```

## Type Checking Scripts

### Type Check All Packages
```bash
npm run typecheck
# Type checks packageA, packageB, and packageC
```

### Type Check Affected Packages Only
```bash
npm run typecheck:affected
# Only type checks packages that have changed
```

## Linting Scripts

### Lint All Packages
```bash
npm run lint
# Lints packageA, packageB, and packageC
```

### Lint Affected Packages Only
```bash
npm run lint:affected
# Only lints packages that have changed
```

## Testing Scripts

### Test All Packages
```bash
npm run test
# Tests packageA, packageB, and packageC
```

### Test Affected Packages Only
```bash
npm run test:affected
# Only tests packages that have changed
```

## Development Scripts

### Watch Mode
```bash
npm run watch
# Watches for changes and rebuilds affected packages automatically
```

### Development Mode
```bash
npm run dev
# Watches all projects and rebuilds when files change
```

## Utility Scripts

### Clean Build Artifacts
```bash
npm run clean
# Cleans Nx cache and removes dist folder
```

### Dependency Graph
```bash
npm run graph
# Opens the Nx dependency graph in your browser
```

### Affected Dependency Graph
```bash
npm run affected:graph
# Shows only the affected projects in the dependency graph
```

### Workspace Validation
```bash
npm run workspace:lint
# Validates the workspace configuration
```

## Usage Examples

### Daily Development Workflow
```bash
# Start development with watch mode
npm run watch

# Or build everything once
npm run build

# Check types
npm run typecheck

# Run tests
npm run test
```

### CI/CD Simulation
```bash
# Simulate affected builds (like in CI)
npm run build:affected
npm run test:affected
npm run lint:affected
```

### Debugging
```bash
# Clean everything and rebuild
npm run clean
npm run build

# Check dependency graph
npm run graph
```

## Performance Tips

- Use `affected` commands for faster builds when working on large changes
- Use individual package scripts when working on specific packages
- Use `watch` mode during active development for instant feedback
- Use `clean` if you encounter caching issues