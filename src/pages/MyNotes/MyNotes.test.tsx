import { render } from '@testing-library/react';

import { CreateNote, ActiveNote } from 'components';
import { TEST_ACTIVE_NOTE } from 'config/constants';

import { FilterMenu } from './components';
import { default as MyNotes } from './MyNotes';
import { INotesList } from './types';

jest.mock('components');
jest.mock('./components');

describe('<MyNotes>', () => {
  const defaultProps: INotesList = {
    isEditMode: false,
    isLoading: false,
    isFetching: false,
    setLastNoteInView: jest.fn(),
    handleSetNoteDragEnd: jest.fn(),
    setEditMode: jest.fn(),
    editNote: jest.fn(),
  };

  it('should render a MyNotes', () => {
    const { getByTestId } = render(<MyNotes {...defaultProps} />);
    expect(getByTestId('my-notes')).toBeInTheDocument();
    expect(getByTestId('my-notes-styled-box')).toBeInTheDocument();
    expect(getByTestId('my-notes-list-wrapper')).toBeInTheDocument();
    expect(CreateNote).toHaveBeenCalled();
    expect(FilterMenu).toHaveBeenCalled();
    expect(() => getByTestId('loader')).toThrow(
      'Unable to find an element by: [data-testid="loader"]',
    );
    expect(ActiveNote).toBeCalled();
  });

  it('should render a loader in MyNotes when isFetching', () => {
    defaultProps.isFetching = true;
    const { getByTestId } = render(<MyNotes {...defaultProps} />);
    expect(getByTestId('loader')).toBeInTheDocument();
  });

  it('should render a loader in MyNotes when isLoading', () => {
    defaultProps.isLoading = true;
    const { getByTestId } = render(<MyNotes {...defaultProps} />);
    expect(getByTestId('loader')).toBeInTheDocument();
  });

  it('should render an active note in MyNotes when it is exist', () => {
    defaultProps.activeNote = TEST_ACTIVE_NOTE;
    render(<MyNotes {...defaultProps} />);
    expect(ActiveNote).toHaveBeenCalledWith(
      {
        note: TEST_ACTIVE_NOTE,
      },
      {},
    );
  });
});
