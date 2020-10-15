import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';


class App extends React.Component {

  state = { images: [] };

  onSearchSubmit = async text => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {query: text},
      headers: {
        Authorization: 'Client-ID Erva7o5Z_A5ZkgEiy48g_opci9k3a6ZRuwPUzwpIb3M'
      }
    })
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App;