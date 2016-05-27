import React from "react";
import update from "react-addons-update";

import Values from "../../config/values";
import Select from "./Select";

const Create = React.createClass({
	mixins: [ Values ],
	getInitialState: function () {
		return this.props.order_presets;
	},
	sanitizeValues: function (data) {
		let result = {};

		data.name.value = this.refs.name.value;
		data.note.value = this.refs.note.value;

		for (let prop in data) {
			result[prop] = data[prop].value;
		}
		return result;
	},
	setFormPrestine: function () {
		this.replaceState(presets);
	},
	onOrderSubmit: function (e) {
		e.preventDefault();

		this.props.onOrder(this.sanitizeValues(this.state));
	},
	updateValues: function (name, value) {
		let newState = update(this.state, {
			[name]: {
				value: { $set: value }
			}
		});

		this.setState(newState);
	},
	render: function () {
		return (
			<form className="create-order" onSubmit={this.onOrderSubmit}>
				<div className="row">

					<div className="ten column">
						<h5>
							Complete the form to place the order!
						</h5>
					</div>

					<div className="ten column">
						<input 
						ref="name"
						autoComplete="off" 
						type="text" 
						required="required" 
						placeholder={this.state.name.placeholder} 
						defaultValue={this.state.name.value} />
					</div>

					<div className="ten column">
						<label>What coffee whould you like?</label>
						<Select data={this.state.coffee} classname={"coffee"} name={"coffee"} onUpdate={this.updateValues}/>
					</div>

					<div className="ten column">
						<label>How many shots?</label>
						<Select data={this.state.shots} classname={"shots"} name={"shots"} onUpdate={this.updateValues}/>
					</div>

					<div className="ten column">
						<label>How hot?</label>
						<Select data={this.state.temp} classname={"temp"} name={"temp"} onUpdate={this.updateValues} />
					</div>

					<div className="ten column">
						<label>Diary?</label>
						<Select data={this.state.diary} classname={"diary"} name={"diary"}  onUpdate={this.updateValues}/>
					</div>

					<div className="ten column">
						<label>Flavour?</label>
						<Select data={this.state.flavour} classname={"flavour"} name={"flavour"}  onUpdate={this.updateValues}/>
					</div>

					<div className="ten column">
						<input
						ref="note"
						autoComplete="off" 
						type="text" 
						placeholder={this.state.note.placeholder} 
						defaultValue={this.state.note.value} />
					</div>

					<div className="ten column">
						<button className="button-primary" type="submit" value="Post">Place order</button>
					</div>

				</div>
			</form>
		);
	}
});

export default Create;