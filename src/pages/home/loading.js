import {useState ,  useEffect } from "react";
import './loading.css'
const Loading = ()=> {
    const [isPending, setIsPending] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setIsPending(false);
        },2000);
    })
    return {isPending};
}

export default Loading;