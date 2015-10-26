function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var LargeStatus = React.createClass({
	getInitialState: function() {
		var number = getRandomInt(this.props.min, this.props.max);
		return {number: number};
	},
	componentDidMount: function() {
		var reactObj = this;
		setInterval(function() {
			var curNumber = reactObj.state.number;
			var flux = reactObj.props.flux;
			reactObj.setState({number:getRandomInt(curNumber - flux, curNumber + flux + 2)});
		}, 1000);
	},
	render: function () {
		return (
			<div className="col-xs-9 text-right">
                <div className="huge">{this.state.number}</div>
                <div>{this.props.title}</div>
            </div>);
	}
});

ReactDOM.render(
	<LargeStatus min={130} max={350} title={"Nearby Devices"} flux={5}/>,
	document.getElementById("nearby-devices"));