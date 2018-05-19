import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import fetch from 'cross-fetch';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  // 1.Set default state
  // 2.Set State after data ready
  // 3.Make use of that state
  state = { albums: [] };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(resp => resp.json().then(data => this.setState({ albums: data })))
      .catch(err => {
        console.error(err);
      });
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
