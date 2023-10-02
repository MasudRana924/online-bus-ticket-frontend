import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createSignUp } from '../../../state/user/signupSlice';
const Signup = () => {
  const dispatch = useDispatch();
  const [agree, setAgree] = useState(false);
  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = user;
  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(createSignUp(myForm));
    toast.success('Please Verify Your Email',
    );
  };
  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (

    <div className="mt-5 lg:mt-0 flex flex-col items-center justify-center min-h-screen ">
      <div className="lg:w-3/12 ">
        <h2 className="text-start text-2xl font-semibold leading-6 text-gray-900">Welcome to Register</h2>
        <form action="" className="space-y-6 py-6 " onSubmit={registerSubmit}>
          <div>
            <input
              className="w-full py-3 px-6 border-2 border-black"
              type="text"
              name="name"
              value={name}
              onChange={registerDataChange}
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div>
            <input
              className="w-full py-3 px-6 border-2 border-black"
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
              className="w-full py-3 px-6 border-2 border-black"
              name="password"
              value={password}
              onChange={registerDataChange}
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div >
            <img src={avatarPreview} alt="Avatar Preview" className="h-16 w-16 mb-5 border rounded-full" />
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={registerDataChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="agree"
                name="agree"
                type="checkbox"
                className="h-4 w-4 text-violet-700 focus:ring-violet-700 border-gray-300 "
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                required
              />
              <label
                htmlFor="accept-terms"
                className="ml-2 block text-sm text-gray-900"
              >
                Agreed with the terms and condition
              </label>
            </div>
          </div>
          <div>
            <button className="w-full px-6 py-3  bg-black mb-5">
              <span className="font-semibold text-white text-lg">Signup</span>
            </button>
            <span className="text-sm tracking-wide text-gray-400 mt-5">Already have a account ?</span> <Link to="/user-signin"><span className="text-sm font-semibold leading-6 text-gray-900">Please Login</span>
            </Link>
          </div>
          {/* {
          error !== '' && <Error message={error}></Error>
        } */}
        </form>
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
        theme="dark"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default Signup;
