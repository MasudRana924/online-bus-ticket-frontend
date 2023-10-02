import React from 'react';
import banner from '../../assets/banner.jpg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFilterBuses } from '../../state/buses/filterbusesSlice';
import { toast } from 'react-toastify';



const Banner = () => {
    const navigate = useNavigate();
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('')
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (from && to) {
            dispatch(fetchFilterBuses({ from, to }));
            navigate('/buses')
        }
        else {
            toast.error('Please Select Destination',
                {
                    position: "top-center",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                }
            );
        }
    }
    const handleFrom = (e) => {
        setFrom(e.target.value)
    }
    const handleTo = (e) => {
        setTo(e.target.value)
    }

    return (

        <div className="mt-20">
            <form action="" className="search-form absolute w-3/4 mx-auto ml-60 mt-24">

                <input type="text" placeholder="From Campus" onChange={handleFrom} required />
                <input type="text" placeholder="To  Campus" onChange={handleTo} required />
                <button className="bg-green-600 h-10 w-32 text-white text-xl" onClick={handleSubmit}>Search</button>
            </form>
            <img src={banner} alt="" srcset="" className="w-full max-h-96" />


        </div>
    );
};

export default Banner;