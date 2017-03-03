import React             from 'react';
import { IndexLink }     from 'react-router';

class NotFound extends React.Component {
  render = () => {
    return (
    	<div class="ten offset-by-three white-background card flex-row-center">
				<div class="nine columns flex-column-center">
					<h1 class="electric-blue font-size-four small-vertical-margin"><strong class="largeText">404 Error</strong></h1>
					<h4 class="electric-blue font-size-one-and-half medium-vertical-margin">Oh no! This page is missing</h4>
			  	<IndexLink to="/" class="active button-empty button-fill large-vertical-margin">Take me home!</IndexLink>
				</div>
			</div>
    );
  }
}

export default NotFound;
