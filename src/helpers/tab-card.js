import echarts from 'echarts'
import TabCardChart from '../charts/tab-card-chart'
import TabData from './tab'

const defaultData = [{
	tab: {
		icon: 'http://i.thsi.cn/images/q/hssc-icons.jpg', 
		title: '涨跌分布', 
		children: null
	}, 
	content: null
}, {
	tab: {
		icon: 'http://i.thsi.cn/images/q/hssc-icons2.jpg', 
		title: '涨跌停', 
		children: null
	}, 
	content: null
}, {
	tab: {
		icon: 'http://i.thsi.cn/images/q/hssc-icons2.jpg', 
		title: '昨日涨停今日收益', 
		children: null
	}, 
	content: null
}]

const redStyle = {
	color: '#d75442'
}
const greenStyle = {
	color: '#59b881'
}
const chartStyle = {
	width: '100%', 
	height: '100%'
}

export default function TabCardData(data) {
	const result = {
		tabs: [], 
		contents: []
	}
	const charts = new Array(defaultData.length)

	defaultData[0].tab.children = [
		<span style={redStyle}>上涨：{data.zdfb_data.znum}支</span>, 
		<span style={greenStyle}>下跌：{data.zdfb_data.dnum}支</span>
	]
	defaultData[1].tab.children = [
		<span style={redStyle}>涨停：{data.zdt_data.last_zdt.ztzs}支</span>, 
		<span style={greenStyle}>跌停：{data.zdt_data.last_zdt.dtzs}支</span>
	]
	defaultData[2].tab.children = <span style={redStyle}>今日收益：{data.jrbx_data.last_zdf}</span>

	defaultData.forEach((item, i) => {
		let chartData

		switch (i) {
			case 0: 
				chartData = data.zdfb_data.zdfb
				break
			case 1: 
				chartData = [data.zdt_data.zd_time, [data.zdt_data.dtzs, data.zdt_data.ztzs, data.zdt_data.five]]
				break
			case 2: 
				chartData = [data.jrbx_data.time, data.jrbx_data.zdf]
				break
			default: 
				chartData = []
				break
		}
		result.tabs.push(TabData(item.tab))
		result.contents.push(
			<div style={chartStyle} ref={e => {
				if (e) {
					charts[i] = echarts.init(e)
					charts[i].setOption(TabCardChart(i, chartData))
				} else {
					charts[i].dispose()
				}
			}} />
		)
	})

	return result
}
