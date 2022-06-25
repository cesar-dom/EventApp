import { gql, useQuery } from '@apollo/client'
import CircularProgress from '@mui/material/CircularProgress';
import { Player, Youtube, DefaultUi } from '@vime/react'
import { DiscordLogo, Lightning, FileArrowDown, CaretRight, Image } from 'phosphor-react'
import * as S from './styles'

import '@vime/core/themes/default.css'

const GET_LESSON_BY_SLUG_QUERY = gql`
query getLessonBySlug ($slug: String) {
    lesson(where: {slug: $slug}) {
        id
        title
        description
        videoId
        teacher {
            name
            bio
            avatarURL
        }
    }
    }
`

export function Video(props) {
    const { data } = useQuery(GET_LESSON_BY_SLUG_QUERY, {
        variables: {
            slug: props.lessonSlug,
        }
    })

    if (!data || !data.lesson) {
        return (
            <S.ProgressBox>
                <CircularProgress size={60} />
            </S.ProgressBox>
        )
    }
    return (
        <S.VideoContainer >
            <S.VideoPlayerContainer>
                <S.VideoPlayer>
                    <Player>
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </Player>
                </S.VideoPlayer>
            </S.VideoPlayerContainer>

            <S.ActivityContent>
                <S.ActivityContentHeader>
                    <S.ActivityDetail>
                        <S.ActivityTitle>
                            {data.lesson.title}
                        </S.ActivityTitle>
                        <S.ActivityDescription>
                            {data.lesson.description}
                        </S.ActivityDescription>
                        {data.lesson.teacher && (
                            <S.TeacherWrapper>
                                <S.TeacherAvatar src={data.lesson.teacher.avatarURL} alt="" />
                                <S.TeacherInfo>
                                    <S.TeacherName>
                                        {data.lesson.teacher.name}
                                    </S.TeacherName>
                                    <S.TeacherBio>
                                        {data.lesson.teacher.bio}
                                    </S.TeacherBio>
                                </S.TeacherInfo>
                            </S.TeacherWrapper>
                        )}
                    </S.ActivityDetail>

                    <S.InteractionWrapper>
                        <S.DiscordBtn href="" alt="">
                            <DiscordLogo size={24} />
                            Comunidade no Discord
                        </S.DiscordBtn>
                        <S.ChallengeBtn href="" alt="">
                            <Lightning size={24} />
                            Acesse o Desafio
                        </S.ChallengeBtn>
                    </S.InteractionWrapper>

                </S.ActivityContentHeader>

                <S.ActivityExtrasContainer>

                    <S.ActivityExtrasBtnWrapper href="">
                        <S.ExtrasBtnIcon>
                            <FileArrowDown size={40} />
                        </S.ExtrasBtnIcon>
                        <S.ExtrasBtnContent>
                            <S.ExtrasBtnTitle>
                                Material complementar
                            </S.ExtrasBtnTitle>
                            <S.ExtrasBtnText>
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </S.ExtrasBtnText>
                        </S.ExtrasBtnContent>
                        <S.ExtrasBtnArrow>
                            <CaretRight size={24} />
                        </S.ExtrasBtnArrow>
                    </S.ActivityExtrasBtnWrapper>

                    <S.ActivityExtrasBtnWrapper href="">
                        <S.ExtrasBtnIcon>
                            <Image size={40} />
                        </S.ExtrasBtnIcon>
                        <S.ExtrasBtnContent>
                            <S.ExtrasBtnTitle>
                                Wallpapers exclusivos
                            </S.ExtrasBtnTitle>
                            <S.ExtrasBtnText>
                                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                            </S.ExtrasBtnText>
                        </S.ExtrasBtnContent>
                        <S.ExtrasBtnArrow>
                            <CaretRight size={24} />
                        </S.ExtrasBtnArrow>
                    </S.ActivityExtrasBtnWrapper>

                </S.ActivityExtrasContainer>

            </S.ActivityContent>
        </S.VideoContainer>
    )
}