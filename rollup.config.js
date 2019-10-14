const babel = require('rollup-plugin-babel');
const sucrase = require('rollup-plugin-sucrase');

module.exports = {
  external: ['prop-types', 'react', 'react-dom', 'react-textarea-autosize', 'styled-components'],
  output: [
    {
      file: 'build/main.js',
      format: 'cjs',
    },
    {
      file: 'build/module.js',
      format: 'esm',
    },
  ],
  plugins: [
    // transpiler just for JSX -> JS
    // use babel + plugins on the _consumer_ side, if needed
    babel({
      exclude: 'node_modules/**',
      plugins: ['styled-components'],
      babelrc: false,
    }),
    sucrase({
      include: ['**/*.js'],
      exclude: ['node_modules/**'],
      transforms: ['jsx'],
    }),
    // these might be needed eventually, but are not currently required
    //resolve({ preferBuiltins: false }),
    //commonjs(),
    //json(),
  ],
};
