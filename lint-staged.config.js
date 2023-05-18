const path = require('path')

// MEMO: https://nextjs.org/docs/pages/building-your-application/configuring/eslint#lint-staged
const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '*.{js,ts,tsx}': [
    buildEslintCommand,
    "bash -c 'npm run types:check'", // MEMO: https://github.com/okonet/lint-staged/issues/825
    'npm run format:check',
  ],
  '*.{json,md,yml}': 'npm run format:check',
  'package.json': ['sort-package-json'],
}
