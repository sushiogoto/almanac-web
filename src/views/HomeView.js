import React                      from 'react';
import { bindActionCreators }     from 'redux';
import { connect }                from 'react-redux';
import newsActions, { fetchNews, receiveNews } from 'actions/news';
import { Link }                   from 'react-router';
import { News }                   from 'containers/News';

// We define mapStateToProps and mapDispatchToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html

const mapStateToProps = (state) => ({
  routerState : state.routing,
  news: state.news.data,
  isFetching: state.news.isFetching
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(newsActions, dispatch)
});

export class HomeView extends React.Component {

  static propTypes = {
    actions  : React.PropTypes.object,
    data: React.PropTypes.array
  }

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.actions.fetchNews();
  }

  componentWillReceiveProps (nextProps) {
    // if (this.props.news !== nextProps.news) {
    //     // Optionally do something with data
    // }

    // if (!nextProps.isFetching) {
    //     this.startPoll();
    // }
    nextProps;
  }
  render () {
    return (
      <div className='container text-center'>
        <h1>Almanac News</h1>

        <h2>News Feed</h2>
        <News data={this.props.news} />
        <hr />
        <Link to='/about'>Go To About View</Link>
        <br/>
        {/* Demo of bit.ly shortened URL, random Trump news article */}
        <Link to='/news/1RztcJr'>Demo Unique News Page View</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
