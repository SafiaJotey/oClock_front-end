import { useEffect, useState } from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail,updateProfile } from "firebase/auth";
import initializeAuthentication from './../../Pages/Login/Firebase/firebase.init';
import { useHistory, useLocation } from 'react-router';



initializeAuthentication();
const useFirebase = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const[admin,setAdmin]=useState(false)

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
   

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
         
            .finally(() => setIsLoading(false));
    }
   
//register and login with email pass
const handleNameChange = e => {
    // console.log(e.target.value);
    setName(e.target.value);
}
const handleEmailChange = e => {
    // console.log(e.target.value);
    setEmail(e.target.value);
}
const handlePasswordChange = e => {
    //console.log(e.target.value);
    setPassword(e.target.value);
}
const toggleLogin = e => {
    // console.log(e.target.checked);
    setIsLogin(e.target.checked);
}

const handleRegistration = e => {
    
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
        setError('password must be 6 characters long.')
        return;
    }
   
    // isLogin ? processLogin(email, password) : registerNewUser(email, password);
    if (isLogin) {
        processLogin(email, password);
    }
    else {
        registerNewUser(email, password);
    }

}

const processLogin = (email, password) => {
    
    signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            setError('');
        })
        .catch(error => {
            setError(error.message);
        });
}

const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            setError('');
            setUser(user);
            saveUser(email,name);
            setUserName();
            alert("Registration succesful! Please log in to explore.");
            updateProfile(auth.currentUser,{
                displayName:name
            }).then(()=>{

            })
        })
        .catch(error => {
            setError(error.message);
        });
}

const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
        .then(result => { })
}

const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
        .then(result => { })
}



    


    // // observe user state change
    const unsubscribed = useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, []);

useEffect(()=>{
    fetch(`http://localhost:5000/${user.email}`)
    .then(res=>res.json())
    .then(data=>setAdmin(data.admin))
},[user.email])

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }
    

    const saveUser=(email,displayName)=>{
               const user={email,displayName};
               fetch('http://localhost:5000/users',{
                   method: 'POST',
                   headers:{
                       'content-type': 'application/json'
                   },
                   body:JSON.stringify(user)
               })
               .then()
    }
    return {
        user,
        error,
        signInUsingGoogle,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        handleRegistration,
        handleResetPassword,
        isLogin,
        isLoading,
        admin,
        logout
    }
}

export default useFirebase;
