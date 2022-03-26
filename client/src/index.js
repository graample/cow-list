import React from 'react';
import ReactDOM from 'react-dom';
import CowList from './CowList.jsx';
import AddCow from './AddCow.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: [{
        id: 0,
        name: 'Eric',
        description: 'If you see me, then you did something wrong!',
        catchphrase: 'bzzzzz'
      }]
    }
  }

  componentDidMount() {
    // read all cow data
    axios('/cows')
    .then((res) => {
      // console.log(res.data);
      this.setState({
        cows: res.data
      })
    })
  }

  handleAdd = (query) => {
    // console.log('sending: ', query);
    axios.post('/cows/add', { query })
    .then(
      axios('/cows')
    .then((res) => {
      // console.log(res.data);
      this.setState({
        cows: res.data
      })
    })
    )
  }

  render() {
    return (
      <div>
        <h2>There is no cow list</h2>
        <AddCow handler={this.handleAdd}/>
        <CowList cows={this.state.cows}/>
      </div>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));