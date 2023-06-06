import { FC } from 'react';
import { ListItem } from '@mui/material';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { SEPARATOR_INDEX } from 'config';
import { Note } from 'pages/MyNotes';
import { INotesList } from 'pages/MyNotes/types';

import { StyledList } from './styles';

const NotesList: FC<INotesList> = ({
  notes,
  activeNote,
  handleSetNoteDragEnd,
  setLastNoteInView,
  ...props
}) => (
  <DragDropContext onDragEnd={handleSetNoteDragEnd}>
    <Droppable droppableId='droppable' direction='vertical'>
      {(provided) => (
        <StyledList ref={provided.innerRef} {...provided.droppableProps}>
          {notes?.map((note, index) => {
            if (index % SEPARATOR_INDEX) {
              return (
                <ListItem disablePadding key={note?.id}>
                  <Note
                    note={note}
                    index={index}
                    activeNote={activeNote}
                    {...props}
                  />
                </ListItem>
              );
            }
            return (
              <ListItem ref={setLastNoteInView} disablePadding key={note?.id}>
                <Note note={note} index={index} {...props} />
              </ListItem>
            );
          })}
          {provided.placeholder}
        </StyledList>
      )}
    </Droppable>
  </DragDropContext>
);

export default NotesList;
