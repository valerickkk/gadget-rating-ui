
import React, { Component } from "react";
import GadgetService from "../services/GadgetService";
import CompanyService from "../services/CompanyService";

class Add extends Component {

    constructor(props) {
        super(props)

        this.state = {
            types: [],
            companies: [],
            type: '',
            company: {},
            model: '',
            images: []
        }

        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.changeCompanyHandler = this.changeCompanyHandler.bind(this);
        this.changeModelHandler = this.changeModelHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.saveGadget = this.saveGadget.bind(this);
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

    changeTypeHandler = (event) => {
        this.setState({type: event.target.value})
    }

    changeCompanyHandler = (event) => {
        this.setState({company: this.state.companies.find(c => c.id.toString() === event.target.value)})
    }

    changeModelHandler = (event) => {
        this.setState({model: event.target.value})
        console.log(this.state)
    }

    changeImageHandler = (event) => {
        this.setState({images: event.target.files})
        console.log(event.target.files)
    }

    saveGadget = (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('type', this.state.type)
        formData.append('companyId', this.state.company.id)
        formData.append('model', this.state.model)
        for (const image of this.state.images) {
            formData.append('images', image)
        }

        GadgetService.createGadget(formData).then(function (response) {
            console.log(response.data);
          });
    }

    render() {

        return (
            <main className="section">
                <div className="container">
                    <h1 className="title-1">Add new gadget</h1>
                    <div className='creation-form-card'>
                        <form className="creation-form-content">
                            <div className='input-container'>
                                <label className="input-label">Gadget type</label>
                                <select name="type" className='select-css' onChange={this.changeTypeHandler}>
                                    <option disabled selected value>select a type...</option>
                                    {this.state.types.map((type) => {
                                        return <option value={type} label={type.toLowerCase()} />
                                    })}
                                </select>
                            </div>
                            <div className='input-container'>
                                <label className="input-label">Company</label>
                                <select name="company" className='select-css' onChange={this.changeCompanyHandler}>
                                    <option disabled selected value>select a company...</option>
                                    {this.state.companies.map((company) => {
                                        return <option placeholder="Select company" value={company.id} label={company.name} />
                                    })}
                                </select>
                            </div>
                            <div className='input-container'>
                                <label className="input-label">Model</label>
                                <input placeholder='model' name='model' className='input'
                                    value={this.state.model} onChange={this.changeModelHandler}/>
                            </div>
                            <div className='input-container'>
                                <label className="input-label">Image</label>
                                <input type="file" name='image' className='input'
                                    accept="image/*,.png,.jpg"
                                    value={this.state.image} onChange={this.changeImageHandler}/>
                            </div>
                            <div className="submit-btn-container">
                                <button className='btn btn-success' onClick={this.saveGadget}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        );
    }
}
 
export default Add;