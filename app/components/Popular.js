import React from 'react';

function SelectLanguage (props) {
  let languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"]
  return (
    <ul className="languages">
      {languages.map((lang) => {
        return(
          <li style={lang === props.selectedLanguage ? {color: '#d0021b'} : null } key={lang} onClick={props.onSelect.bind(null, lang)}>
            {lang}
          </li>
        )
      })}
    </ul>
  )
}


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

    return(
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    )
  }
}

export default Popular;
