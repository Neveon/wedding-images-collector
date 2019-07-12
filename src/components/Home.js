import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Home pic
import weddingPhoto from '../images/weddingHomePhoto.jpg';

// Material-UI
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

class Home extends Component {
  handleFile = e => {
    const totalFiles = e.target.files.length;
    for (let x = 0; x < totalFiles; x++) {
      let image = e.target.files[x];
      let formData = new FormData();
      formData.append('image', image, image.name);
      axios
        .post(
          'https://us-central1-image-upload-9aebe.cloudfunctions.net/api/image',
          formData
        )
        .catch(err => console.log(err));
    }
  };

  handleEdit = () => {
    const fileInput = document.getElementById('imageInput');
    // Opens file selection and when user selects a file, triggers handleImageChange
    fileInput.click();
  };

  render() {
    return (
      <div>
        <div className='homeContainer'>
          <h1 className='title'>
            Nageatte and Alaa's Wedding Reception
            <br />
            July 12, 2019
          </h1>
          <img
            src={weddingPhoto}
            style={{ width: '100%' }}
            alt='weddingPhotoHome'
            id='weddingPhotoHome'
          />
          <input
            type='file'
            id='imageInput'
            onChange={this.handleFile}
            hidden='hidden'
          />
          <Button variant='contained' color='primary' onClick={this.handleEdit}>
            Upload Images&nbsp;
            <CloudUploadIcon />
          </Button>
          <br />
          <br />
          <Link to='/images' style={{ textDecoration: 'none' }}>
            <Button variant='contained' color='secondary'>
              See images
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
