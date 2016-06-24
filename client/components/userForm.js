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
                      <ControlLabel>Alert Preferences</ControlLabel>
                      <FormControl.Static>
                        Choose your preferred outbound airports below:
                      </FormControl.Static>
                    </FormGroup>
                    <Checkbox unchecked readOnly>
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

}

export default UserForm;
