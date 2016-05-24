import React from "react";
import Select from "./select";

const Create = React.createClass({
	getInitialState: function () {
		return {
			name: {
				placeholder: "Your name please",
				value: ""
			},			
			note: {
				placeholder: "Add a pleasant note",
				value: ""
			},
			coffee: {
				value: "Americano",
				list: [
					{ title: "Americano", value: "Americano"},
					{ title: "Americano Misto", value: "Americano Misto"},
					{ title: "Cappuccino", value: "Cappuccino"},
					{ title: "Chai Latte", value: "Chai Latte"},
					{ title: "Espresso", value: "Espresso"},
					{ title: "Flat White", value: "Flat White"},
					{ title: "Latte", value: "Latte"},
					{ title: "London Fog", value: "London Fog"},
					{ title: "Machiatto", value: "Machiatto"},
					{ title: "Mocha", value: "Mocha"},
				]
			},
			shots: {
				value: 0,
				list: [
					{title: "No shots", value: 0 },
					{title: "1 shot", value: 1 },
					{title: "2 shots", value: 2 },
					{title: "3 shots", value: 3 },
					{title: "4 shots", value: 4 }
				]
			},
			temp: {
				value: "Warm",
				list: [
					{ title: "Cold", value: "Cold"},
					{ title: "Warm", value: "Warm"},
					{ title: "Hot", value: "Hot"}
				]
			},
			diary: {
				value: "None",
				list: [
					{ title: "None", value: "None" },
					{ title: "Milk", value: "Milk" },
					{ title: "Soy", value: "Soy" },
					{ title: "Almond", value: "Almond" },
					{ title: "Coconut", value: "Coconut" }
				]
			},
			flavour: {
				value: "None",
				list: [
					{ title: "None", value: "None" },
					{ title: "Flavour of the week", value: "Flavour of the week" },
					{ title: "Vanilla", value: "Vanilla" },
					{ title: "Hazelnut", value: "Hazelnut" },
					{ title: "Caramel", value: "Caramel" },
					{ title: "Honey", value: "Honey" },
					{ title: "Cinnamon", value: "Cinnamon" },
					{ title: "Cardamom", value: "Cardamom" },
					{ title: "Peppermint", value: "Peppermint" }
				]
			}
		};
	},
	onOrderSubmit: function (e) {
		e.preventDefault();
		console.log(this.state);
	},
	render: function () {
		return (
		    <form className="create-order" onSubmit={this.onOrderSubmit}>

		      <div>
		        Complete the form to place the order!
		      </div>

		      <div>
		          <input 
		          autoComplete="off" 
		          className="name" 
		          type="text" 
		          placeholder={this.state.name.placeholder} 
		          defaultValue={this.state.name.value} />
		      </div>

		      	<div>
			        <div>What coffee whould you like?</div>
			        <Select data={this.state.coffee} classname={"coffee"} />
		        </div>

				<div>
		        	<div>How many shots?</div>
			        <Select data={this.state.shots} classname={"shots"} />
		        </div>

				<div>
		        	<div>How hot?</div>
			        <Select data={this.state.temp} classname={"temp"} />
		        </div>

				<div>
		        	<div>Diary?</div>
		        	<Select data={this.state.diary} classname={"diary"} />
		        </div>

				<div>
		        	<div>Flavour?</div>
		        	<Select data={this.state.flavour} classname={"flavour"} />
		        </div>

		      <div>
				<input 
		          autoComplete="off" 
		          className="note" 
		          type="text" 
		          placeholder={this.state.note.placeholder} 
		          defaultValue={this.state.note.value} />
		      </div>

		      <button type="submit" value="Post">Place order</button>
        	</form>
		);
	}
});

export default Create;