import { CustomNoteCard } from 'components';
import React from 'react';
import { NoteProps } from 'utils/notes';

interface ActiveNoteProps {
  note: NoteProps | null;
}
export const ActiveNote = ({ note }: ActiveNoteProps) => {
  return note ? <CustomNoteCard note={note} /> : <p>Select note to display</p>;
};
