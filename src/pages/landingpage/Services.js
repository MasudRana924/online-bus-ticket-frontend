import React from 'react';
const Services = () => {
    return (
        <div className="mt-20 w-2/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
           
                <div className="card  max-h-68 bg-base-200 border rounded">
                   
                    <div className="card-body text-center">
                        <h2 className="text-center text-3xl font-bold text-gray-900 leading-8 ">
                          Facilities
                        </h2>
                        <p className=" text-start text-md font-semibold leading-8 text-gray-600">CCTV Camera  </p>
                        <p className=" text-start text-md font-semibold leading-8 text-gray-600">Fire Extinguishers </p>
                        <p className=" text-start text-md font-semibold leading-8 text-gray-600">First Aid Box </p>
                        <p className=" text-start text-md font-semibold leading-8 text-gray-600">Air conditionar</p>
                        <p className=" text-start text-md font-semibold leading-8 text-gray-600">Excellent seats and safety belt</p>
                    </div>
                </div>
          
            <div >
                <div className="card  h-68  border rounded">
                   
                    <div className="card-body text-center bg-base-200">
                        <h2 className="text-center text-3xl font-bold text-gray-900 leading-8 ">
                         Benifits
                        </h2>
                        <p className=" text-start text-md font-semibold leading-8 text-gray-600">Always on time </p>
                        <p className=" text-start text-md font-semibold leading-8 text-gray-600">Safe and time consuming </p>
                        <p className=" text-start text-md font-semibold leading-8 text-gray-600">Better Environment </p>
                        <p className=" text-start text-md font-semibold leading-8 text-gray-600">Reduce traffic</p>
                        <p className=" text-start text-md font-semibold leading-8 text-gray-600">Reduce pollution</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Services;