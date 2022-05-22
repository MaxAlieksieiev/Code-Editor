import styled from 'styled-components';
import Split from 'react-split';

export const Wrapper = styled.div`
    display: flex;
    flex: 1;
    height: calc(100vh - 40px);
    overflow: hidden;
`;
    
export const HorizontalSplit = styled(Split)`
    flex: 1;
    display: flex;
    flex-direction: column;
    background: grey;
`;

export const Container = styled.div`
    height: 100%;
    width: 100%;
    overflow: auto;
`;
