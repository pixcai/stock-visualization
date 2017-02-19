const option = {
	tooltip: {
		trigger: 'axis', 
		formatter: '{b}<br/>{c}'
	}, 
	xAxis: {
		type: 'category', 
		axisLine: {
			onZero: false
		}, 
		axisLine: {
			show: false
		}, 
		axisTick: {
			show: false
		}
	}, 
	yAxis: {
		type: 'value', 
		axisLine: {
			show: false
		}, 
		axisTick: {
			show: false
		}
	}, 
	showSymbol: false, 
	itemStyle: {
		normal: {
			color: '#579bf0'
		}
	}, 
	series: [{
		type: 'line', 
		areaStyle: {
			normal: {
				color: '#f7fcff'
			}
		}
	}]
}

export default function CompositeChart(data) {
	option.xAxis.data = data[0]
	option.yAxis.min = Math.min(data[1])
	option.yAxis.max = Math.max(data[1])
	option.series[0].data = data[1]

	return option
}
