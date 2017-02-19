const options = [{
	tooltip: {
		trigger: 'item'
	}, 
	xAxis: [{
		type: 'category', 
		data: ['跌停', '-8%', '-6%', '-4%', '-2%', '0', '2%', '4%', '6%', '8%', '涨停']
	}], 
	yAxis: {
		type: 'value', 
		axisLine: {
			show: false
		}, 
		axisTick: {
			show: false
		}
	}, 
	series: [{
		name: '涨跌分布', 
		type: 'bar', 
		label: {
			normal: {
				show: true, 
				position: 'top', 
				textStyle: {
					color: '#000000'
				}
			}
		}, 
		itemStyle: {
			normal: {
				color: '#59b881'
			}
		}, 
		barMaxWidth: 22
	}]
}, {
	tooltip: {
		trigger: 'axis'
	}, 
	xAxis: {
		type: 'category', 
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
	series: [{
		name: '跌停', 
		type: 'line', 
		showSymbol: false, 
		itemStyle: {
			normal: {
				color: '#3aa425'
			}
		}
	}, {
		name: '涨停', 
		type: 'line', 
		showSymbol: false, 
		itemStyle: {
			normal: {
				color: '#e93030'
			}
		}
	}, {
		name: '五日平均涨停', 
		type: 'line', 
		showSymbol: false, 
		itemStyle: {
			normal: {
				color: '#b6b6b6'
			}
		}
	}]
}, {
	tooltip: {
		trigger: 'axis'
	}, 
	xAxis: {
		type: 'category',  
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
		}, 
		axisLabel: {
			formatter: '{value}%'
		}
	}, 
	series: [{
		name: '今日收益', 
		type: 'line', 
		showSymbol: false, 
		itemStyle: {
			normal: {
				color: '#579bf0'
			}
		}
	}]
}]

export default function TabCardChart(index, data) {
	if (index >= options.length) {
		index = 0
	}
	switch (index) {
		case 0: 
			options[index].series[0].data = data
			break
		case 1:
			options[index].xAxis.data = data[0]
			options[index].series.forEach((line, i) => {
				line.data = data[1][i]
			})
			break
		case 2:
			options[index].xAxis.data = data[0]
			options[index].series[0].data = data[1]
			break
	}

	return options[index]
}
