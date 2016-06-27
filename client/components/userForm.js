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
    componentWillMount:function(){
      let fb_id = localStorage.getItem("goodbyeyall.fb_id");
      let qs = queryString.parse(window.location.hash);
      let token = qs.access_token;
      if (token && !fb_id){ // if has token but no fb_id, just need to check if user had registered and in the db
        axios.get(`/user_prefs/is_exist/${token}`)
          .then((data)=>console.log('line 25 is user exist', data))

      }
      if (fb_id){ //already logged in
        // console.log('line 23 fb id',fb_id);
        axios.get(`/user_prefs/existing_pref/${fb_id}`)
          .then((userPrefs)=>{
            this.setState({'DFWA-sky' : userPrefs.data['DFWA-sky']});
            this.setState({'HOUA-sky' : userPrefs.data['HOUA-sky']});
            this.setState({'Seven Wonders' : userPrefs.data['Seven Wonders']});
            this.setState({'profile_name': userPrefs.data['profile_name']});
          })
      }
    },
    submitForm:function(event){
      event.preventDefault();
      let qs = queryString.parse(window.location.hash);
      let body = Object.assign({}, this.state, {token:qs.access_token}, {fb_id:localStorage.getItem("goodbyeyall.fb_id")});

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
                      <p>{this.state.profile_name ? "Welcome back, "+ this.state.profile_name : "Thank you for signing up. Let us know your preferences" }</p>
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
