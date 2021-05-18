import React from "react"
import { Row , Col , DropdownButton, Dropdown,Nav, Button, InputGroup,FormCheck,Form} from "react-bootstrap"
import {FaTelegram} from "react-icons/fa"
import "../css/Header.css"
// import Timer from "./Timer"

export default function Header() {
    return (
        <div>
            {/* <Row className="align-items-center m-0">
            <Col>
                <div className="m-3 ml-5 mr-5">
                    <h1 className="align-items-center justify-content-center" style={{color: "white"}}>HODLINFO</h1>
                    <span style={{color: "white"}}>powered by <span style={{color: "#5dc7c2"}}>FinStreet</span></span>
                </div>
            </Col>
            <Col className="d-flex text-center mr-5" style={{width:"450%",position:"relative",left:"280px"}}>
            <DropdownButton className="d-flex m-2" variant="secondary" style={{width: "30%", margin:"0%",padding:"0%"}} title="INR">
                <Dropdown.Item href="#/action-1">INR</Dropdown.Item>
            </DropdownButton>
            <DropdownButton className="d-flex m-2"variant="secondary" style={{width: "30%",margin: "0%"}}title="BTC">
                <Dropdown.Item href="#/action-1">BTC</Dropdown.Item>
                <Dropdown.Item href="#/action-1">ETH</Dropdown.Item>
                <Dropdown.Item href="#/action-2">USDT</Dropdown.Item>
                <Dropdown.Item href="#/action-3">XRP</Dropdown.Item>
                <Dropdown.Item href="#/action-1">TRX</Dropdown.Item>
                <Dropdown.Item href="#/action-1">DASH</Dropdown.Item>
                <Dropdown.Item href="#/action-1">ZEC</Dropdown.Item>
                <Dropdown.Item href="#/action-1">XEM</Dropdown.Item>
                <Dropdown.Item href="#/action-1">IOST</Dropdown.Item>
                <Dropdown.Item href="#/action-1">WIN</Dropdown.Item>
                <Dropdown.Item href="#/action-1">BTT</Dropdown.Item>
                <Dropdown.Item href="#/action-1">WRX</Dropdown.Item>
            </DropdownButton>
            <Button className="d-flex m-2" variant="secondary" style={{width: "30%"}}>BUY BTC</Button>
            </Col>
            <Col className="d-flex m-5 mr-0" style={{position:"relative",left: "500px"}}>
                <Button className="btn btn rounded" style={{backgroundColor:"#5dc7c2"}}>Connect to telegram</Button>
            </Col>
            <Col className="d-flex m-5" style={{position:"relative",left: "250px"}}>
            <div>
                <label class="switch">
                    <input type="checkbox"></input>
                    <span class="slider round"></span>
                </label>
            </div>
            </Col>
            </Row> */}
            <div className="d-flex">
            <div className="mt-3" style={{marginLeft:"5%"}}>
                    <h1 className="align-items-center justify-content-center" style={{color: "#5dc7c2"}}>HODLINFO</h1>
                    <span style={{color: "white"}}>powered by <span style={{color: "#5dc7c2"}}>FinStreet</span></span>
            </div>
            <div className="d-flex" style={{marginLeft:"24%"}}>
            <DropdownButton className="mt-4"variant="secondary"title="INR">
                <Dropdown.Item href="#/action-1">INR</Dropdown.Item>
            </DropdownButton>
            <DropdownButton className="m-4"variant="secondary"title="BTC">
                <Dropdown.Item href="#/action-1">BTC</Dropdown.Item>
                <Dropdown.Item href="#/action-1">ETH</Dropdown.Item>
                <Dropdown.Item href="#/action-2">USDT</Dropdown.Item>
                <Dropdown.Item href="#/action-3">XRP</Dropdown.Item>
                <Dropdown.Item href="#/action-1">TRX</Dropdown.Item>
                <Dropdown.Item href="#/action-1">DASH</Dropdown.Item>
                <Dropdown.Item href="#/action-1">ZEC</Dropdown.Item>
                <Dropdown.Item href="#/action-1">XEM</Dropdown.Item>
                <Dropdown.Item href="#/action-1">IOST</Dropdown.Item>
                <Dropdown.Item href="#/action-1">WIN</Dropdown.Item>
                <Dropdown.Item href="#/action-1">BTT</Dropdown.Item>
                <Dropdown.Item href="#/action-1">WRX</Dropdown.Item>
            </DropdownButton>
            <div className="btn-grp">
                <Button className="btn btn-xl mt-4" variant="secondary">BUY BTC</Button>
            </div>
            </div>
            <div className="mt-4" style={{marginLeft:"20%"}}>
               <Button className="btn btn rounded" style={{backgroundColor:"#5dc7c2"}}><FaTelegram/> Connect to Telegram</Button>
            </div>
            </div>
        </div>
        
    )
}
