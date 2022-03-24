import React from 'react';
import clsx from 'clsx';
// @ts-ignore
import InputMask from 'react-input-mask';
import s from './FormInput.module.scss';
import { FormInputProps } from './types';

const FormInput = ({
    type = 'text',
    placeholder,
    value,
    onChange,
    required = false,
    mask,
    name,
    className,
    focusOnMount,
}: FormInputProps): JSX.Element => {
    return (
        <>
            {mask ? (
                <InputMask
                    className={clsx(s.input, className)}
                    placeholder={placeholder}
                    required={required}
                    mask="+7 (999) 999-99-99"
                    value={value}
                    name={name}
                    onChange={onChange}
                    autoFocus={focusOnMount}
                />
            ) : (
                <input
                    className={clsx(s.input, className)}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    onChange={onChange}
                    required={required}

                />
            )}
        </>
    );
};

export { FormInput };
