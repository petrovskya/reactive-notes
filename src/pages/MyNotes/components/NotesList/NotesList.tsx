import { FC } from 'react';
import { ListItem } from '@mui/material';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { SEPARATOR_INDEX, ZERO_INDEX } from 'config';
import { Note } from 'pages/MyNotes';
import { INotesList } from 'pages/MyNotes/types';

import { StyledList } from './styles';

const NotesList: FC<INotesList> = ({
  notes,
  activeNote,
  handleSetNoteDragEnd,
  setLastNoteInView,
  ...props
}) => {
  const isLastNoteInView = (index: number): boolean =>
    !(index % SEPARATOR_INDEX) && index !== ZERO_INDEX;
  return (
    <DragDropContext onDragEnd={handleSetNoteDragEnd}>
      <Droppable droppableId='droppable' direction='vertical'>
        {(provided) => (
          <StyledList
            data-testid='notes-list'
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {notes?.map((note, index) => {
              return isLastNoteInView(index) ? (
                <ListItem
                  data-testid='note-with-ref'
                  ref={setLastNoteInView}
                  disablePadding
                  key={note?.id}
                >
                  <Note note={note} index={index} {...props} />
                </ListItem>
              ) : (
                <ListItem disablePadding key={note?.id}>
                  <Note
                    note={note}
                    index={index}
                    activeNote={activeNote}
                    {...props}
                  />
                </ListItem>
              );
            })}
            {provided.placeholder}
          </StyledList>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default NotesList;
