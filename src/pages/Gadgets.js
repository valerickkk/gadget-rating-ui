import React, { Component } from "react";
import Project from "../components/project/Project";

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
                    <ul className="projects">
                        {this.state.phones.map(phone => {
                            return <Project key = {phone.id} title = {phone.model} img = {phone.images[0].content} id = {phone.id}/>
                        })}
                    </ul>
                </div>
            </main>
        );
    }
}
 
export default Gadgets;