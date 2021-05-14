import React from "react"
import { Row , Col , DropdownButton, Dropdown,Nav, Button, InputGroup,FormCheck,Form} from "react-bootstrap"
import "../css/Header.css"

export default function Header() {
    return (
        <div>
            <Row className="align-items-center m-0">
            <Col>
                <div className="m-3 ml-5 mr-5">
                    <h1 className="align-items-center justify-content-center" style={{color: "white"}}>HODLINFO</h1>
                    <span style={{color: "white"}}>powered by <span style={{color: "#5dc7c2"}}>FinStreet</span></span>
                </div>
            </Col>
            <Col className="d-flex text-center mr-5" style={{width:"450%",position:"relative",left:"280px"}}>
            <DropdownButton className="d-flex m-2" variant="secondary" style={{width: "30%", margin:"0%",padding:"0%"}} title="INR">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            </DropdownButton>
            <DropdownButton className="d-flex m-2"variant="secondary" style={{width: "30%",margin: "0%"}}title="BTC">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            </DropdownButton>
            <Button className="d-flex m-2" variant="secondary" style={{width: "30%"}}>BUY BTC</Button>
            </Col>
            <Col className="d-flex m-5 mr-0" style={{position:"relative",left: "500px"}}>
                <Button className="btn btn rounded" style={{backgroundColor:"#5dc7c2"}}>Connect to telegram</Button>
            </Col>
            <Col className="d-flex m-5">
            <div>
            <label class="switch">
        <input type="checkbox"></input>
            <span class="slider round"></span>
        </label>
        </div>
            </Col>
            </Row>
        </div>
        
    )
}
