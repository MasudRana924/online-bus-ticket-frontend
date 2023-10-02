import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bus from '../../components/bus/Bus';
import { useEffect } from 'react';
import { fetchBuses } from '../../state/buses/busesSlice';


const Buses = () => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(3);
    const loadMore = () => {
        setVisible(visible + 3);
    };
    const { buses } = useSelector(state => state.buses.buses);
    useEffect(() => {
        dispatch(fetchBuses());
    }, [dispatch])
    let content;
    if (buses?.length === 0) {
        content = <div className="col-span-12  ">
            <div class="alert alert-error shadow-lg text-start  mt-5 h-12 w-1/4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-black">No Bus Found</span>
            </div>
        </div>
    }
    if (buses?.length > 0) {
        content = buses.slice(0, visible).map(bus => <Bus key={bus._id} bus={bus} />)
    }
    return (
        <section className=" pt-12 mb-10 mt-28">
            <div className="flex justify-between w-2/4 mx-auto ">
                <h1 className=" font-bold text-4xl lg:text-3xl ">Our Buses </h1>
            </div>
            <div
                className="grid grid-cols-12 gap-4  w-2/4 mx-auto  lg:px-0 min-h-[300px] mt-10 md:mt-16 lg:mt-12 " >
                {content}

                <div className="col-span-12 ">
                    {visible && (buses?.length > 0 && (
                        <button onClick={loadMore} className="btn btn-sm bg-green-600 border-green-600 mx-auto mt-5 mb-10">Load More</button>
                    ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Buses;