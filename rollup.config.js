import typescript from '@rollup/plugin-typescript';

export default {
	input: './src/index.ts',
	output: [
		{
			file: './build/index.mjs',
			format: 'esm'
		},
		{
			file: './build/index.js',
			format: 'cjs'
		}
	],
	plugins: [
		typescript()
	]
};
