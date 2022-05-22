import { FILE_OPTIONS, TERMINAL_OPTIONS } from 'Constants';

import { Menu } from '../menu';
import * as Styled from './styled';

export const Header = () => {
    const handleType = (type, operation) => {
        console.log(`type ${type} operation ${operation.title}`);
    };
    
    return (
        <Styled.Wrapper>
            <Styled.Content>
                <Menu title="File" arrayOfFunctionality={FILE_OPTIONS} callbackFunction={handleType} />
                <Menu title="Terminal" arrayOfFunctionality={TERMINAL_OPTIONS} callbackFunction={handleType} />
            </Styled.Content>
        </Styled.Wrapper>
    );
};
