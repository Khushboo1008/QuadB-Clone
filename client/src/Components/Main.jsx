import React from 'react'
import crypt from "./../Images/crypt.png"

const Main = () => {
    return (
        <div>
        <div className="d-flex m-5">
            <div className="mt-0 m-5 text-center">
                <h1 className="mt-3" style={{color: "#5dc7c2",fontSize:"300%"}}>0.16%</h1>
                <h5 className="text-center" style={{color:"#6c757d"}}>5 mins</h5>
            </div>
            <div className="mt-0 m-5 text-center">
                <h1 className="mt-3 m-2" style={{color: "#5dc7c2",fontSize:"300%"}}>0.16%</h1>
                <h5 className="text-center" style={{color:"#6c757d"}}>1 Hour</h5>
            </div>
            <div className="mt-0 m-5 text-center">
                <h1 className="mt-0 m-4" style={{color: "white",fontSize:"500%"}}>₹41,05,545</h1>
                <h5 className="text-center" style={{color:"#6c757d"}}>Average BTC/INR net price including commission</h5>
            </div>
            <div className="mt-0 m-5 text-center">
                <h1 className="mt-3" style={{color: "#5dc7c2",fontSize:"300%"}}>0.16%</h1>
                <h5 className="text-center" style={{color:"#6c757d"}}>1 Day</h5>
            </div>
            <div className="mt-0 m-5 text-center">
                <h1 className="mt-3" style={{color: "#5dc7c2",fontSize:"300%"}}>0.16%</h1>
                <h5 className="text-center" style={{color:"#6c757d"}}>7 Days</h5>
            </div>
            </div>
            <a target="_blank"href="https://finstreet.in/courses">
            <img style={{width:"1400px",height:"190px",padding:"0%"}} className="mt-0 m-5 mb-5 ml-5 p-0"src={crypt} alt="Logo" />;
            </a>
        </div>
    )
}
export default Main;
