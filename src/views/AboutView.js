import React from 'react';
import { Link } from 'react-router';

/* components */
import { Tools } from 'components/Tools/Tools';

export class AboutView extends React.Component {
  render () {
    return (
      <div className='container text-center'>
        <h1>About</h1>
        <hr />
        <Tools />
        <hr />
        <hr />
        <Link to='/'>Back To Home View</Link>
        <Link to='/news/123'>Fake News</Link>

      </div>
    );
  }
}

export default AboutView;
