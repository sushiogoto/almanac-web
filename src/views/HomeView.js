import React                      from 'react';
import { bindActionCreators }     from 'redux';
import { connect }                from 'react-redux';
import newsActions, { fetchNews } from 'actions/news';
import { Link }                   from 'react-router';
import { News }                   from 'containers/News';

// We define mapStateToProps and mapDispatchToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html

const mapStateToProps = (state) => ({
  routerState : state.router,
  news: () => {
    fetchNews()
    .then( (newsList) => {
      debugger;
      return newsList;
    });
  }
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(newsActions, dispatch)
});

export class HomeView extends React.Component {

  static propTypes = {
    actions  : React.PropTypes.object,
    news: React.PropTypes.array.isRequired
  }

  constructor (props) {
    super(props);
    // dispatch(fetchNews().then( (newsList) => {
    //   return newsList;
    // }))
    // props.actions.fetchNews().then( (newsList) => {
    // });
  }

  // componentDidMount() {
  //   const { dispatch, selectedReddit } = this.props
  //   dispatch(this.props.)
  // }

  render () {
    return (
      <div className='container text-center'>
        <h1>Almanac News</h1>

        <h2>News Feed</h2>
        <News data={ this.props.news } />
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
