import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UploadedImages() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://us-central1-image-upload-9aebe.cloudfunctions.net/api/images'
      )
      .then(res => {
        setList(res.data.imageUrl);
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line
  }, []);

  console.log(list);

  return list.map((imageUrl, index) => {
    return <img src={imageUrl} key={index} />;
  });
}

export default UploadedImages;
