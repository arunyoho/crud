import React from 'react'
import { useEffect , useState} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const Update = () => {

  const [data, setData] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div>
       <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
      <h1>Update User</h1>
      <form >
        <div className='mb-2'>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter Name'
           value={data.name}/>
        </div>
        <div className='mb-2'>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' className='form-control' placeholder='Enter Email'
           value={data.email}/>
        </div>
        <div className='mb-3'>
            <label htmlFor='phone'>Phone:</label>
            <input type='text' name='phone' className='form-control' placeholder='Enter Phone'
           value={data.phone}/>
        </div>
        <button className='btn btn-success'>Sumbit</button>
        <Link to="/" className='btn btn-primary ms-3'>Back</Link>
      </form>
      </div>
    </div>
    </div>
  )
}

export default Update
