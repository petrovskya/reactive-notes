import { Container } from '@mui/material';

import { PageNotFoundImage } from 'assets';

import { Image } from './styles';

const NotFound = () => (
  <Container>
    <Image src={PageNotFoundImage} alt='page-not-found' />
  </Container>
);

export default NotFound;
