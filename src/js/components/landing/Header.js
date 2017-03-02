import React, { Component } from "react"
import $ from "jquery"


// IMPORT OTHER COMPONENTS AND DEPENDENCIES HERE

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // COMPONENT STATE DECLARTION HERE
    }
  }
  //LOGIC HERE: CHECK OUT COMPONENT MOUNTING IF YOU WANT TO TRY IT OUT

  render(){
    //RENDER LOGIC HERE

    return(
      <div class="sixteen">
        <section class="header-container electric-blue-light-background flex-column-center">
          <h1 class="font-size-four">React Boilerplate</h1>
          <h6 class="gray font-size-one-and-half">Start building with React today!</h6>
        </section>
      </div>
    )
  }
}
