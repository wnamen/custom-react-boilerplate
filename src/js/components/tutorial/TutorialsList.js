import React, { Component }         from 'react';
import { connect }                  from 'react-redux';

import { fetchTutorials }                from '../../actions/tutorials';

@connect((store) => {
  return {
    tutorials: store.tutorials.tutorials,
  };
})

class TutorialsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    this.props.dispatch(fetchTutorials())
  }

  render = () => {
    const { tutorials } = this.props;
    const mappedTutorials = tutorials.map(tutorial => <a class="button-empty medium-vertical-margin electric-blue-border small-border" key={tutorial._id} href={tutorial.url} target="_blank">{tutorial.name}</a>)

    return (
      <div class="flex-row-center large-vertical-margin">
        { mappedTutorials }
      </div>
    )
  }
}

export default TutorialsList;
