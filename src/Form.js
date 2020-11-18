import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then((response) => {
          this.props.onSubmit(response.data);
          this.setState({ userName: '' });
      })
      .catch((error) => {
        window.alert('User not found');
        this.setState({ userName: '' });
      })
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          margin: 10,
          padding: 20,
          backgroundColor: '#E6E6E6',
          width: '30%',
          borderRadius: 8
        }}
      >
        <input
          type="text"
          placeholer="Github Username"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;