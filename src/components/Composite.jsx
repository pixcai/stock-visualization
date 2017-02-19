import Block from '../containers/Block'
import styles from './Composite.css'

export default class Composite extends React.PureComponent {
	render() {
		const { icon, title, children, fa, fb, fc } = this.props.data

		return (
			<div className={styles['composite']}>
				<Block>
					<div className={styles['composite-wrap']}>
						<div className={styles['composite-title']}>
							<strong style={{backgroundImage: `url(${icon})`}}>{title}</strong>
							<span>{fa}</span>
							<span>{fb}</span>
							<span>{fc}</span>
						</div>
						<div className={styles['composite-chart']}>{children}</div>
					</div>
				</Block>
			</div>
		)
	}
}

Composite.propTypes = {
	data: React.PropTypes.shape({
		icon: React.PropTypes.string, 
		title: React.PropTypes.string, 
		children: React.PropTypes.element, 
		fa: React.PropTypes.string, 
		fb: React.PropTypes.string, 
		fc: React.PropTypes.string, 
	}).isRequired
}
