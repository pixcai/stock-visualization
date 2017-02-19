import echarts from 'echarts'
import GradeChart from '../charts/grade'

const defaultData = {
	title: '大盘评级', 
	label: '投资建议', 
	tip: '大盘风险较大，请谨慎参与'
}

const chartStyle = {
	width: '100%', 
	height: '100%'
}

export default function GradeData(data) {
	let chart = null

	defaultData.grade = data.dppj_data
	defaultData.children = <div style={chartStyle} ref={e => {
		if (e) {
			chart = echarts.init(e)
			chart.setOption(GradeChart(defaultData.grade))
		} else {
			chart.dispose()
		}
	}} />

	return defaultData
}
