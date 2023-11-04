import React, { Component } from "react";
import Gadget from "../components/gadget/Gadget";
import PhoneService from "../services/PhoneService";

class Gadgets extends Component {

    constructor(props) {
        super(props)

        this.state = {
            phones: []
        }
    }

    componentDidMount() {
        PhoneService.getPhones().then((res) => {
            this.setState({ phones: res.data });
        })
    }

    render() {
        return (
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Gadgets</h2>
                    <ul className="gadgets">
                        {this.state.phones.map(phone => {
                            return <Gadget key = {phone.id} title = {phone.model} img = {phone.images[0].content} id = {phone.id}/>
                        })}
                    </ul>
                </div>
            </main>
        );
    }
}
 
export default Gadgets;