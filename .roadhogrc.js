const ENV = 'development'

const externals = [{
	'react': 'React', 
	'react-dom': 'ReactDOM', 
	'axios': 'axios', 
	'echarts': 'echarts'
}]

export default {
	babelExtraPlugins: [['import', {
		'libraryName': 'react'
	}]], 
	define: {
		'process.NODE_ENV': ENV
	}, 
	externals: ENV === 'development' ? [] : externals
}
