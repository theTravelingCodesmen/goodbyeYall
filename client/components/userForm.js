'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import {Button, FormGroup, FormControl, ControlLabel, Checkbox} from 'react-bootstrap';

let UserForm = React.createClass ({
    getInitialState:function(){
      return {
        'DFWA-sky':true
      }
    },
    submitForm:function(event){
      event.preventDefault();
      console.log(this.state)
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
                    <Checkbox unchecked readOnly>
                      Houston (IAH & HOU)
                    </Checkbox>
                   <FormGroup>
                      <FormControl.Static>
                        Choose your preferred travel packages below:
                      </FormControl.Static>
                    </FormGroup>
                    <Checkbox unchecked readOnly>
                      Seven Wonders of the World
                    </Checkbox>
                    <Checkbox unchecked readOnly>
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
