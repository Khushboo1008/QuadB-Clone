import React from 'react'
import {Table} from "react-bootstrap";
import "./../css/Header.css"
import Copyright from "./Copyright"
import crypt from "./../Images/crypt3.png"



const table = () => {
    return (
        <div className="text-center mt-0 m-4" style={{width: "89%"}}>
            <Table striped bordered hover variant="dark" responsive="lg" className="table table-lg m-5 mr-5">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Platform</th>
                    <th>Last Traded Price</th>
                    <th>Buy / Sell Price</th>
                    <th>Difference</th>
                    <th>Savings</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>₹ 40,98,829</td>
                    <td>₹ 40,83,683 / ₹ 40,98,829</td>
                    <td style={{color:"red"}}>-0.16 %</td>
                    <td style={{color:"red"}}>▼ ₹ 6,716</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Mark</td>
                    <td>₹ 40,59,179</td>
                    <td>₹ 40,43,337 / ₹ 40,50,246</td>
                    <td style={{color:"red"}}>-1.13 %</td>
                    <td style={{color:"red"}}>▼ ₹ 46,365</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Mark</td>
                    <td>₹ 41,76,970</td>
                    <td>₹ 41,36,800 / ₹ 41,76,990</td>
                    <td style={{color:"#5dc7c2"}}>1.74 %</td>
                    <td style={{color:"#5dc7c2"}}>▲ ₹ 71,424</td>
                    </tr>
                    <tr>
                    <td>4</td>
                    <td>Mark</td>
                    <td>₹ 40,63,856</td>
                    <td>₹ 40,45,614 / ₹ 40,86,275</td>
                    <td style={{color:"red"}}>-1.02 %</td>
                    <td style={{color:"red"}}>▼ ₹ 41,689</td>
                    </tr>
                    <tr>
                    <td>5</td>
                    <td>Mark</td>
                    <td>₹ 40,95,000</td>
                    <td>₹ 40,95,000 / ₹ 40,92,619</td>
                    <td style={{color:"red"}}>-0.26 %</td>
                    <td style={{color:"red"}}>▼ ₹ 10,545</td>
                    </tr>
                    <tr>
                    <td>6</td>
                    <td>Mark</td>
                    <td>₹ 41,39,437</td>
                    <td>₹ 41,33,308 / ₹ 41,41,975</td>
                    <td style={{color:"#5dc7c2"}}>0.83 %</td>
                    <td style={{color:"#5dc7c2"}}>▲ ₹ 33,891</td>
                    </tr>
                    </tbody>
                </Table>
                <a target="_blank"href="https://ftx.com/">
            <img style={{width:"1350px",height:"190px",padding:"0%",borderRadius:"100px"}} className="mt-0 m-5 mb-5 ml-5 p-0"src={crypt} alt="Logo" />;
            </a>
                <Copyright/>
                
        </div>
    )
}
export default table;
