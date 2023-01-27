import React, { useState } from 'react';
import './reg.css';


export default function Register() {
    const [inputs, setInputs] = useState({});

    const setRegister = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs({ ...inputs, [name]: value })
        console.log(inputs);

    }
    const registerSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }
    return (
        <div className="boy">

            <div className="login-box">

                <h2>Sign up</h2>
                <form type="post" onSubmit={registerSubmit}>
                    <div className="user-box">
                        <input type="text" name="name" required="" onChange={setRegister} />
                        <label>Name</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="email" required="" onChange={setRegister} />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="phonenumber" required="" onChange={setRegister} />
                        <label>Phoneno</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="password" required="" onChange={setRegister} />
                        <label>Password</label>
                    </div>
                    <input type="submit" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>





                </form>


            </div>
        </div>
    )
}
