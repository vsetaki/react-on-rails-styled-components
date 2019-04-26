import PropTypes from 'prop-types';
import React from 'react';

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  componentDidMount() {
    const { name } = this.props;
    setTimeout(() => {
      this.setState({ name: `${name.split('').reverse().join('').toLowerCase()}`});
    }, 1500);
  }

  render() {
    return (
      <div>
        <h3>
          Hello, {this.state.name}!
        </h3>
      </div>
    );
  }
}
