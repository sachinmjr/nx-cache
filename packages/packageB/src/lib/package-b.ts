import { greetFromPackageA } from '@./packageA';

export function welcomeFromPackageB(userName: string): string {
  const greeting = greetFromPackageA(userName);
  return `${greeting} - and welcome from Package B too!`;
}
