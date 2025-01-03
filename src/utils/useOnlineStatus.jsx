import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    //check if online/offline 
    useEffect(() =>{
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        });
        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        });
    }, []);

    //bool value -> onlineStatus -> Yes/No
    return onlineStatus;
};

export default useOnlineStatus;