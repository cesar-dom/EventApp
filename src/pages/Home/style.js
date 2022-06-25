import styled from '@emotion/styled';

export const Body = styled.div`
  height: 100%;
  padding: 1.5rem;
  display: flex;
  align-items: center;
`;

export const MockupImg = styled.img`
  margin-top: -5rem;
`;

export const FormBtn = styled.button`
  font-size: 1.25rem;
  margin-top: 1rem;
  background: ${({ theme }) => theme.palette.green[500]};
  padding: 1rem 0;
  font-weight: 700;
  font-size: small;
  color: #fff;
  border-radius: 0.5rem;
  text-transform: uppercase;

  &:hover {
    background: ${({ theme }) => theme.palette.green[700]};
    transition-timing-function: cubic-bezier(0.4,0,8.2,1);
    transition-duration:400ms;
  }

  &:disabled {
    opacity: 0.3;
  }
`

export const Input = styled.input` 
  background: ${({ theme }) => theme.palette.gray[900]};
  border-radius: 0.25rem;
  padding: 0 1.25rem;
  height: 3.5rem;
  color: ${({ theme }) => theme.palette.gray[300]};
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const FormSpan = styled.span`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  display: block;
`

export const FormContainer = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.palette.gray[700]};
  border: solid 1px;
  border-color: ${({ theme }) => theme.palette.gray[500]};
  border-radius: 0.5rem;
  width: 22rem;
  z-index: 1;
`

export const HeroSubtitle = styled.p`
  margin-top: 1.5rem;
  line-height: 1.625;
  color: ${({ theme }) => theme.palette.gray[200]};
`

export const HeroTitle = styled.h1`
  margin-top: 1.5rem;
  font-size: 2.5rem;
  line-height: 1.25;
`

export const HeroContent = styled.div`
  max-width: 640px;
`

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.5rem !important;
  margin: 0 auto;
`;

export const Page = styled.div`
  min-height: 100vh;
  background: url('src/assets/images/blur-background.png') center center / cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
`;