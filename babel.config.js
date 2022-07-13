module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: {
					'@assets': './src/assets',
					'@components': './src/components',
					'@constants': './src/constants',
					'@contexts': './src/contexts',
					'@custom-typings': './src/custom-typings',
					'@hooks': './src/hooks',
					'@models': './src/models',
					'@networking': './src/networking',
					'@screens': './src/screens',
					'@utils': './src/utils'
				},
				extensions: [
					'.ios.js',
					'.android.js',
					'.js',
					'.jsx',
					'.json',
					'.tsx',
					'.ts',
					'.native.js'
				]
			}
		]
	]
}
