import React, { Component } from 'react';

class BodyData extends Component {
	state = {
		query: '',
		data: [],
		filteredData: [],
	}

	handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData
      };
    });
  };

  	getData = () => {
		fetch(`http://localhost:4000/restaurants`)
		.then(response => response.json())
		.then(data => {
			const { query } = this.state;
			const filteredData = data.filter(element => {
				return element.name.toLowerCase().includes(query.toLowerCase());
			});

		  	this.setState({
				data,
			  	filteredData
		  	});
	  	});
  	};


	componentWillMount() {
		this.getData();
	}
	render() {
		return (
			<div className="searchForm">
				<form>
       				<input type="text" id="filter" placeholder="Search for..." ref={input => this.search = input} onChange={this.handleInputChange}/>
     			</form>
				<div>
					{
						this.state.filteredData.map((i , key) => <p key={i.id}>{i.name}</p>)
					}
				</div>
			</div>
		)
	}
}


export default BodyData;
