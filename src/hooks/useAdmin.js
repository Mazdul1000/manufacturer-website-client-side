import { useEffect, useState } from "react"

const useAdmin = user => {
    const [adLoading, setAdLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    

    useEffect( () => {
      const email = user?.email;
      if(email){
        fetch(` https://agri-tools.herokuapp.com/admin/${email}`, {
            method:'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        
        })
        .then(res=>res.json())
        .then(data => {
           
            setAdmin(data.admin);
            setAdLoading(false);
        })
    }
    },[user])
    return [admin, adLoading]
}

export default useAdmin;