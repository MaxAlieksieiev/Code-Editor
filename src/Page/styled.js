import styled from 'styled-components';
import Split from 'react-split';
import { Divider as MuiDivider } from '@mui/material';

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;

export const VerticalSplit = styled(Split)`
    display: flex;
    flex:1;
    background-color: grey;
`;

export const Divider = styled(MuiDivider)`
    height: 5px;
    background-color: grey;
`;
