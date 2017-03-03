import React, { Component }       from 'react';
import TutorialsList              from '../components/page/TutorialsList';

class Tutorial extends React.Component {
  render = () => {
    return (
      <div class="ten offset-by-three white-background card">
        <h6 class="small-vertical-margin font-size-two">Tutorial Listings</h6>
        <TutorialsList />
      </div>
    );
  }
};

export default Tutorial;
