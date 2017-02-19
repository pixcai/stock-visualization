import Block from '../containers/Block'
import styles from './Grade.css'

export default class Grade extends React.PureComponent {
	render() {
		const { title, children, grade, label, tip } = this.props.data

		return (
			<div className={styles['grade']}>
				<Block>
					<div className={styles['grade-wrap']}>
						<h4 className={styles['grade-title']}>{title}</h4>
						<div className={styles['grade-pie']}>
							<div className={styles['grade-pie-label']}><strong>{grade}</strong>分</div>
							{children}
						</div>
						<div className={styles['grade-block']}>
							<label className={styles['grade-label']}>{label}</label>
						</div>
						<div className={styles['grade-block']}>{tip}</div>
					</div>
				</Block>
			</div>
		)
	}
}

Grade.propTypes = {
	data: React.PropTypes.shape({
		title: React.PropTypes.string, 
		children: React.PropTypes.element, 
		grade: React.PropTypes.number, 
		label: React.PropTypes.string, 
		tip: React.PropTypes.string
	}).isRequired
}
