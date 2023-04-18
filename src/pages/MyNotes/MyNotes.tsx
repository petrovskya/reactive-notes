import React, { useState } from 'react';
import { ActiveNote, CustomBasicList, CustomButton } from 'components';
import { StyledMyNotes } from './styles';
import { NOTES } from 'utils';
import { NoteProps } from 'utils/notes';

export const MyNotes = () => {
  const [activeNote, setActiveNote] = useState<NoteProps | null>(null);
  return (
    <StyledMyNotes>
      <ActiveNote note={activeNote} />
      <CustomBasicList
        notes={NOTES}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <CustomButton />
    </StyledMyNotes>
  );
};
