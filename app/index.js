import React from 'react';
import ReactDOM from 'react-dom';

require('./index.css')

class App extends React.Component {
  render(){
    return(
      <div>
        what the fk mate
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));


export default App;
