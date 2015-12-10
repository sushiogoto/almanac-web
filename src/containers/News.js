import React, { Component } from 'react';
import { NewsList }         from 'components/NewsList';

export class News extends Component {

  static propTypes = {
    data: React.PropTypes.object.isRequired
  }

  // { const newsList = this.props.data.then((news) => {
  //     news.data.map(function (newsItem) {
  //       return newsItem;
  //     });
  //   });
  // }

  render () {
    return (
      <section>
        <NewsList data={ this.props.data } />
      </section>
    );
  }
}

export default News;
