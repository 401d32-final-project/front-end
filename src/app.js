import React from 'react';
import Header from './components/topAndBottom/header'
import Footer from './components/topAndBottom/footer'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: 'News Hub',
      copywrite: 'Boiz Inc',

    }
  }

  render() {
    return(
      <React.Fragment>
        < Header title={this.state.title} />
        <Footer display={this.state.copywrite} />
      </React.Fragment>
    )
  }
}

export default App;

