const childrenStyles = {
	marginTop: 20,
	padding: '0 .5em', 
	fontSize: 12
}
const itemStyles = {
	display: 'inline-block', 
	margin: '0 .5em'
}

export default function TabData(data) {
	const result = {
		icon: data.icon, 
		title: data.title
	}

	if (Array.isArray(data.children)) {
		result.children = data.children.map((item, key) => {
			return <div key={key} style={itemStyles}>{item}</div>
		})
	} else {
		result.children = <div style={itemStyles}>{data.children}</div>
	}
	result.children = <div style={childrenStyles}>{result.children}</div>

	return result
}
