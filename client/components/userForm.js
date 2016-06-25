'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import {Button, FormGroup, FormControl, ControlLabel, Checkbox} from 'react-bootstrap';
import axios from 'axios';

let UserForm = React.createClass ({
    getInitialState:function(){
      return {
        'DFWA-sky':false,
        'HOUA-sky':false,
        'Seven Wonders':false,
        'Seven Natural Wonders':false
      }
    },
    submitForm:function(event){
      event.preventDefault();
      console.log(this.state);
      axios.post('/user_prefs', this.state)
        .then(function(response) {
          console.log(response);
        })
    },
    render:function(){
        return (
            <div>
                <form className="user-form" onSubmit={this.submitForm}>
                    <FormGroup>
                      <ControlLabel>Alert Preferences</ControlLabel>
                      <FormControl.Static>
                        Choose your preferred outbound airports below:
                      </FormControl.Static>
                    </FormGroup>
                    <Checkbox checked={this.state['DFWA-sky']} onChange={()=>{this.setState({'DFWA-sky':!this.state['DFWA-sky']});}}>
                      Dallas/Fort Worth (DFW & DAL)
                    </Checkbox>
                    <Checkbox checked={this.state['HOUA-sky']} onChange={()=>{this.setState({'HOUA-sky':!this.state['HOUA-sky']});}}>
                      Houston (IAH & HOU)
                    </Checkbox>
                   <FormGroup>
                      <FormControl.Static>
                        Choose your preferred travel packages below:
                      </FormControl.Static>
                    </FormGroup>
                    <Checkbox checked={this.state['Seven Wonders']} onChange={()=>{this.setState({'Seven Wonders':!this.state['Seven Wonders']});}}>
                      Seven Wonders of the World
                    </Checkbox>
                    <Checkbox checked={this.state['Seven Natural Wonders']} onChange={()=>{this.setState({'Seven Natural Wonders':!this.state['Seven Natural Wonders']});}}>
                      Seven Natural Wonders of the World
                    </Checkbox>

                    <Button type="submit">
                      Submit
                    </Button>
                </form>
            </div>
                   )
    }

})

export default UserForm;
