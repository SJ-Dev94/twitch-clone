import React, { Component, PropTypes, } from 'react';
import { connect } from 'react-redux';
import { handleUploadProfilePictureAction } from '../../actions'
import { Field, reduxForm } from 'redux-form';
import { storageRef } from '../../firebaseconfig'


let selectedImage;

class UserSettings extends React.Component {


  handleFileUploadChange(e) {
    selectedImage = e.target.files[0];
  }

  //currently returning an object as the download url for some reason. consult SO
  handleUploadProfilePicture = (e) => {
    //Create child directory in firebase storage and upload the file
    let url;
    const path = `Profile_Pictures/${this.props.userId}/${selectedImage.name}`;
    const ref = storageRef.child(path);
    const uploadImage = ref.put(selectedImage);

    uploadImage.on('state_changed', (snapshot) => {

    }, (error) => {
      console.log(error);
    }, () => {
      url = ref.getDownloadURL().then(function (url) {
        console.log(url);
        return url
      });
      this.props.handleUploadProfilePictureAction(url);
    });
  }

  handleUploadProfileBanner = (e) => {
    //Create child directory in firebase storage and upload the file into this directory
    const uploadImage = storageRef.child(`Profile_Banners/${this.props.userId}/${selectedImage.name}`).put(selectedImage);

    uploadImage.on('state_changed', (snapshot) => {

    }, (error) => {
      console.log(error);
    }, () => {
      console.log('success');
    });
  }

  render() {
    return (
      <div>

        <h1>Settings</h1>
        <div>
          <h3>Profile Picture</h3>
          <input type="file" onChange={this.handleFileUploadChange}></input>
          <button onClick={this.handleUploadProfilePicture}>Update</button>
        </div>
        <div>
          <h3>Profile Banner</h3>
          <input type="file" onChange={this.handleFileUploadChange}></input>
          <button onClick={this.handleUploadProfileBanner}>Update</button>
        </div>
        <div>
          <h3>Profile Settings</h3>
          <button>Update</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    userId: state.auth && state.auth.userInfo ? state.auth.userInfo.userId : null,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { handleUploadProfilePictureAction })(reduxForm({
  form: 'User Settings'
})(UserSettings));