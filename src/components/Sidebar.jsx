import * as S from './styles'
import { ActivityCard } from './ActivityCard'
import { gql, useQuery } from '@apollo/client'

const GET_LESSONS_QUERY = gql`
  query getLessonsQuery {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    title
    slug
    availableAt
    lessonType
  }
}
`

export function Sidebar() {
    const { data } = useQuery(GET_LESSONS_QUERY)

    return (
        <S.Sidebar>
            <S.SidebarTitle>
                Cronograma de aulas
            </S.SidebarTitle>

            <S.ActivityCardsWrapper>

                {data?.lessons.map(activity => {
                    return (
                        <ActivityCard
                            key={activity.id}
                            title={activity.title}
                            slug={activity.slug}
                            availableAt={new Date(activity.availableAt)}
                            type={activity.lessonType}
                        />
                    )
                })}
            </S.ActivityCardsWrapper>
        </S.Sidebar>
    )
}