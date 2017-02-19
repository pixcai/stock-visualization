const option = {
	series: [{
		name: '大盘评级', 
		type: 'pie', 
		data: [{
			itemStyle: {
				normal: {
					color: '#59b881'
				}
			}
		}, {
			itemStyle: {
				normal: {
					color: '#f5f5f5'
				}
			}
		}],
		clockwise: false, 
		animation: false, 
		labelLine: {
			normal: {
				show: false
			}
		}, 
		radius: ['75%', '90%'], 
		silent: true
	}]
}

export default function GradeChart(level) {
	option.series[0].data[0].value = level * 10
	option.series[0].data[1].value = 100 - level * 10

	return option
}
