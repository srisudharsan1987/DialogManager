import React from 'react';
import $ from "jquery";
import KnowledgeCheck from './KnowledgeCheck.jsx';
import JustInTime from './JustInTime.jsx';
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
	  };

    componentDidMount() {
          console.log(window.parent.widget_settings);         
          this.state.widget_settings = window.parent.widget_settings;
      }
   
    /* Renders JIT Or KC widgets */
    render() {
        switch (window.parent.widget_settings.dialogEntryPoint) {
            case 'KC' :
                return (
                    <KnowledgeCheck sendState={window.parent.widget_settings}></KnowledgeCheck>
                )
                break;
            case 'JIT' :
                return (
                    <JustInTime sendState={window.parent.widget_settings}></JustInTime>
                )
                break;
            default :
                break;
         }
     }
  }

export default App;