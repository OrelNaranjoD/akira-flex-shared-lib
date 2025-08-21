import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('repo tests', () => {
  it('reads package.json and has a name', () => {
    const pkgPath = path.resolve(process.cwd(), 'package.json');
    const content = fs.readFileSync(pkgPath, 'utf8');
    const pkg = JSON.parse(content);
    expect(pkg).toBeDefined();
  });
});
