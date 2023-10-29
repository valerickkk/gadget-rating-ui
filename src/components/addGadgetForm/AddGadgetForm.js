import React, { useEffect, useState } from 'react';
import GadgetService from "../../services/GadgetService";
import { useNavigate } from 'react-router-dom';

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [isEmpty, setEmpty] = useState(true);
    const [isDirty, setDirty] = useState(false);
    const [isValid, setValid] = useState(true);
    const [isReadyForSent, setReadyForSent] = useState(false);

    const onChange = (event) => {
        const value = event.target.value;
        value ? setEmpty(false) : setEmpty(true);
        setValue(value);
    }

    const onChangeFiles = (event) => {
        const value = event.target.files;
        value ? setEmpty(false) : setEmpty(true);
        setValue(value);
    }

    const onBlur = (event) => {
        setDirty(true);
    }

    useEffect(() => {
        if (isEmpty && isDirty) {
            setValid(false);
            setReadyForSent(false);
            console.log(false)
        } else {
            setValid(true);
            if (!isEmpty) {
                setReadyForSent(true);
            }
        }
    }, [isEmpty, isDirty])

    return {
        value,
        onChange,
        onChangeFiles,
        onBlur,
        isValid,
        isReadyForSent
    }
}

const AddGadgetForm = ({types, companies}) => {

    const navigate = useNavigate();
    const type = useInput('', {isEmpty: true})
    const company = useInput('')
    const model = useInput('')
    const images = useInput([])

    const saveGadget = (e) => {
        e.preventDefault()
    
        const formData = new FormData()
    
        formData.append('type', type.value)
        formData.append('companyId', company.value)
        formData.append('model', model.value)
        for (const image of images.value) {
            formData.append('images', image)
        }
    
        GadgetService.createGadget(formData).then(function (response) {
            navigate('/gadgets')
        });
    }

    return (
        <div className="container">
            <h1 className="title-1">Add new gadget</h1>
            <div className='creation-form-card'>
                <form className="creation-form-content">
                    <div className='input-container'>
                        <label className="input-label">Gadget type</label>
                        <select name='type' className={'select' + (!type.isValid ? ' input-error' : '')}
                         onChange={type.onChange} onBlur={type.onBlur}>
                            <option disabled selected value>select a type...</option>
                            {types.map((type) => {
                                return <option value={type} label={type.toLowerCase()} />
                            })}
                        </select>
                    </div>
                    <div className='input-container'>
                        <label className="input-label">Company</label>
                        <select name="company" className={'select' + (!company.isValid ? ' input-error' : '')}
                         onChange={company.onChange} onBlur={company.onBlur}>
                            <option disabled selected value>select a company...</option>
                            {companies.map((company) => {
                                return <option placeholder="Select company" value={company.id} label={company.name} />
                            })}
                        </select>
                    </div>
                    <div className='input-container'>
                        <label className="input-label">Model</label>
                        <input placeholder='model' name='model' className={'input' + (!model.isValid ? ' input-error' : '')}
                            value={model.value} onChange={model.onChange} onBlur={model.onBlur}/>
                    </div>
                    <div className='input-container'>
                        <label className="input-label">Image</label>
                        <input type="file" name='image' className={'input' + (!images.isValid ? ' input-error' : '')}
                            accept="image/*,.png,.jpg"
                             onChange={images.onChangeFiles} onBlur={images.onBlur}/>
                    </div>
                    <div className="submit-btn-container">
                        <button className='btn btn-success' onClick={saveGadget}
                        disabled={!type.isReadyForSent || !company.isReadyForSent || !model.isReadyForSent || !images.isReadyForSent}>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddGadgetForm;