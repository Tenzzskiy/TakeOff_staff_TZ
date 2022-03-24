import React from 'react';

export interface FormInputProps {
    type?: React.HTMLInputTypeAttribute;
    value?: string;
    onChange: any;
    placeholder?: string;
    required?: boolean;
    mask?: boolean;
    className?: string;
    focusOnMount?: boolean;
    name?:any;
}
