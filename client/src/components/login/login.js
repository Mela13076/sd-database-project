// import React, { useState } from 'react';
// import axios from 'axios';
// import "./login.css"
// // import { useNavigate } from 'react-router-dom';
// // import { Link } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');



// //const navigate = useNavigate();
 
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       // Make a GET request to your backend API to retrieve all user records
//       const userRecords = await axios.get(`http://localhost:3001/login`);
      
//       // Loop through the user records to find a matching username and password
//       let userFound = false;
//       for (let user of userRecords.data) {
//         if (user.username === username && user.password === password) {
//           // If a matching username and password is found, set userFound to true and break out of the loop
//           userFound = true;
//           break;
//         }
//       }

//       // If no matching username and password is found, set an error message
//       if (!userFound) {
//         setErrorMessage('Invalid username or password');
//         return;
//       }

//       // If a matching username and password is found, redirect to the homepage
//       window.location.href = '/home';
      
//   } catch (err) {
//     console.log(err);
//   }
// };

//   return (
//     <div className="form-container">
//       <h1>Login Here</h1>
//       <form onSubmit={handleLogin} >
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <br />
//         {/* <Link to='/home'>
//            <button type="submit">Login</button>
//         </Link> */}
//            {errorMessage && <p>{errorMessage}</p>}
//         <button type="submit" disabled={!username || !password}>Login</button>
//       </form>
//       <p>For login credentials contact amelia.trevino@students.tamuk.edu</p>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        username,
        password,
      });
      console.log(response.data.message);
      // If login is successful, redirect to the homepage
      if (response.data.message === 'Login successful') {
        window.location.href = '/home';
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Invalid username or password');
    }
  };
  return (
    <div className="form-container">
      <h1>Login Here</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <br />
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit" disabled={!username || !password}>
          Login
        </button>
      </form>
      <p>For login credentials contact amelia.trevino@students.tamuk.edu</p>
    </div>
  );
};

export default Login;
