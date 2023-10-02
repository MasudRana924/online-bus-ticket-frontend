import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';

import { createLogin } from '../../../state/user/Login/loginSlice';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [agree, setAgree] = useState(false);
    const { token,loggeduser} = useSelector(
        (state) => state.userDetails
    );
const message=loggeduser.message
    const [users, setUser] = useState({
        email: "",
        password: "",
    });
    const { email, password } = users;
    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("email", email);
        myForm.set("password", password);
        dispatch(createLogin(myForm));
        if(token){
            toast.info('Login Succesfull'); 
        }
    };
    const registerDataChange = (e) => {
        setUser({
            ...users,
            [e.target.name]: e.target.value
        });
    };
    useEffect(() => {
        if (token) {
           
            navigate('/');
         
        }else{
            toast.info(message); 
        }
    }, [token, navigate,message]);
    return (
        <div>

            <div className=" flex flex-col items-center justify-center min-h-screen">

                <div className="lg:w-3/12 ">
                    <div className="  p-8">

                        <form action="" className="space-y-6 py-6 " onSubmit={registerSubmit}>
                            <div>
                                <input
                                    className=" w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-gray-400 focus:invalid:outline-none"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={registerDataChange}
                                    placeholder="Enter Your Email"
                                    required

                                />
                            </div>

                            <div className="flex flex-col items-end">
                                <input
                                    className=" w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400  "
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={registerDataChange}
                                    placeholder="Enter Your Password"

                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="agree"
                                        name="agree"
                                        type="checkbox"
                                        className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                                        checked={agree}
                                        onChange={(e) => setAgree(e.target.checked)}
                                        required
                                    />
                                    <label
                                        htmlFor="accept-terms"
                                        className="ml-2 block text-sm text-gray-900"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <div>
                                    <Link to="/user/password">

                                        <span className="text-sm tracking-wide text-violet-700 mt-5">Forgot password ?</span>
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <button className="w-full px-6 py-3 rounded-xl bg-green-600 mb-5">
                                    <span className="font-semibold text-white text-lg">Login</span>
                                </button>

                                <span className="text-sm tracking-wide text-gray-400 mt-5">Don't have any account ?</span> <Link to="/user-signup"> <span className="text-violet-700">Create new account</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />

            </div>
        </div>
    );
};

export default Login;