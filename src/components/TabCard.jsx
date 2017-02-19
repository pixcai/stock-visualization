import Block from '../containers/Block'
import Tab from './Tab'
import tabStyles from './Tab.css'
import styles from './TabCard.css'

export default class TabCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			activeIndex: props.activeIndex || 0
		}
	}

	setActiveIndex(index) {
		this.setState({
			activeIndex: index
		})
	}

	render() {
		let data = this.props.data
		const activeIndex = this.state.activeIndex
		
		if (!data || !data.tabs || !data.contents) {
			data = {
				tabs: [], 
				contents: []
			}
		}

		return (
			<div className={styles['card']}>
				<div className={styles['card-tabs']}>
				{
					data.tabs.map((tab, key) => (
						<div key={key} onMouseEnter={() => this.setActiveIndex(key)}>
							<Tab className={tabStyles[activeIndex === key ? 'tab-active' : 'tab']} data={tab} />
						</div>
					))
				}
				</div>
				<div className={styles['card-content']}>
					<Block>{data.contents[activeIndex]}</Block>
				</div>
			</div>
		)
	}
}

TabCard.propTypes = {
	data: React.PropTypes.shape({
		tabs: React.PropTypes.array, 
		contents: React.PropTypes.array
	}).isRequired
}
