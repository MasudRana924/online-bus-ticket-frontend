import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegMoneyBillAlt } from "react-icons/fa";
const Bus = ({ bus }) => {
    
    return (
        <div className="doctors-card border  col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4  ">
            <div className="w-full flex flex-col ">
                <div className="relative">
                    <Link >
                        <img
                            src={bus.images[0].url}
                            className="w-full h-48"
                            alt={bus.name}
                        />
                    </Link>
                </div>

                <div className="hidden lg:block md:block text-start p-5">
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
                    <Link to={`/bus/${bus._id}`}>
                    <button className="btn btn-sm bg-black hover:bg-black border-black mt-3 text-white">Book a Ticket</button>
                    </Link> :null
                   }

                
                </div>
               
            

            </div>
        </div>
    );
};

export default Bus;