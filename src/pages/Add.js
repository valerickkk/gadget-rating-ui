
import React, { Component } from "react";
import GadgetService from "../services/GadgetService";
import CompanyService from "../services/CompanyService";
import AddGadgetForm from "../components/addGadgetForm/AddGadgetForm";

class Add extends Component {

    constructor(props) {
        super(props)

        this.state = {
            types: [],
            companies: []
        }
    }

    componentDidMount() {
        GadgetService.getGadgetTypes().then((res) => {
            this.setState({ types: res.data });
            this.setState({ type: this.state.types[0]})
        })
        CompanyService.getCompanies().then((res) => {
            this.setState({ companies: res.data})
        })
    }

    render() {
        return (
            <main className="section">
                <AddGadgetForm types={this.state.types} companies={this.state.companies} />
            </main>
        );
    }
}
 
export default Add;