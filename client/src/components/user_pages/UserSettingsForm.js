import React, { Component, PropTypes, } from 'react';
import { connect } from 'react-redux';
import { handleUploadProfilePictureAction, handleUploadProfileBannerAction } from '../../actions'
import { Field, reduxForm } from 'redux-form';
import { database, storageRef, auth } from '../../firebaseconfig'


let selectedImage;
let selectedText;

class UserSettings extends React.Component {


  //!!!!IMPORTANT!!!!! in the future, split these functions into their own file to reduce clutter and improve organization

  //!!!IMPORTANT!!! You still need to do bio and displayname

  //uploads the user's image to firebase so we can read url in the future and and put in redux store
  handleUploadUserAviUrlToFireBase = async (url) => {
    const ref = database.ref(`users`);

    await ref.orderByChild(`userId`).equalTo(this.props.userId).on('value', Snapshot => {
      Snapshot.forEach(child => {
        child.ref.update({ userAvi: url });
      });
    })
  }

  handleUploadUserBannerUrlToFireBase = async (url) => {
    const ref = database.ref(`users`);

    await ref.orderByChild(`userId`).equalTo(this.props.userId).on('value', Snapshot => {
      Snapshot.forEach(child => {
        child.ref.update({ userBanner: url });
      });
    })
  }

  //handles the selected image in our file uploader
  handleFileUploadChange(e) {
    selectedImage = e.target.files[0];
  }


  //uploads profile picture to firebase file storage
  handleUploadProfilePicture = (e) => {
    let url;
    const path = `Profile_Pictures/${this.props.userId}/${selectedImage.name}`;
    const ref = storageRef.child(path);
    const uploadImage = ref.put(selectedImage);

    uploadImage.on('state_changed', (snapshot) => {

    }, (error) => {
      console.log(error);
    }, () => {
      //grabs url as a callback and then uploads url to firebase, then adds it to redux store
      url = ref.getDownloadURL().then(function (url) {

        let user = auth.currentUser;

        user.updateProfile({
          photoURL: url
        })
        this.handleUploadUserAviUrlToFireBase(url);

        this.props.handleUploadProfilePictureAction(url);
        console.log(url);
        return url

      }.bind(this));


    });
  }

  handleUploadProfileBanner = (e) => {
    //Create child directory in firebase storage and upload the file into this directory
    let url;
    const path = `Profile_Banners/${this.props.userId}/${selectedImage.name}`;
    const ref = storageRef.child(path);
    const uploadImage = ref.put(selectedImage);

    uploadImage.on('state_changed', (snapshot) => {

    }, (error) => {
      console.log(error);
    }, () => {
      url = ref.getDownloadURL().then(function (url) {
        let result;
        this.handleUploadUserBannerUrlToFireBase(url);

        this.props.handleUploadProfileBannerAction(url);
        console.log(url);
        return url

      }.bind(this));

    });
  }

  handleChange(e) {
    selectedText = e.target.value;
  }

  handleUpdateDisplayName = () => {
    var user = auth.currentUser;
    user.updateProfile({
      displayName: selectedText
    })
  }

  handleUploadUserAviUrlToFireBase = async (url) => {
    const ref = database.ref(`User_Bios/${this.props.userId}/`);

    await ref.set({
      selectedText
    })
  }

  handleUpdateBio = () => {
    let url;
    const path = `User_Bios/${this.props.userId}/`;
    const ref = database.ref(path);
    ref.set(selectedText);
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
          <h5>Display Name</h5>
          <input type="text" onChange={this.handleChange}></input>
          <button onClick={this.handleUpdateDisplayName}>Update</button>
          <h5>Bio</h5>
          <textarea type="text" onChange={this.handleChange}></textarea>
          <button onClick={this.handleUpdateBio}>Update</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    userId: state.auth && state.auth.userInfo ? state.auth.userInfo.uid : null,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { handleUploadProfilePictureAction, handleUploadProfileBannerAction })(reduxForm({
  form: 'User Settings'
})(UserSettings));