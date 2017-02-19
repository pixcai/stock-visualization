import styles from './Tab.css'

export default class Tab extends React.PureComponent {
	render() {
		const { icon, title, children } = this.props.data

		return (
			<div className={this.props.className}>
				<h4 className={styles['tab-title']} style={{backgroundImage: `url(${icon})`}}>{title}</h4>
				{children}
			</div>
		)	
	}
}

Tab.propTypes = {
	data: React.PropTypes.shape({
		icon: React.PropTypes.string, 
		title: React.PropTypes.string, 
		children: React.PropTypes.element
	}).isRequired, 
	className: React.PropTypes.string
}
