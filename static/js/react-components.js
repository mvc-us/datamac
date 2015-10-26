"use strict";

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var LargeStatus = React.createClass({
	displayName: "LargeStatus",

	getInitialState: function getInitialState() {
		var number = getRandomInt(this.props.min, this.props.max);
		return { number: number };
	},
	componentDidMount: function componentDidMount() {
		var reactObj = this;
		setInterval(function () {
			var curNumber = reactObj.state.number;
			var flux = reactObj.props.flux;
			reactObj.setState({ number: getRandomInt(curNumber - flux, curNumber + flux + 2) });
		}, 1000);
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "col-xs-9 text-right" },
			React.createElement(
				"div",
				{ className: "huge" },
				this.state.number
			),
			React.createElement(
				"div",
				null,
				this.props.title
			)
		);
	}
});

ReactDOM.render(React.createElement(LargeStatus, { min: 130, max: 350, title: "Nearby Devices", flux: 5 }), document.getElementById("nearby-devices"));

