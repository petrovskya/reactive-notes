import { FC } from 'react';
import { ListItem } from '@mui/material';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { Note } from 'pages/MyNotes';
import { INotesList } from 'pages/MyNotes/types';

import { StyledList, StyledListItemButton } from './styles';

const NotesList: FC<INotesList> = ({
  notes,
  onDragEnd,
  refOnView,
  ...props
}) => (
  <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId='droppable' direction='vertical'>
      {(provided) => (
        <StyledList ref={provided.innerRef} {...provided.droppableProps}>
          {notes?.map((note, index) => {
            if (index % 5 === 0) {
              return (
                <ListItem ref={refOnView} disablePadding key={note?.id}>
                  <StyledListItemButton
                    $isActive={props.activeNote?.id === note?.id}
                  >
                    <Note note={note} index={index} {...props} />
                  </StyledListItemButton>
                </ListItem>
              );
            }
            return (
              <ListItem disablePadding key={note?.id}>
                <StyledListItemButton
                  $isActive={props.activeNote?.id === note?.id}
                >
                  <Note note={note} index={index} {...props} />
                </StyledListItemButton>
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
