import React from 'react';
import $ from "jquery";
import Chatlist from './Chatlist.jsx';
import restful, { fetchBackend } from 'restful.js';
import { Form,
    FormGroup,
    Col,
    ControlLabel,
    FormControl,
    Checkbox,
    Button } from 'react-bootstrap'; 

class App extends React.Component {
    constructor(props) {
        super(props);
	      this.state = {
	         data: '',
	         submitText : '',
           outputObj : [],
           isDone: 0
	      }
        
	      this.setText = this.setText.bind(this)
        this.doApiCall('start');
	  };  

	  setText(event) {
	      this.setState({data: event.target.value});
	  }

    doApiCall(input) {
        var _this = this;
        var messageEndpoint = 'http://10.219.36.235:8080/api/initializeDialogService/ILPCAPW/3435/'+ input + '/Review';
        input = (input == 'start')  ? '' : input;

        var strHTML = '';
        var key = input + new Date().getTime();
        if(input) {
            strHTML = <div key={key}><Col lg={12}><Col lg={10} lgPush={1} className='msg-box msg-box-output'><span> {input} </span><img src='http://localhost:8080/App/images/user.png' alt='Image' className='user-img' /></Col> </Col></div>;
        }

        _this.state.outputObj.push(strHTML);

       /* $.ajax({
            beforeSend: function() {
            },
            type: "GET",
            url: messageEndpoint,
            success: function(json) {
                var output = json.reply;
                var key = output + new Date().getTime();
                var strHTML = '';
                if(output) {
                    strHTML = <div key={key}><Col lg={12}><Col lg={10} lgPush={1} className="msg-box"><img className="float-left" src="http://localhost:8080/App/images/con-logo.png" alt="Image" /> <span>{output} </span></Col> </Col> </div>;
                }
                _this.state.outputObj.push(strHTML);
                
                _this.setState({data: ''});

                if (json.isDone == 'Yes') {
                  _this.setState({isDone: 1});
                } else {
                    $('textarea').focus();
                }
            },
            complete: function() {
                setTimeout(function() {
                    $('.msg-blck').animate({scrollTop: $('.msg-blck')[0].scrollHeight}, 10);
                }, 500);
            }
        }); */

        var result = fetch(messageEndpoint)
            result.then(function(json) {
                return json.json();
            }).then(function(json) {
                var output = json.reply;
                var key = output + new Date().getTime();
                var strHTML = '';
                if(output) {
                    strHTML = <div key={key}><Col lg={12}><Col lg={10} lgPush={1} className="msg-box"><img className="float-left" src="http://localhost:8080/App/images/con-logo.png" alt="Image" /> <span>{output} </span></Col> </Col> </div>;
                }
                _this.state.outputObj.push(strHTML);
                
                _this.setState({data: ''});

                if (json.isDone == 'Yes') {
                  _this.setState({isDone: 1});
                } else {
                    $('textarea').focus();
                }
                setTimeout(function() {
                    $('.msg-blck').animate({scrollTop: $('.msg-blck')[0].scrollHeight}, 10);
                }, 500);
            }).catch(function(ex) {
                console.log('failed', ex);
            });
    }

    submitBtn() {
        var _this = this;
        if (this.state.data) {
            this.setState({submitText: this.state.data});
            _this.doApiCall(_this.state.data);          
        } 
    }

    submitBtn1() {
            var data = this.state.data;
            var str;
            this.state.outputObj.push({'input': this.state.data, 'output': ''});
            this.setState({data: data});
            if( data.toLowerCase() == ('hi' || 'hai') ) {
              str = 'Hello, How can i help you?';
            }
            else if( data == "book"){
              str = "Please specify the category of book? Example : 'Education','Hospitality'...";
            }
            else if( data = "bye"){
             str = "Thank you"
              this.setState({isDone: 1});
            }
            var _this = this;
            setTimeout(function() {
              _this.state.outputObj.pop();
              _this.state.outputObj.push({'input': data, 'output': str});
              _this.setState({data: ''});
            }, 500);       
    }
    
     componentDidMount() {
          //this.submitBtn = this.submitBtn.bind(this);
          this.validateEnterKey = this.validateEnterKey.bind(this);
          this.btnDone = this.btnDone.bind(this);
          this.submitBtn = this.submitBtn.bind(this);
          this.setState({isDone: this.props.isDone});
      }

      /* will update the propertyies here */
      componentWillReceiveProps(nextProps) {
          //console.log(nextProps);
        this.setState({isDone: nextProps.isDone});
        
      }

      componentDidUpdate(prevProps, prevState) {
        //  console.log(prevProps);
      }

      validateEnterKey(event) {
        if(event.keyCode == 13 && event.shiftKey == false) {
          this.submitBtn();
          $('textarea').blur();
        }
      }

      /* will call parent function */
      btnDone() {     
        this.props.addHide(false);
      }

     render() {
        return (
           <div>

               <Col lg={10} className="msg-blck" lgPush={1}>
                             <Chatlist message= {this.state.outputObj} />
                           </Col>
                           <Col lg={8} className="rply-block" lgPush={2}>
                                 <Col lg={10}>
                                  {!this.state.isDone ? 
                                   <FormGroup className="m-0">
                                      <FormControl className="msg-area" onKeyDown={this.validateEnterKey} componentClass="textarea" value={this.state.data} onChange={this.setText}/> 
                                    </FormGroup> : null
                                  }
                                  </Col>
                                   {!this.state.isDone ? 
                                   <Button bsStyle="info" onClick = {this.submitBtn}>Submit</Button> :
                                   <Button bsStyle="info" onClick = {this.btnDone}>
                                      {this.props.checkDialogPoint == 'KC' ? 'Done' : '!Thanks'}
                                   </Button>
                                  }
           </Col>
              
          </div>
        );
     }
  }

export default App;