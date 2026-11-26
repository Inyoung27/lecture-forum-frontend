import styled from "styled-components";
import type { InputHTMLAttributes } from "react";
import Input from "./Input.tsx";

const StyledInputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Label = styled.label`
    font-size: 14px;
    font-weight: 800;
    color: ${props => props.theme.color.text.default};
`;

const ErrorMessage = styled.span`
    font-size: 13px;
    color: ${props => props.theme.color.error};
    font-weight: 500;
`;

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    errorMessage?: string;
    id?: string;
    wrap?: boolean;
}

function InPutGroup({ label, errorMessage, id, ...x }: Props) {
    return (
        <StyledInputGroup>
            {label && <Label>{label}</Label>}
            <Input id={id} $errorMessage={errorMessage} {...x} />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </StyledInputGroup>
    );
}

export default InPutGroup;