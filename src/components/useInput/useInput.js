import React from 'react';
import { useState, useEffect } from 'react';

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

export default useInput;