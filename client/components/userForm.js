'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import {Button, FormGroup, FormControl, ControlLabel, Checkbox} from 'react-bootstrap';

class UserForm extends React.Component {
    render() {
        return (
            <div>
                <form className="user-form">
                    <FormGroup>
                      <ControlLabel>Static text</ControlLabel>
                      <FormControl.Static>
                        Please select your preferred outbound airport below
                      </FormControl.Static>
                    </FormGroup>
                    <Checkbox unchecked readOnly>
                      DFW
                    </Checkbox>
                    <Checkbox unchecked readOnly>
                      HOU
                    </Checkbox>

                    <Button type="submit">
                      Submit
                    </Button>
                </form>
            </div>
                   )
    }

}

export default UserForm;
