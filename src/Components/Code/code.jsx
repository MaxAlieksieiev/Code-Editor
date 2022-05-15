import { CodeContainer, TerminalContainer } from './components';

import * as Styled from './styled';

export const CodeEditor = () => (
    <Styled.Wrapper>
        <Styled.HorizontalSplit
            sizes={[50, 50]}
            direction="vertical"
            gutterSize={10}
        >
            <Styled.Container>
                <CodeContainer />
            </Styled.Container>
            <Styled.Container>
                <TerminalContainer />
            </Styled.Container>
        </Styled.HorizontalSplit>
    </Styled.Wrapper>
);
