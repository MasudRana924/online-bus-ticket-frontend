import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchBus } from '../../state/buses/busDetailsSlice';
import BusDetails from '../../components/bus/BusDetails';



const SingleBus = () => {
    const dispatch = useDispatch();
    const { busId } = useParams()
    const { bus, isLoading, isError, } = useSelector(state => state.bus.bus);
    useEffect(() => {
        dispatch(fetchBus(busId))
    }, [dispatch,busId])
    let content;
    // if (isLoading) content = <Loading></Loading>;
    if (!isLoading && !isError && !bus?._id) {
        content = <div className="col-span-12">No bus found ! </div>
    }
    if (!isLoading && !isError && bus?._id) {
        content = <div>
            <BusDetails bus={bus}></BusDetails>

        </div>
    }
    return (
        <section className="w-3/4 mx-auto pt-6 pb-20 mt-24">
            {content}
        </section>
    );
};
export default SingleBus;