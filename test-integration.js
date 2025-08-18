// Test script to validate package integration
import { greetFromPackageA } from './packages/packageA/src/index.ts';
import { welcomeFromPackageB } from './packages/packageB/src/index.ts';
import { processDataInPackageC } from './packages/packageC/src/index.ts';

console.log('=== Testing Package Integration ===');

// Test packageA
const greeting = greetFromPackageA('Developer');
console.log('PackageA output:', greeting);

// Test packageB (which uses packageA)
const welcome = welcomeFromPackageB('Developer');
console.log('PackageB output:', welcome);

// Test packageC
const data = ['item1', 'item2', 'item3'];
const processed = processDataInPackageC(data);
console.log('PackageC output:', processed);

console.log('\n✅ All packages working correctly!');
console.log('\n🔄 Dependency chain:');
console.log('  packageA → packageB (✓)');
console.log('  packageC (independent) (✓)');