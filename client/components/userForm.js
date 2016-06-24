'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import {Button, FormGroup, FormControl, ControlLabel, Checkbox} from 'react-bootstrap';

class UserForm extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <FormGroup>
                      <ControlLabel>Static text</ControlLabel>
                      <FormControl.Static>
                        email@example.com
                      </FormControl.Static>
                    </FormGroup>

                    <Checkbox checked readOnly>
                      DFW
                    </Checkbox>
                    <Checkbox checked readOnly>
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
