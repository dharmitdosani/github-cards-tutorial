import { Fragment, Component } from 'react';
import Card from './Card.js';
import Form from './Form.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  
  addNewProfile = (profile) => {
    this.setState({
      users: [profile, ...this.state.users]
    });
  };

  render() {
    return (
      <Fragment>
        <h1>Github Cards App</h1>
        <Form onSubmit={this.addNewProfile}/>
        {this.state.users.map((user) => (
          <Card {...user} key={user.id} />
        ))}
      </Fragment>
    );
  }
}

export default App;
