import React from 'react';
import $ from "jquery";
import ConversationBox from './Conversation.jsx';
import { Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Checkbox,
  Button } from 'react-bootstrap'; 

class KnowledgeCheck extends React.Component {
	constructor(props) {
	      super(props);
        this.state = {
          showDialog: '',
          showReview: '',
          logoImg: 'con-logo',
          isDone: 0
        }
	   };

     componentDidMount() {
          this.setState({showDialog: false});
          this.setState({showReview: false});
          this.viewDialogBox = this.viewDialogBox.bind(this);
          this.viewReviewBlock = this.viewReviewBlock.bind(this);
          this.addHide = this.addHide.bind(this);
          this.closeDialog = this.closeDialog.bind(this);

          
      }

      viewDialogBox(){          
          this.setState({showDialog: true, isDone: 0});
      }

      addHide(data){
          this.setState({showDialog: data});
          this.setState({showReview: true});
          this.setState({logoImg: 'open'});
      }

      viewReviewBlock(){
          this.setState({logoImg: 'close', isDone: 0 });
          this.setState({showDialog: true});
          this.setState({showReview: false});

      }

      closeDialog(){
          this.setState({showReview: true});
          this.setState({logoImg: 'open'});
          this.setState({showDialog: false});
      }

     render() {
        return (
           <div>
           <Col lg={10} className="mydiv" lgPush={1}>
              <Col lg={10} className="conv-block bgGray" lgPush={1}>
              { this.state.logoImg == 'close' ?
                       <img src={"http://localhost:8080/App/images/"+ this.state.logoImg +".png"} alt="Image" onClick={this.closeDialog} className={"conv-logo-"+ this.state.logoImg} onClick={this.closeDialog}/> :
                       <img src={"http://localhost:8080/App/images/"+ this.state.logoImg +".png"} alt="Image" className={"conv-logo-"+ this.state.logoImg}/>
                      }
                     
                     <Col lg={10}  lgPush={1} className="mydiv">
                        <h3> {this.props.sendState.dialogTitle} | {this.props.sendState.dialogLearningObjective}</h3>
                        <p className={'pFont showDialog-' + !this.state.showDialog + ' ' + (this.state.showReview ? 'hidden' : '')}>{this.props.sendState.dialogStartText}</p>
                        <Button  className={'float-right okBtn showDialog-' + !this.state.showDialog + ' ' + (this.state.showReview ? 'hidden' : '')} bsStyle="info" onClick = {this.viewDialogBox}>OK</Button>
                        <Button className={'float-right showReview-' + this.state.showReview} bsStyle="info" onClick = {this.viewReviewBlock}>Review</Button>
                     </Col>

                     <div  className={'showDialog-' + this.state.showDialog}>
                        <ConversationBox checkDialogPoint = {this.props.sendState.dialogEntryPoint} isDone={ this.state.isDone } showDialog={this.state.showDialog} addHide={this.addHide}/>
                     </div>
           </Col>
           </Col>
         
          </div>
        );
     }
  }

export default KnowledgeCheck;