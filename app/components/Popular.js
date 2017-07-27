import React from 'react';

class Popular extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang){
    this.setState({selectedLanguage: lang})
  }

  render() {
    let languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"]
    return(
      <ul className="languages">
        {languages.map((lang) => {
          return(
            <li style={lang === this.state.selectedLanguage ? {color: '#d0021b'} : null } key={lang} onClick={this.updateLanguage.bind(null, lang)}>
              {lang}
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Popular;
