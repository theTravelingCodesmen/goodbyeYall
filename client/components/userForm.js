'use strict'

import React from 'react';
import { Link } from 'react-router'
import {Button, FormGroup, FormControl, ControlLabel, Checkbox} from 'react-bootstrap';
import axios from 'axios';
import queryString from 'query-string';


//renders user preferences form, adjusts state based on user selection and sends state to db
let UserForm = React.createClass ({
  getInitialState:function(){
    return {
      'DFWA-sky':false,
      'HOUA-sky':false,
      'AUS-sky':false,
      'Seven Wonders':false,
      'Seven Natural Wonders':false,
      'American Cities': false,
      'Global Explorer':false,
      'Party Islands':false,
      'Foodie Cities':false,
      'profile_name':null
    }
  },
  fetchPrefsByFB_ID:function(fb_id){
    return axios.get(`/user_prefs/existing_pref/${fb_id}`)
      .then((userPrefs)=>{
        this.setState({'DFWA-sky' : userPrefs.data['DFWA-sky']});
        this.setState({'HOUA-sky' : userPrefs.data['HOUA-sky']});
        this.setState({'AUS-sky' : userPrefs.data['AUS-sky']});
        this.setState({'American Cities' : userPrefs.data['American Cities']});
        this.setState({'Global Explorer' : userPrefs.data['Global Explorer']});
        this.setState({'Seven Wonders' : userPrefs.data['Seven Wonders']});
        this.setState({'Seven Natural Wonders' : userPrefs.data['Seven Natural Wonders']});
        this.setState({'Party Islands' : userPrefs.data['Party Islands']});
        this.setState({'Foodie Cities' : userPrefs.data['Foodie Cities']});
        this.setState({'profile_name': userPrefs.data['profile_name']});
      })
  },
  componentWillMount:function(){
    let fb_id = localStorage.getItem("goodbyeyall.fb_id");
    let qs = queryString.parse(window.location.hash);
    let token = qs.access_token;
    if (token && !fb_id){
      // if has token but no fb_id, just need to check if user had registered and in the db
      axios.get(`/user_prefs/is_exist/${token}`)
        .then((resp)=>{
          if (resp.data.found){
            fb_id = resp.data.fb_id;
            localStorage.setItem("goodbyeyall.fb_id", fb_id);
            localStorage.setItem("goodbyeyall.profile_photo", resp.data.profile_photo);
            //fetch user preferences from db to repopulate form
            this.fetchPrefsByFB_ID(fb_id)
          }
        })
    }
    if (fb_id){
      //already logged in
      this.fetchPrefsByFB_ID(fb_id)
    }
  },
  submitForm:function(event){
    event.preventDefault();
    let qs = queryString.parse(window.location.hash);
    let body = Object.assign({}, this.state, {token:qs.access_token}, {fb_id:localStorage.getItem("goodbyeyall.fb_id")});

    axios.post('/user_prefs', body)
      .then(function(response) {
        if (response.status===200){
          localStorage.setItem('goodbyeyall.fb_id',response.data.fb_id);
          let currentPhoto = localStorage.getItem('goodbyeyall.profile_photo');
          (currentPhoto===undefined || currentPhoto==="undefined") ? null : localStorage.setItem('goodbyeyall.profile_photo',response.data.profile_photo);
        }
      })
      .then(()=>{
        window.location.assign('/')
      })
  },
  render:function(){
    return (
      <div>
        <form className="user-form" onSubmit={this.submitForm}>
          <FormGroup>
            <p>{this.state.profile_name ? "Welcome back, "+ this.state.profile_name+". Here are your preferences." : "Thank you for signing up. Let us know your preferences" }</p>
            <b>Click submit to save your preferences and continue your adventure. </b>
            <br/>
            <ControlLabel>Alert Preferences</ControlLabel>
            <FormControl.Static>
              Choose your preferred outbound airports below:
            </FormControl.Static>
          </FormGroup>
          <Checkbox checked={this.state['AUS-sky']} onChange={()=>{this.setState({'AUS-sky':!this.state['AUS-sky']});}}>
            Austin (AUS)
          </Checkbox>
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
          <Checkbox checked={this.state['American Cities']} onChange={()=>{this.setState({'American Cities':!this.state['American Cities']});}}>
            American Cities (includes Los Angeles, San Francisco, Las Vegas, Denver, Chicago, New York, Miami)
          </Checkbox>
          <Checkbox checked={this.state['Foodie Cities']} onChange={()=>{this.setState({'Foodie Cities':!this.state['Foodie Cities']});}}>
            Foodie Cities (includes Lima, Tokyo, Berlin, Florence, New York, Hong Kong, Paris)
          </Checkbox>
          <Checkbox checked={this.state['Global Explorer']} onChange={()=>{this.setState({'Global Explorer':!this.state['Global Explorer']});}}>
            Global Explorer (includes Seoul, London, Paris, Dubai, Istanbul, Singapore, Bangkok)
          </Checkbox>
          <Checkbox checked={this.state['Party Islands']} onChange={()=>{this.setState({'Party Islands':!this.state['Party Islands']});}}>
            Party Islands (includes Grand Cayman, Maui, Mykonos, Fiji, Ibiza, Aruba, Ko Phi Phi)
          </Checkbox>
          <Checkbox checked={this.state['Seven Wonders']} onChange={()=>{this.setState({'Seven Wonders':!this.state['Seven Wonders']});}}>
            Seven Wonders of the World (includes Beijing, Cuzco, New Delhi, Rome, Amman, Cancun, Rio de Janiero)
          </Checkbox>
          <Checkbox checked={this.state['Seven Natural Wonders']} onChange={()=>{this.setState({'Seven Natural Wonders':!this.state['Seven Natural Wonders']});}}>
            Seven Natural Wonders of the World (includes Harare, Rio de Janiero, Phoenix, Reykjavik, New Delhi, Sydney, Mexico City)
          </Checkbox>
          <Button className="prefs-submit-button btn" type="submit">
            Submit
          </Button>
        </form>
      </div>
    )
  }
})

// 'export' is for enzyme testing, 'export default' is for regular react functionality
export { UserForm }

export default UserForm;
