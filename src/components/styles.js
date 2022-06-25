import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.palette.gray[700]};
  width: 100%;
  padding: 1.5rem 0px;
  border-bottom: solid 1px;
  border-color: ${({ theme }) => theme.palette.gray[600]};
`;

export const ExtrasBtnArrow = styled.div`
  height: 100%;
  padding: 1.5rem;
  display: flex;
  align-items: center;
`;

export const ExtrasBtnText = styled.p`
  font-size: small;
  color: ${({ theme }) => theme.palette.gray[200]};
`;

export const ExtrasBtnTitle = styled.strong`
  font-size: 1.5rem;
`;

export const ExtrasBtnContent = styled.div`
  padding: 1.5rem 0;
  line-height: 1.625;
`;

export const ExtrasBtnIcon = styled.div`
  background: ${({ theme }) => theme.palette.green[700]};
  height: 100%;
  padding: 1.5rem;
  display: flex;
  align-items: center;
`;

export const ActivityExtrasBtnWrapper = styled.a`
  background: ${({ theme }) => theme.palette.gray[700]};
  border-radius: 0.5rem;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  align-items: stretch;
  gap: 1.5rem;
  color: #fff;

  &:hover {
    transition-timing-function: cubic-bezier(0.4,0,8.2,1);
    transition-duration:400ms;
    background: ${({ theme }) => theme.palette.gray[600]};
  }
`;

export const ActivityExtrasContainer = styled.div`
  gap: 2rem;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

`;

export const TeacherBio = styled.span`
  font-size: small;${({ theme }) => theme.palette.gray[200]};
  display: block;
`;

export const TeacherName = styled.strong`
  font-weight: 700;
  font-size: 1.25rem;
  display: block;
`;

export const TeacherInfo = styled.div`
  line-height: 1.625;
`;

export const TeacherAvatar = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 100%;
  border: solid 2px;
  border-color: ${({ theme }) => theme.palette.blue[500]};
`;

export const TeacherWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const ChallengeBtn = styled.a`
  padding: 1rem;
  font-size: small;
  text-transform: uppercase;
  border: solid 1px;
  border-color: ${({ theme }) => theme.palette.blue[500]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  font-weight: 700;
  gap: 0.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.blue[500]};

  &:hover {
    transition-timing-function: cubic-bezier(0.4,0,8.2,1);
    transition-duration:400ms;
    background-color: ${({ theme }) => theme.palette.blue[500]};
    color: ${({ theme }) => theme.palette.gray[900]};
  }
`;

export const DiscordBtn = styled.a`
  padding: 1rem;
  font-size: small;
  text-transform: uppercase;
  background: ${({ theme }) => theme.palette.green[500]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  font-weight: 700;
  gap: 0.5rem;
  text-decoration: none;
  color: #fff;
  
  &:hover {
    transition-timing-function: cubic-bezier(0.4,0,8.2,1);
    transition-duration:400ms;
    background-color: ${({ theme }) => theme.palette.green[700]};
  }
`;

export const InteractionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const ActivityDescription = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.palette.gray[200]};
  line-height: 1.625;
`;

export const ActivityTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const ActivityDetail = styled.div`
  flex: 1;
`;

export const ActivityContentHeader = styled.div`
  display: flex;
  align-items: start;
  gap: 4rem;


`;

export const ActivityContent = styled.div`
  padding: 2rem;
  max-width: 1100px;
  margin: 0 auto;
`;

export const VideoPlayer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1100px;
  max-height: 60vh;
  aspect-ratio: 16 / 9;
`;

export const VideoPlayerContainer = styled.div`
  background: black;
  display: flex;
  justify-content: center;
`;

export const ProgressBox = styled.div`
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 10rem;
`

export const VideoContainer = styled.div`
  flex: 1 1 0%;
`;

export const CardTitle = styled.span`
  font-weight: 700;
  color: ${({ theme, activeState }) => activeState ? '#fff' : theme.palette.gray[200]};
  margin-top: 1.25rem;
  display: block;
  transition-timing-function: cubic-bezier(0.4,0,8.2,1);
  transition-duration: 600ms;
`;

export const CardType = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 700;
  color: #fff;
  border-radius: 0.25rem;
  padding: 0.125rem 0.5rem;
  border: solid 1px;
  border-color: ${({ theme, activeState }) => activeState ? '#fff' : theme.palette.green[300]};
`;

export const CardStatusAvailable = styled.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: ${({ theme, activeState }) => activeState ? '#fff' : theme.palette.green[500]};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CardStatusNotAvailable = styled.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: ${({ theme, activeState }) => activeState ? '#fff' : theme.palette.orange[500]};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardContent = styled.div`
  border-radius: 0.25rem;
  border: solid 1px;
  border-color: ${({ theme }) => theme.palette.gray[500]};
  padding: 1rem;
  margin-top: 0.5rem;
  background: ${({ theme, activeState }) => activeState ? theme.palette.green[500] : ''};
  transition-timing-function: cubic-bezier(0.4,0,8.2,1);
  transition-duration: 600ms;
  
  &:hover {
    border-color: ${({ theme }) => theme.palette.green[500]};
  }
`;

export const CardDate = styled.span`
  color: ${({ theme }) => theme.palette.gray[300]};
`;

export const ActivityCard = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.gray[100]};
`;

export const ActivityCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;


export const SidebarTitle = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: solid 1px;
  border-color: ${({ theme }) => theme.palette.gray[500]};
  display: block;
`;

export const Sidebar = styled.aside`
  width: 348px;
  background: ${({ theme }) => theme.palette.gray[700]};
  padding: 1.5rem;
  border-left: solid 1px;
  border-color: ${({ theme }) => theme.palette.gray[600]};
`;
