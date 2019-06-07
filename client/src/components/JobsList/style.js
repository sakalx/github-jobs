import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

export const Wrap = styled(Paper)`
  flex: 1;
  margin: 16px;
`;

export const JobItem = styled(ListItem)`
  align-items: stretch !important;
  flex-direction: column;
`;

export const Row = styled('div')`
  display: flex;
  justify-content: space-between;
`;

export const Type = styled(Typography)`
  color: #1d9a00;
  padding: 0 16px;
`;