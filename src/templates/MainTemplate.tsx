import { CustomAppBar } from 'components';
import { MyNotesContainer } from 'pages/MyNotes';

import { StyledMainTemplate } from './styles';

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <CustomAppBar />
      <MyNotesContainer />
    </StyledMainTemplate>
  );
};
