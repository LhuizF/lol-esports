import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.colors.greySecondary};
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    margin-top: 0.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 40%;
  align-items: flex-end;
`;

interface Props {
  isRevised?: boolean;
}

export const DragonsContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 150px;

  div {
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
  }

  p {
    text-align: center;
    // margin: 0 2rem;
  }
`;

export const Detail = styled.div`
  display: flex;
  width: 100%;
`;

export const Text = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.white};
`;
