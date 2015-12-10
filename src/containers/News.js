import React, { Component } from 'react';
import { NewsList }         from 'components/NewsList';

export class News extends Component {

  static propTypes = {
    data: React.PropTypes.object.isRequired
  }

  render () {
    return (
      <section>
        <NewsList data={ this.props.data } />
      </section>
    );
  }
}

export default News;
