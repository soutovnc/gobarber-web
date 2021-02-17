import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--input);
  border-radius: 10px;
  border: 2px solid var(--input);
  padding: 16px;
  width: 100%;
  color: var(--gray-hard);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}

  ${props =>
    props.isFocused &&
    css`
      color: var(--orange);
      border-color: var(--orange);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--orange);
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--white-false);

    &::placeholder {
      color: var(--gray-hard);
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: var(--red);
    color: var(--white);

    &::before {
      border-color: var(--red) transparent;
    }
  }
`;
