
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  ignorePatterns:[".eslintrc.cjs"],
  extends: [
    // 'eslint:recommended',
    'eslint:all',

  ],
  rules: {
  'strict':'off',
  'linebreak-style':'off',
  'no-unused-vars':'off'
  },
}
