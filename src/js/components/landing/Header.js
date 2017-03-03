import React, { Component }         from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return(
      <div class="sixteen">
        <section class="header-container electric-blue-light-background flex-column-center">
          <h1 class="font-size-four small-vertical-margin">React Boilerplate</h1>
          <h6 class="gray font-size-one-and-half medium-vertical-margin">Start building with React today!</h6>
        </section>
      </div>
    )
  }
}

export default Header;
