import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const RequireAdmin = () => {
    const [user, loading] = useAuthState(auth);
};

export default RequireAdmin;