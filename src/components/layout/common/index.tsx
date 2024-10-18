import type { PropsWithChildren } from "react";
import styled from "styled-components";
import { ScrollView } from "react95";
import { TaskBar } from "../../taskbar";
import { MINIMUM_APP_HEIGHT, MINIMUM_APP_WIDTH } from "../../../utility/app-setting";

export const CommonLayout = ({ children }: PropsWithChildren) => {
  return (
    <Screen>
      <Container>
        {children}
        <TaskBar />
      </Container>
    </Screen>
  );
};

const Screen = styled(ScrollView)`
  overflow: auto;
  padding: 0 !important;
  border: 0;
  &::before {
    content: unset;
  }

  & > div {
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: ${MINIMUM_APP_WIDTH}px;
  min-height: ${MINIMUM_APP_HEIGHT}px;
  height: 100dvh;
  width: 100%;
  padding: 0;
`;