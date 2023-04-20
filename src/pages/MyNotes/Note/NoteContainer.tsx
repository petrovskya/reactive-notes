// import * as React from 'react';
// import { Button, Card, CardContent, Typography } from '@mui/material';
// import { INote } from 'types';
// import { getShortDescription } from 'utils';
// import { Dispatch } from 'react';

// interface INoteProps {
//   note: INote;
//   setActiveNote: Dispatch<React.SetStateAction<INote | null>>;
//   setEditMode: Dispatch<React.SetStateAction<boolean>>;
//   editMode: boolean;
//   activeNote: INote | null;
// }

// export const CustomNoteCard = ({
//   note,
//   setActiveNote,
//   activeNote,
//   setEditMode,
//   editMode,
// }: INoteProps) => {
//   const { id, title, description, dateCreation } = note;
//   const handleActiveNote = () => {
//     activeNote?.id === id ? setActiveNote(null) : setActiveNote(note);
//   };
//   const handleEditMode = () => {
//     setActiveNote(note);
//     setEditMode(!editMode);
//   };
//   return (
//     <Card sx={{ maxWidth: 345, width: '100%' }}>
//       <CardContent onClick={handleActiveNote}>
//         <Typography
//           gutterBottom
//           variant='h5'
//           component='p'
//           color='text.primary'
//         >
//           {title}
//         </Typography>
//         <Typography
//           gutterBottom
//           variant='h6'
//           component='span'
//           color='text.secondary'
//         >
//           {dateCreation}
//         </Typography>
//         <Typography variant='body2' color='text.secondary'>
//           {getShortDescription(description)}
//         </Typography>
//       </CardContent>
//       <Button
//         variant='contained'
//         onClick={handleEditMode}
//         size='large'
//         fullWidth
//         color='secondary'
//       >
//         {editMode && activeNote?.id === id ? 'Save' : 'Edit'}
//       </Button>
//     </Card>
//   );
// };
export {};
