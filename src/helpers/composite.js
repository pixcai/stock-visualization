import echarts from 'echarts'
import CompositeChart from '../charts/composite'

const chartStyle = {
	width: '100%', 
	height: '100%'
}

function split(compositeData) {
	const data = compositeData.split(';').map(item => {
		return item.split(',')
	})
	const result = [[], [], [], [], []]

	data.forEach(items => {
		items.forEach((item, index) => {
			if (index === 0) {
				result[index].push(item.substr(0, 2) + ':' + item.substr(2))
			} else {
				result[index].push(parseFloat(item))
			}
		})
	})

	return result
}

function average(data) {
	let sum = 0
	let avg = 0

	data.forEach(value => sum += value)
	avg = data.length ? (sum / data.length) : sum

	return avg.toFixed(2)
}

export default function CompositeData(data) {
	const result = {
		icon: 'http://i.thsi.cn/images/q/hq-icons.jpg', 
		title: data.name
	}
	let chart = null
	const infos = split(data.data)

	result.children = <div style={chartStyle} ref={e => {
		if (e) {
			chart = echarts.init(e)
			chart.setOption(CompositeChart([infos[0], infos[1]]))
		} else {
			chart.dispose()
		}
	}} />
	result.fa = `${average(infos[1])}`
	const fb = parseFloat(data.pre)
	result.fc = `${(result.fa - fb).toFixed(2)}`
	result.fb = `${((result.fc / fb) * 100).toFixed(2)}%`

	return result
}
