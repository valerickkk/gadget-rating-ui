import React, { Component } from 'react';
import Gadget from '../gadget/Gadget';
import PhoneService from '../../services/PhoneService';
import './style.css'

class Recommendation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gadget: {
                images: [
                    {
                        content: ''
                    }
                ]
            }
        }
    }

    componentDidMount() {
        PhoneService.getPhoneById(1).then((res) => {
            this.setState({ gadget: res.data });
        })
    }

    render() {
        return (
            <div className='recommendation'>
                <h1 className='recommendation_label'>We recommend!</h1>
                <Gadget key = {this.state.gadget.id} title = {this.state.gadget.model} img = {this.state.gadget.images[0].content} id = {this.state.gadget.id} />
            </div>
        );
    }
}

export default Recommendation;