import { useParams } from 'react-router-dom'

import { CheckCircle } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import * as S from './styles'



export function ActivityCard(props) {
    const { slug } = useParams()

    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR,
    })

    const isActiveActivity = slug === props.slug

    return (
        <S.ActivityCard to={`/activities/${props.slug}`}>
            <S.CardDate style={{ textTransform: 'capitalize' }}>
                {availableDateFormatted}
            </S.CardDate>

            <S.CardContent activeState={isActiveActivity}>
                <S.CardHeader>

                    {isLessonAvailable ? (
                        <S.CardStatusAvailable activeState={isActiveActivity}>
                            <CheckCircle size={20} />
                            Conteúdo Liberado
                        </S.CardStatusAvailable>
                    ) :
                        (
                            <S.CardStatusNotAvailable activeState={isActiveActivity}>
                                <CheckCircle size={20} />
                                Em Breve
                            </S.CardStatusNotAvailable>
                        )}

                    <S.CardType activeState={isActiveActivity}>
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </S.CardType>

                </S.CardHeader>
                <S.CardTitle activeState={isActiveActivity}>
                    {props.title}
                </S.CardTitle>
            </S.CardContent>
        </S.ActivityCard>
    )
}