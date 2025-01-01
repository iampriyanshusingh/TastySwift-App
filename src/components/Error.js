import { useRouteError } from "react-router";


const Error = ()=>{
    const error =  useRouteError();
    console.log(error);
    return (
        <div>
            <h1> Oppsss!!!</h1>
            <h2>Something went wrong</h2>
            <h2>{error.status} : {error.statusText}</h2>
        </div>
    )
}

export default Error;

//hello bhai