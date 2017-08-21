import React from 'react';
import api from '../utility/api';

function SelectLanguage (props) {
  console.log(props);
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

function RepoGrid (props) {
  return(
    <ul className="popular-list">
      {props.repos.map((repo, index) => {
        return (
          <li key={repo.name} className="popular-item">
            <div className="popular-rank">#{index + 1}</div>
            <ul className="space-list-item">
              <li>
                <img className="avatar" src={repo.owner.avatar_url} />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars </li>
            </ul>
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
      selectedLanguage: 'All',
      repos: null
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang){
    this.setState({selectedLanguage: lang, repos: null});
    api.fetchPopularRepos(lang).then((res) =>{
        this.setState({repos: res});
      })
  }

  render() {

    return(
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!this.state.repos ? <p> LOADING </p> :   <RepoGrid repos={this.state.repos}/>}
      </div>
    )
  }
}

export default Popular;
