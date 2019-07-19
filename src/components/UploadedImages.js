import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function UploadedImages(props) {
  const [list, setList] = useState([]);
  const [textInput, setTextInput] = useState('');

  const onChange = e => {
    setTextInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (textInput === 'Love') {
      M.toast({ html: 'Loading Images...' });
      axios
        .get('YOUR_FIREBASE_URL.net/api/images')
        .then(res => {
          setList(res.data.imageUrl);
        })
        .catch(err => console.log(err));
      //console.log(loading);
    } else {
      M.toast({ html: 'Wrong password, please try again' });
    }
  };

  return list.length ? (
    <div style={{ textAlign: 'center' }}>
      {list.map((imageUrl, index) => {
        return <img src={imageUrl} key={index} alt={`weddingPhoto ${index}`} />;
      })}
    </div>
  ) : (
    <div>
      <p>Please Enter Password to View Images</p>
      <form onSubmit={handleSubmit}>
        <div className='input-field'>
          <input
            type='text'
            id='password'
            onChange={onChange}
            value={textInput}
          />
          <label htmlFor='password'>Password</label>
        </div>
        <br />
        <Button type='submit' variant='contained' color='primary'>
          Submit
        </Button>
      </form>
      <br />
      <br />
      <br />
      <Link to='/'>
        <Button color='secondary' variant='outlined'>
          Back to Homepage
        </Button>
      </Link>
    </div>
  );
}

export default UploadedImages;
