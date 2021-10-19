import { useContext } from 'react';
import { DoctorContext } from '../context/DoctorsProvider';

const useDoctors = () => {
    return useContext(DoctorContext);
};

export default useDoctors;
