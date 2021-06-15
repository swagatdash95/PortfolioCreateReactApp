import React, { Component } from 'react';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="slide">
        <div className="content first-content">
          <div className="container-fluid">
              <div className="col-md-3">
                  <div className="author-image"><img src="./img/author_image.png" alt="Author" /></div>
              </div>
              <div className="col-md-9">
                  <h2>Swagat Dash</h2> <br/>
                  <h3>Software Developer</h3>
                  <p>This is my portfolio. Lets people know of who I am and who I have been able to be till now. Notes down some insights of my professional venture and the journey so far.</p>
              </div>
          </div>
        </div>
      </div> );
    }
}
 
export default Home;