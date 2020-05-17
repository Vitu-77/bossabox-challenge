import React, { useState, useEffect } from 'react';
import { MdCheck } from 'react-icons/md';

import { StyledCheckBox, CheckMark } from './styles';

export const CheckBox = ({ onCheck, onUncheck, label, defaultChecked = false }) => {
    const [checked, setChecked] = useState(defaultChecked);

    useEffect(() => {
        if (checked) {
            onCheck && onCheck();
        } else {
            onUncheck && onUncheck();
        }
    }, [checked, onCheck, onUncheck]);

    return (
        <StyledCheckBox>
            <input type='checkbox' />
            <CheckMark checked={checked} onClick={() => setChecked(!checked)}>
                {checked && <MdCheck />}
            </CheckMark>
            <label>{label}</label>
        </StyledCheckBox>
    )
}