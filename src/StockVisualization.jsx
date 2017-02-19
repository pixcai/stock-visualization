import { TabCard, Grade, Composite } from './components'
import helpers from './helpers'
import styles from './StockVisualization.css'

export default class StockVisualization extends React.PureComponent {
	render () {
		return (
			<div className={styles['container']}>
				<div className={styles['container-top']}>
					<div className={styles['container-top-left']}>
						<TabCard data='/api/top' target={helpers.TabCardData} />
					</div>
					<div className={styles['container-top-right']}>
						<Grade data='/api/top' target={helpers.GradeData} />
					</div>
				</div>
				<div className={styles['container-bottom']}>
					<Composite data='/api/bottom/left' target={helpers.CompositeData} />
					<Composite data='/api/bottom/center' target={helpers.CompositeData} />
					<Composite data='/api/bottom/right' target={helpers.CompositeData} />
				</div>
			</div>
		)
	}
}
