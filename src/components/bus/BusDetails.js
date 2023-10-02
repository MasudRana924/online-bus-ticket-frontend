import React from 'react';
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { createBookings } from '../../state/order/orderSlice';


const BusDetails = ({ bus }) => {
    const dispatch = useDispatch();
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const user = loggeduser.user;
    const userToken = loggeduser.token
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const busId = bus._id
    // const reviewSubmitHandler = () => {
    //     const myForm = new FormData();
    //     myForm.set("rating", rating);
    //     myForm.set("comment", comment);
    //     myForm.set("doctorId", bus._id);
    //     const data = ({ rating, comment, busId });
    //     if (userToken) {
    //         dispatch(createreviews({ data, userToken }));
    //         toast.success('Review Added', {
    //             position: "bottom-center",
    //             autoClose: 3000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "dark",
    //         },
    //         );
    //     }
    // };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('');
    const [quantity, setQuantity] = useState();
    // const name=user.name;
    // const email=user.email;
    const busname = bus.name;
    const price = bus.price;
    const image = bus.image;
    const data = ({ name, email, phone, quantity, busname, price, image, busId });
    const handleCreate = (e) => {
        e.preventDefault();
        if (name && email && phone && quantity) {
            dispatch(createBookings({
                data, userToken
            }));
            toast.success('Your Booking placed ', {
                position: "top-right",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            // window.location.replace(GatewayPageURL)
            // navigate(GatewayPageURL)

        } else {
            toast.error('Please enter your details', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }
    return (
        <div>
            <div className="w-full   mb-5 mt-20 grid lg:grid-cols-2 ">
                <div>
                    <img
                        src={bus.images[0].url}
                        className="w-3/4 mx-auto max-h-72 "
                        alt={bus.name}
                    />

                </div>
                <div className="text-start ml-5 text-sm font-semibold leading-6 text-gray-900">
                    <Link to={`/bus/${bus._id}`} >
                        <p className="text-sm font-semibold leading-6 text-gray-900 mt-5" >
                            {bus.name}
                        </p>
                    </Link>
                    <p className="text-sm font-semibold leading-6 text-gray-900 mt-3" >
                        From :  {bus.from} to {bus.to}
                    </p>
                    <p className="text-sm font-semibold leading-6 text-gray-900 mt-3" >
                        Departure time : {bus.time}
                    </p>
                    <p className="text-sm font-semibold leading-6 text-gray-900 mt-3" >
                        Available Seats : {bus.seats}
                    </p>
                    <div className="flex gap-2 mt-3">
                        < FaRegMoneyBillAlt className="text-2xl"></FaRegMoneyBillAlt>
                        <p className="text-sm font-semibold leading-6 text-gray-900" >
                            {bus.price}Tk
                        </p>
                    </div>
                    {
                        bus?.seats > 0 ?
                            <a href="#my_modal_8" className="btn btn-sm bg-black hover:bg-black border-black mt-5 text-white">Book Now</a> : <p className="text-red-600 font-bold mt-10">No Tickets Available</p>
                    }

                    {/* booking modal */}
                    {
                        userToken ? <div className="modal" id="my_modal_8">
                            <div className="modal-box">
                                <div classNAme="flex justify-between">
                                    <h3 class="text-center text-2xl font-bold absolute">Confirm Your Ticket</h3>
                                    <div className="modal-action">
                                        <a href="#" className="btn text-red-900 btn-sm bg-white">X</a>
                                    </div>
                                </div>

                                <form action="" className="mt-5" onSubmit={handleCreate}>
                                    <div className="ml-16">
                                        <div>

                                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="border-2 border-black w-3/4 p-2 h-12 mx-auto" />
                                        </div>
                                        <div>

                                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border-2 border-black w-3/4 p-2 h-12 mx-auto mt-3" />
                                        </div>
                                        <div>

                                            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone " className="border-2 border-black w-3/4 p-2 h-12 mx-auto mt-3" />
                                        </div>
                                        <div>

                                            <select className="w-3/4 h-12 border-2 border-black  mt-3" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                                                <option  >Select Quantity </option>
                                                <option  >1 </option>
                                                <option >2</option>
                                            </select>
                                        </div>
                                        <div className="">
                                            <button className="btn bg-green-900 w-3/4 mt-5 h-12 text-white font-semibold text-center mb-5 hover:bg-green-900">Book Now</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div> : <div className="modal" id="my_modal_8">
                            <div className="modal-box">
                                <div classNAme="flex justify-between">
                                    <h3 class="text-center text-red-600 text-2xl font-bold absolute">Please be logged in</h3>
                                    <div className="modal-action">
                                        <a href="#" className="btn text-red-900 btn-sm bg-white">X</a>
                                    </div>
                                </div>


                            </div>
                        </div>
                    }
                </div>
            </div>
            {/* <div className="grid grid-cols-2">
                <div >

                    <h2 className="text-start text-md">Reviews ({reviews.length})</h2>
                    {
                        reviews[0] ? reviews.map((review) => (<Reviews key={review._id} review={review} />))
                            : <p className="text-2xl text-start mt-10 text-red-700">No Reviews Yet !!!</p>
                    }
                </div>
                {
                    user ? <div className="w-2/4  ml-5">
                        <p className="mb-3 text-start font-semibold">Give a review</p>
                        <Rating
                            onChange={(e) => setRating(e.target.value)}
                            value={rating}
                            className='w-full'
                        />
                        <br />
                        <textarea placeholder="Write ..." class="textarea textarea-bordered textarea-sm mt-2 w-full ml-0" value={comment}
                            onChange={(e) => setComment(e.target.value)}></textarea>
                        <br />
                        <button class="btn w-full mt-2 bg-violet-600 border-violet-600" onClick={reviewSubmitHandler}>Submit</button>
                    </div> : <div class="alert alert-error shadow-lg w-3/4 mt-5 h-12 ml-5">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Please be Login to Give a Review</span>
                        </div>
                    </div>
                }
            </div> */}
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

export default BusDetails;