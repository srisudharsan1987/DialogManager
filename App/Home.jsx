import React from 'react';
import $ from "jquery";
import App from './App.jsx';
import { Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Checkbox,
  Button } from 'react-bootstrap'; 

class Home extends React.Component {
	constructor(props) {
	      super(props);
        this.state = {showDialog : false};
	   };
      submitOk() {
          this.setState({showDialog : true});
	    }
     componentDidMount() {
          this.setState({showDialog : false});
          this.submitOk = this.submitOk.bind(this);
      }
     render() {
        return (
           <Col>
             <Button className= {"btn-"+ !this.state.showDialog} bsStyle="info" onClick = {this.submitOk} >OK</Button>
             <App isShow = {this.state.showDialog} />        
           </Col>
           
        );
     }
  }

export default Home;