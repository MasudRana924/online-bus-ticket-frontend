import React from 'react';
import { ThreeDots } from 'react-loader-spinner'
const Loader = () => {
    return (
        <div className="bg-white w-1/4 mx-auto lg:mt-96 justify-items-center">
            <div className="w-1/4 mx-auto">
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#4fa94d"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
                <h2 className="text-black  text-xl font-bold">DIU BUS</h2>
            </div>
        </div>
    );
};
export default Loader;