import React, { Component } from 'react';
import moment from 'moment';

import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';
import api from '../../services/api';

import logo from '../../assets/logo.png';

export default class Main extends Component {

  state = {
    repositories: [],
    repositoryInput: '',
    repositoryError: false,
    loading: false
  }

  componentDidMount() {
    const localRepos = JSON.parse(localStorage.getItem('repositories')) || [];
    this.setState({ repositories: localRepos });
  }

  handleAddRepository = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    try {
      const { data: repository } = await api.get(`repos/${this.state.repositoryInput}`);
      repository.lastCommit = moment(repository.pushed_at).fromNow();
      await this.setState({
        repositories: [...this.state.repositories, repository],
        repositoryInput: ''
      })
      localStorage.setItem('repositories', JSON.stringify(this.state.repositories));
    } catch (error) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  deleteRepository = (id) => {
    const repos = this.state.repositories;
    const repositories = repos.filter(item => item.id !== id);
    localStorage.setItem('repositories', JSON.stringify(repositories));
    this.setState({ repositories });
  }

  updateRepository = async (owner, name) => {
    try {
      const { repositories } = this.state;
      const repositoryIndex = repositories.findIndex(item => item.name === name);
      const { data: repository } = await api.get(`repos/${owner}/${name}`);
      repository.lastCommit = moment(repository.pushed_at).fromNow();
      repositories[repositoryIndex] = repository;
      await this.setState({
        repositories,
      });
      localStorage.setItem('repositories', JSON.stringify(this.state.repositories));
    } catch (error) {
      this.setState({ repositoryError: true });
    }
  }

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
            placeholder="Usuário/repositório" />
          <button type="submit">{this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'Ok'}</button>
        </Form>

        <CompareList repositories={this.state.repositories} o
          nDelete={this.deleteRepository}
          onUpdate={this.updateRepository}
        />
      </Container>
    )
  }
}
