import React, { useState } from 'react';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

function UploadedImages() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [err, setErr] = useState(false);

  const onChange = e => {
    setTextInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErr(false);

    if (textInput === 'pass') {
      setLoading(true);
      axios
        .get(
          'https://us-central1-image-upload-9aebe.cloudfunctions.net/api/images'
        )
        .then(res => {
          setList(res.data.imageUrl);
        })
        .catch(err => console.log(err));
      setLoading(false);
      //console.log(loading);
    } else {
      setErr(true);
    }
  };

  console.log(list);

  return list.length ? (
    !loading ? (
      list.map((imageUrl, index) => {
        return <img src={imageUrl} key={index} alt={`weddingPhoto ${index}`} />;
      })
    ) : (
      <p>Loading...</p>
    )
  ) : (
    <div>
      <p>Please Enter Passcode to View Images</p>
      <form onSubmit={handleSubmit}>
        <Input type='text' onChange={onChange} value={textInput} />
        <br />
        <br />
        <Button type='submit' variant='contained' color='primary'>
          Submit
        </Button>
      </form>
      <br />
      {err ? <p style={{ color: 'red' }}>Wrong Password</p> : null}
    </div>
  );
}

export default UploadedImages;
