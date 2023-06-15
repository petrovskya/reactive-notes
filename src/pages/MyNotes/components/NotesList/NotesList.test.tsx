import { render } from '@testing-library/react';

import { TEST_NOTES } from 'config/constants';
import { INotesList } from 'pages/MyNotes/types';

import { default as NotesList } from './NotesList';
import { default as Note } from '../Note';

jest.mock('../Note');

describe('<NotesList>', () => {
  const defaultProps: INotesList = {
    isEditMode: false,
    isLoading: false,
    isFetching: false,
    hasNextPage: false,
    setLastNoteInView: jest.fn(),
    handleSetNoteDragEnd: jest.fn(),
    handleSetEditMode: jest.fn(),
    editNote: jest.fn(),
  };

  it('should not render a NotesList', () => {
    const { getByTestId } = render(<NotesList {...defaultProps} />);
    const notesList = getByTestId('notes-list').children;
    expect(notesList.length).toBe(0);
    expect(Note).toHaveBeenCalledTimes(0);
  });

  it('should render a NotesList', () => {
    defaultProps.notes = TEST_NOTES;
    const { getByTestId } = render(<NotesList {...defaultProps} />);
    expect(getByTestId('notes-list')).toBeInTheDocument();
    expect(Note).toHaveBeenCalledTimes(TEST_NOTES.length);
    expect(getByTestId('note-with-ref')).toBeInTheDocument();
    expect(defaultProps.setLastNoteInView).toBeCalledTimes(1);
  });

  it('should render a NotesList with one note', () => {
    const TEST_NOTE = [TEST_NOTES[0]];
    defaultProps.notes = TEST_NOTE;
    const { getByTestId } = render(<NotesList {...defaultProps} />);
    expect(getByTestId('notes-list')).toBeInTheDocument();
    expect(() => getByTestId('note-with-ref')).toThrow(
      'Unable to find an element by: [data-testid="note-with-ref"]',
    );
    expect(Note).toHaveBeenCalledTimes(1);
  });
});
