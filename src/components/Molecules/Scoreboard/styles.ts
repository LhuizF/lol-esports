import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1.5rem;
  background-color: ${({ theme }) => theme.colors.greySecondary};
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 40%;
  align-items: flex-end;
  border: 1px solid red;
`;

interface Props {
  isRevised?: boolean;
}

export const DragonsContainer = styled.div<Props>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: ${({ isRevised }) => (isRevised ? 'flex-end' : 'flex-start')};
`;

export const Detail = styled.div`
  display: flex;
  width: 100%;
  background-color: pink;
`;

export const Text = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.white};

  div {
    display: flex;
    align-items: center;

    p {
      margin: 0 2rem;
    }
  }
`;
