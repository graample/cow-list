import React from 'react';

class AddCow extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      queryString: ''
    }
  }

  onChange(event) {
    event.preventDefault();
    this.state.queryString = event.target.value;
  }

  onSubmit(event) {
    event.preventDefault();
    var info = [this.state.queryString];
    var description = '';
    var input = prompt('Give this cow a description');
    description = input;
    info.push(description);
    info.push('mooooo');
    // console.log(info);
    this.props.handler(info);
  }

  render () {
    return (
      <div>
        Add a cow...
        <form type="text">
          <input type="text" onChange={this.onChange}/>
          <button onClick={this.onSubmit}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddCow;