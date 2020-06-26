import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 30px;
    margin-left: 25px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 25px;
    margin-right: 45px;
    font-size: 20px;
    background-color: lightgray;
    border-radius: 20px;
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;

