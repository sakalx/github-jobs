import styled, {css} from 'styled-components';

import Paper from '@material-ui/core/Paper';

export const Wrap = styled('div')`
  flex: 1 1 100%;
`;

export const CardDescription = styled(Paper)`
  margin: 16px;
  min-width: 50vw;
  padding: 16px;
`;

export const Row = styled('div')`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Slide = styled('div')`
  overflow-x: hidden;
  transition: width .2s cubic-bezier(.57,.21,.69,1.25);
  width: 0; 
  
  ${props => props.open && css`
    width: 55vw;
  `};
`;