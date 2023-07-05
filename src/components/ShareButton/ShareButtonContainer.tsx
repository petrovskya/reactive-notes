import { FC } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEYS } from 'api';
import { notesActions } from 'api/queries';
import { useAppSelector } from 'store/hooks';
import { getUser } from 'store/selectors';
import { INote } from 'types';

import { StyledBox, StyledShareIcon } from './styles';
import { IShareButtonContainer } from './types';

const ShareButtonContainer: FC<IShareButtonContainer> = ({ note }) => {
  const { user } = useAppSelector(getUser);

  const queryClient = useQueryClient();

  const { mutate: updateNote } = useMutation({
    mutationFn: notesActions.updateNote,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.NOTES]);
      queryClient.invalidateQueries([QUERY_KEYS.SHARED_NOTES]);
    },
  });

  const isNoteEditable = user?.id === note.userId;

  const editSharedStatus = (note: INote): INote => {
    return { ...note, isShared: !note.isShared };
  };

  const handleSetSharedStatus = (event: React.MouseEvent<SVGSVGElement>) => {
    event.stopPropagation();
    isNoteEditable && updateNote(editSharedStatus(note));
  };

  return (
    <StyledBox>
      <StyledShareIcon
        $isSharedStatus={note.isShared}
        $isNoteEditable={isNoteEditable}
        onClick={handleSetSharedStatus}
      />
    </StyledBox>
  );
};

export default ShareButtonContainer;
