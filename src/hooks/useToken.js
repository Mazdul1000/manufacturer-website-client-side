import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect( () => {

        const email = user?.user?.email;
        const name = user?.user?.displayName;
        console.log(name);
        let avatar = 'https://i.ibb.co/KzCQm2r/blank-image.jpg';
        if(user?.user?.photoURL){
            avatar = user?.user?.photoURL;
        }
        
        const currentUser = {email: email, name: name, avatar:avatar};
        console.log(currentUser);
    

        if(email){
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log('data inside useToken', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }
    },[user])
    return [token]
}

export default useToken;