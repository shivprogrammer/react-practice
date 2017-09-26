var React = require('react');

class Battle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneName = '',
      playerTwoName = '',
      playerOneImage = null,
      playerTwoImage = null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    this.setState(function() {

    })
  }

  render() {
    return (
      <div>
        Battle!
      </div>
    )
  }
}

module.exports = Battle;
