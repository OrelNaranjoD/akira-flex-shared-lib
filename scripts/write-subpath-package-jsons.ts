import { writeFileSync } from 'fs';
writeFileSync('dist/cjs/package.json', JSON.stringify({ type: 'commonjs' }, null, 2));
writeFileSync('dist/esm/package.json', JSON.stringify({ type: 'module' }, null, 2));
