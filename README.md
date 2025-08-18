# Nx Monorepo with Advanced Caching

This monorepo demonstrates a complete Nx setup with TypeScript 5.7.3, dependency management, and optimized CI/CD with comprehensive caching strategies.

## Project Structure

```
nx-cache/
├── packages/
│   ├── packageA/          # Core utility package
│   ├── packageB/          # Depends on packageA
│   └── packageC/          # Independent package
├── .github/workflows/     # CI/CD with caching
└── dist/                  # Build outputs
```

## Packages

### packageA
- **Function**: `greetFromPackageA(name: string): string`
- **Purpose**: Core greeting utility
- **Dependencies**: None

### packageB
- **Function**: `welcomeFromPackageB(userName: string): string`
- **Purpose**: Extended greeting that uses packageA
- **Dependencies**: `@./packageA`

### packageC
- **Function**: `processDataInPackageC(data: string[]): string`
- **Purpose**: Data processing utility
- **Dependencies**: None

## Technology Stack

- **Nx**: ^21.0.0 - Monorepo tooling with smart caching
- **TypeScript**: 5.7.3 - Type-safe development
- **Node.js**: 22+ - Runtime environment
- **GitHub Actions**: CI/CD with action/cache@v4

## Caching Strategy

The project implements multi-layered caching for optimal CI performance:

### 1. Node.js Package Cache
```yaml
uses: actions/cache@v4
with:
  path: node_modules
  key: ${{ runner.os }}-node-modules-${{ hashFiles('**/package-lock.json') }}
```

### 2. Nx Build Cache
```yaml
uses: actions/cache@v4
with:
  path: |
    .nx/cache
    .nx/workspace-data
  key: ${{ runner.os }}-nx-${{ hashFiles('**/package-lock.json', 'nx.json') }}
```

### 3. TypeScript Build Cache
```yaml
uses: actions/cache@v4
with:
  path: |
    dist
    **/tsconfig.tsbuildinfo
  key: ${{ runner.os }}-tsc-${{ hashFiles('**/tsconfig*.json') }}-${{ github.sha }}
```

## CI/CD Workflow

The GitHub Actions workflow triggers on:
- Pull requests with the `release` label
- Pushes to the `main` branch

### Workflow Features
- **Affected Detection**: Only builds changed packages and their dependents
- **Parallel Execution**: Runs lint, test, and build tasks in parallel
- **Comprehensive Caching**: Multiple cache layers for optimal performance
- **Artifact Storage**: Saves build outputs and coverage reports
- **Dependency Validation**: Ensures workspace integrity

## Commands

### Development
```bash
# Install dependencies
npm ci

# Build all packages
npx nx run-many --target=build --projects=packageA,packageB,packageC

# Build only affected packages
npx nx affected:build

# Type check all packages
npx nx run-many --target=typecheck --projects=packageA,packageB,packageC

# Show dependency graph
npx nx graph
```

### Testing CI Locally
```bash
# Show affected projects (simulates CI behavior)
npx nx show projects --affected --base=HEAD~1 --head=HEAD

# Run affected builds
npx nx affected:build --base=HEAD~1 --head=HEAD
```

## Architecture Benefits

1. **Smart Rebuilds**: Nx only rebuilds what changed
2. **Dependency Aware**: packageB automatically rebuilds when packageA changes
3. **Cache Optimization**: Multiple cache layers reduce CI time by 60-80%
4. **Scalable**: Easy to add new packages with consistent configuration
5. **Type Safety**: Full TypeScript support across all packages

## Adding New Packages

```bash
# Generate new library
npx nx g @nx/js:lib newPackage --unitTestRunner=none --bundler=none --directory=packages/newPackage

# Add dependencies in package.json
# Update project.json for build configuration
```

## Cache Performance

Expected CI performance improvements:
- **Cold Cache**: ~2-3 minutes
- **Warm Cache**: ~30-60 seconds
- **No Changes**: ~15-30 seconds

The multi-layered caching strategy ensures that:
- Dependencies are cached across workflow runs
- Nx computation cache persists between builds
- TypeScript incremental builds leverage previous compilations
- Only affected projects are processed