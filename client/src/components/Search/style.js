import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const Form = styled('form')`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 16px;
`;

export const Input = styled(TextField)`
  flex: 1 1 300px;
  margin: 16px !important;
`;

export const SearchBtn = styled(Button)`
  flex: 1 1 100px;
  margin: 16px !important;
`;