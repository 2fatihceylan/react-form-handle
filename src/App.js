import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {


  const [form, setForm] = useState(
    {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      address: ''
    }
  );

  const handleFormChange = (event) =>{

    setForm((prev)=>(
      {
        ...prev,
        [event.target.name]: event.target.value,
      }
    ));
  };


  const submit = (event) => {
    event.preventDefault();
    console.log(form)
  }


  return (
    <div className="App">
      <form className='row'>
        
        <input
          type='text'
          onChange={handleFormChange}
          name='firstname'
          placeholder='First Name'
        />
        <input
          type='text'
          onChange={handleFormChange}
          name='lastname'
          placeholder='Last Name'
        />
        <input
          type='email'
          onChange={handleFormChange}
          name='email'
          placeholder='Email'
        />
        <input
          type='password'
          onChange={handleFormChange}
          name='password'
          placeholder='Password'
        />
        <input
          type='text'
          onChange={handleFormChange}
          name='address'
          placeholder='Address'
        />

        <Button onClick={submit} variant="success">Submit</Button>

          
      </form>
     
    </div>
  );
}

export default App;
