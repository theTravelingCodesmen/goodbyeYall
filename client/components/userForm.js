'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import {Button, FormGroup, FormControl, ControlLabel, Checkbox} from 'react-bootstrap';
import axios from 'axios';
import queryString from 'query-string';

let UserForm = React.createClass ({
    getInitialState:function(){
      return {
        'DFWA-sky':false,
        'HOUA-sky':false,
        'Seven Wonders':false,
        'Seven Natural Wonders':false,
        'profile_name':null
      }
    },
    // componentDidMount:function(){
    //   let fb_id = localStorage.getItem("goodbyeyall.fb_id");
    //   if (fb_id){
    //     console.log('line 13 fb id',fb_id);
    //     axios.get(`/user_prefs/existing_pref/${fb_id}`)
    //       .then((userPrefs)=>{
    //         this.setState({
    //           'DFWA-sky':userPrefs['DFWA-sky'],
    //           'HOUA-sky': userPrefs['HOUA-sky'],
    //           'Seven Wonders': userPrefs['Seven Wonders'],
    //           'Seven Natural Wonders': userPrefs['Seven Natural Wonders'],
    //           'profile_name':userPrefs['profile_name']
    //         })
    //       })
    //   }
    // },
    submitForm:function(event){
      event.preventDefault();
      let qs = queryString.parse(window.location.hash);
      // console.log(this.state);
      // console.log('line 22 access_token is',qs.access_token);
      let body = Object.assign({}, this.state, {token:qs.access_token});

      axios.post('/user_prefs', body)
        .then(function(response) {
          if (response.status===200){
            localStorage.setItem('goodbyeyall.fb_id',response.data.fb_id)
          }else{
            //throw error here?
          }

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
