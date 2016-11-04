import React from 'react';
import { Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Checkbox,
  Button } from 'react-bootstrap'; 

  class Chat extends React.Component {
   render() {
    if (this.props.messageoutput && this.props.messageinput) {
      return (
       <div>
       <Col lg={12}>
       
       <Col lg={10} lgPush={1} className='msg-box msg-box-output'>
       <span>{this.props.messageinput} </span><img src="http://localhost:8080/App/images/user.png" alt="Image" className="user-img" />
       </Col>
       <Col lg={10} lgPush={1} className='msg-box'><img className="imgRight" src="http://localhost:8080/App/images/con-logo.png" alt="Image" /> {this.props.messageoutput}</Col>
       </Col>
       </div>
       );
     }
      else if(!this.props.messageinput) {
      return (
      <div>
      <Col lg={12}>
      <Col lg={10} lgPush={1} className='msg-box'><img className="float-left" src="http://localhost:8080/App/images/con-logo.png" alt="Image" />
       <span>{this.props.messageoutput}</span>
       </Col>
      </Col>
      </div>
      );
    }
      else if(!this.props.messageoutput) {
      return (
      <div>
      <Col lg={12}>
      <Col lg={10} lgPush={1} className='msg-box msg-box-output'>
       <span>{this.props.messageinput} </span><img src="http://localhost:8080/App/images/user.png" alt="Image" className="user-img" />
       </Col>
      </Col>
      </div>
      );
    }
  }
}


export default Chat;
