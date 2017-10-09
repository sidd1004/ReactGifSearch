import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import GifList from './components/gif_list';
import './styles/app.css';

import axios from 'axios';
import _ from 'lodash';

const API_KEY = "6a7d71a5ca4640f4ba987975e7405377";

class App extends Component {

  constructor() {
    super();
    this.state = {
      term: "",
      gifs: []
    };
  }

  handleSearch = _.debounce((term) => {
    const url = `https://api.giphy.com/v1/gifs/search?&q=${term.replace(/\s/g, '+')}&api_key=${API_KEY}`;
    axios.get(url)
      .then((response) => {
        this.setState({ gifs: response.data.data })
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log(url);
  }, 500);

  render() {
    return (
      <div>
        <SearchBar onSearchTerm={(term) => this.handleSearch(term)} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
