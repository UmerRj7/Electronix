import axios from 'axios';
import React, { useState } from 'react';




const Table = () => {
    
const [Img,setImage] = useState(
  {
    name:"",
    image:"",
  }
)

const handleName = (e) => {
  setImage({...Img,name:e.target.value});
}

const handleImage = (e) => {
  setImage({...Img, image: e.target.files[0]});
  console.log(Img.image);
}

    const handleApi = (e) =>{
      e.preventDefault();
      const formData = new FormData();
      formData.append('image',Img.image)
      formData.append('name',Img.name)
      console.log(setImage.image);
      axios.post(`http://localhost:4000/api/images/upload`,formData)
      .then((res)=>{
        console.log(res)
      .catch(err =>{
        console.log(err);
      })
      })
    }


return (
    <div className="App">
      <input type="text" name="name" onChange={handleName} />
      <input type="file"  name="image" accept='.png,.jpg,.jpeg' class="field-long"  onChange={handleImage} />
      <button onClick={handleApi}>Upload</button>
    </div>
  )
    
}
 
export default Table;