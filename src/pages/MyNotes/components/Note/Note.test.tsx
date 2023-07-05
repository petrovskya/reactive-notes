import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { ShareButton, EditMenu } from 'components';
import { TEST_NOTE } from 'config/constants';
import { INoteProps } from 'pages/MyNotes/types';

import { default as Note } from './Note';

jest.mock('components');

describe('<Note>', () => {
  const defaultProps: INoteProps = {
    note: TEST_NOTE,
    isNoteActive: false,
    index: 1,
    handleSetActiveNote: jest.fn(),
    editNote: jest.fn(),
    handleDeleteNote: jest.fn(),
  };

  const handleSetNoteDragEnd = jest.fn();

  it('should render a Note', () => {
    const { getByTestId } = render(
      <DragDropContext onDragEnd={handleSetNoteDragEnd}>
        <Droppable droppableId='droppable' direction='vertical'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Note {...defaultProps} />
            </div>
          )}
        </Droppable>
      </DragDropContext>,
    );

    expect(getByTestId('note')).toBeInTheDocument();
    expect(ShareButton).toHaveBeenCalled();
    expect(getByTestId('title')).toBeInTheDocument();
    expect(getByTestId('date-creation')).toBeInTheDocument();
    expect(getByTestId('description')).toBeInTheDocument();
    expect(EditMenu).toHaveBeenCalled();
    expect(getByTestId('delete-button')).toBeInTheDocument();
  });

  it('should handle click on CardContent', () => {
    const { getByTestId } = render(
      <DragDropContext onDragEnd={handleSetNoteDragEnd}>
        <Droppable droppableId='droppable' direction='vertical'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Note {...defaultProps} />
            </div>
          )}
        </Droppable>
      </DragDropContext>,
    );

    const noteContent = getByTestId('note-content');
    userEvent.click(noteContent);
    expect(defaultProps.handleSetActiveNote).toHaveBeenCalled();
  });

  it('should handle click on delete note button', () => {
    const { getByTestId } = render(
      <DragDropContext onDragEnd={handleSetNoteDragEnd}>
        <Droppable droppableId='droppable' direction='vertical'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Note {...defaultProps} />
            </div>
          )}
        </Droppable>
      </DragDropContext>,
    );

    const deleteButton = getByTestId('delete-button');
    userEvent.click(deleteButton);
    expect(defaultProps.handleDeleteNote).toHaveBeenCalled();
  });
});
