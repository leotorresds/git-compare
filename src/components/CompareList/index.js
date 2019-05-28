import React from 'react';
import PropTypes from 'proptypes';

import { Container, Repository, BtnGroup } from './styles';

const CompareList = ({ repositories, onDelete, onUpdate }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>

        <ul>
          <li>{repository.stargazers_count} <small>stars</small></li>
          <li>{repository.forks_count} <small>forks</small></li>
          <li>{repository.open_issues_count} <small>issues</small></li>
          <li>{repository.lastCommit}<small>last commit</small></li>
        </ul>
        <BtnGroup>
          <button onClick={() => onUpdate(repository.owner.login, repository.name)} className="btn-refresh"><i className="fa fa-spinner" /></button>
          <button onClick={() => onDelete(repository.id)} className="btn-delete"><i className="fa fa-trash" /></button>
        </BtnGroup>

      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string
    }),
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    open_issues_count: PropTypes.number,
    pushed_at: PropTypes.string
  }))
}

export default CompareList;
