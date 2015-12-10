import React, { Component }           from 'react';
import { NewsCard }                   from 'components/NewsCard';

export class NewsList extends Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired
  }

  render () {
    return (
        <div>
          { this.props.data.map((newsItem) => {
            return (
                <NewsCard
                  key = { newsItem.id }
                  id = { newsItem.id }
                  title = { newsItem.title }
                  abstract = { newsItem.abstract }
                  date = { newsItem.date }
                />
              );
          })
        }

        </div>
    );
  }
}

export default NewsCard;
