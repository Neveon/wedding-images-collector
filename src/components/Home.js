import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const handleFile = e => {
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

  return (
    <div>
      <input type='file' onChange={handleFile} />
      <br />
      <br />
      <Link to='/images'>See images</Link>
    </div>
  );
}

export default Home;
