import request from '../lib/request'

export default (Component) => {
	class PaddingData extends React.Component {
		constructor() {
			super()
			this.state = {
				data: {}
			}
		}

		render() {
			const { data, target, ...others } = this.props

			return <Component data={this.state.data} {...others} />
		}

		componentDidMount() {
			const target = this.props.target || (result => result)

			request(this.props.data).then((result) => {
				this.setState({
					data: target(result)
				})
			})
		}
	}

	PaddingData.propTypes = {
		data: React.PropTypes.oneOfType([
			React.PropTypes.object, 
			React.PropTypes.string
		]).isRequired
	}

	return PaddingData
}
