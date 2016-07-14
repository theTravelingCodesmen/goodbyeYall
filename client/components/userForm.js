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
            <h3>{this.state.profile_name ? "Welcome back, " + this.state.profile_name + "! Here are your Facebook Notification Preferences:": "Thanks for signing up! Let us know your notification preferences!" }</h3>
            <FormControl.Static>
              <h4 className="choosePrefs">Choose your preferred outbound airports:</h4>
            </FormControl.Static>
          </FormGroup>
          <Checkbox checked={this.state['AUS-sky']} onChange={()=>{this.setState({'AUS-sky':!this.state['AUS-sky']});}}>
            <strong>Austin</strong> Austin–Bergstrom International(AUS)
          </Checkbox>
          <Checkbox checked={this.state['DFWA-sky']} onChange={()=>{this.setState({'DFWA-sky':!this.state['DFWA-sky']});}}>
            <strong>Dallas/Fort Worth</strong> Dallas/Fort Worth International(DFW) & Dallas Love Field(DAL)
          </Checkbox>
          <Checkbox checked={this.state['HOUA-sky']} onChange={()=>{this.setState({'HOUA-sky':!this.state['HOUA-sky']});}}>
            <strong>Houston</strong> George Bush Intercontinental(IAH) & William P. Hobby(HOU)
          </Checkbox>
         <FormGroup>
            <FormControl.Static>
              <h4 className="choosePrefs">Choose your preferred travel packages:</h4>
            </FormControl.Static>
          </FormGroup>
          <Checkbox checked={this.state['American Cities']} onChange={()=>{this.setState({'American Cities':!this.state['American Cities']});}}>
            <strong>American Cities</strong>  -  Chicago, Denver, Las Vegas, Los Angeles, Miami, New York & San Francisco
          </Checkbox>
          <Checkbox checked={this.state['Foodie Cities']} onChange={()=>{this.setState({'Foodie Cities':!this.state['Foodie Cities']});}}>
            <strong>Foodie Cities</strong>  -  Berlin, Florence Hong Kong, Lima, New York, Paris & Tokyo
          </Checkbox>
          <Checkbox checked={this.state['Global Explorer']} onChange={()=>{this.setState({'Global Explorer':!this.state['Global Explorer']});}}>
            <strong>Global Explorer</strong>  -  Bangkok, Dubai, Istanbul, London, Paris, Singapore & Seoul
          </Checkbox>
          <Checkbox checked={this.state['Party Islands']} onChange={()=>{this.setState({'Party Islands':!this.state['Party Islands']});}}>
            <strong>Party Islands</strong>  -  Aruba, Fiji, Grand Cayman Island, Ibiza, Ko Phi Phi, Maui & Mykonos
          </Checkbox> 
          <Checkbox checked={this.state['Seven Wonders']} onChange={()=>{this.setState({'Seven Wonders':!this.state['Seven Wonders']});}}>
            <strong>Seven Wonders of the World</strong>  -  Chichén Itzá, Christ the Redeemer, Colosseum, Machu Picchu, Petra, Taj Mahal & The Great Wall
          </Checkbox>
          <Checkbox checked={this.state['Seven Natural Wonders']} onChange={()=>{this.setState({'Seven Natural Wonders':!this.state['Seven Natural Wonders']});}}>
            <strong>Seven Natural Wonders of the World</strong>  -  Aurora Borealis, Great Barrier Reef, Harbor of Rio de Janeiro, Mount Everest, Parícutin Volcano, The Grand Canyon & Victoria Falls
          </Checkbox> 
          <b>Click submit to save your preferences and continue your adventure.</b>
          <br/>
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
