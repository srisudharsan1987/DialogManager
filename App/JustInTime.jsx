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

class JustInTime extends React.Component {
	constructor(props) {
	      super(props);
        this.state = {
          showDialog: '',
          showReview: '',
          logoImg: 'con-logo'
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

      myPopup(){

      }

      viewDialogBox(){
          this.setState({showDialog: true});
      }

      addHide(data){
          this.setState({showDialog: data});
          this.setState({showReview: true});
          this.setState({logoImg: 'open'});
      }

      viewReviewBlock(){
          this.setState({logoImg: 'close'});
          this.setState({showDialog: true});
          this.setState({showReview: false});
      }

      closeDialog() {
          this.setState({showReview: true});
          this.setState({logoImg: 'open'});
          this.setState({showDialog: false});
      }


     render() {
        return (
           <div>
           <Col lg={10} className="mydiv" lgPush={1}>
              <Col lg={10} className="conv-block bgGray" lgPush={1}>
              <img src={"http://localhost:8080/App/images/con-logo.png"} alt="Image" className="conv-logo-"/>
                     <Col lg={10}  lgPush={1} className={'mydiv showDialog-' + !this.state.showDialog}>
                       <img className="imgRight float-left jit-img" src="http://localhost:8080/App/images/jit-icon.png" alt="Image" />
                       <p className="pFont img-with-content">{this.props.sendState.dialogStartText}
                       
                       </p>
                       
                       <div className='btn-block'>
                        <Button className='float-right' bsStyle="info" >No thanks</Button>
                        <Button className='float-right' bsStyle="info" onClick = {this.viewDialogBox}>Sure, sounds good</Button>
                        </div>
                      
                     </Col>

                      <h4 className={'jit-h4 showDialog-' + this.state.showDialog}>
                        Retrieval Processes in Memory
                       </h4>
                     <div className={'showDialog-' + this.state.showDialog}>
                        <ConversationBox checkDialogPoint = {this.props.sendState.dialogEntryPoint} showDialog={this.state.showDialog} addHide={this.addHide}/>
                    </div>
           </Col>
           </Col>
         
          </div>
        );
     }
  }

export default JustInTime;