import { Header, CodeEditor, Sidebar } from 'Components';

import * as Styled from './styled';

export const Page = () => (
    <Styled.MainWrapper>
        <Header />
        <Styled.Divider />
        <Styled.Wrapper>
            <Styled.VerticalSplit
                sizes={[25, 75]}
            >
                <Sidebar />
                <CodeEditor />
            </Styled.VerticalSplit>
        </Styled.Wrapper>
    </Styled.MainWrapper>
);
