import { Header, CodeEditor, Sidebar } from 'Components';

import * as Styled from './styled';

export const Page = () => (
    <Styled.MainWrapper>
        <Header />
        <Styled.Wrapper>
            <Sidebar />
            <CodeEditor />
        </Styled.Wrapper>
    </Styled.MainWrapper>
);
