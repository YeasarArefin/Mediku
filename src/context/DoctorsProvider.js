import React, { createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const DoctorContext = createContext();

const DoctorsProvider = ({ children }) => {

    const doctors = useFetch();

    return (

        <DoctorContext.Provider value={doctors}>
            {children}
        </DoctorContext.Provider>

    );

};

export default DoctorsProvider;
