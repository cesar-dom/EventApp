import { useParams } from 'react-router-dom'
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Video } from "../../components/Video";

import * as S from './style'


export function Activities() {
    const { slug } = useParams()

    return (
        <S.Page>
            <Header />
            <S.Main>
                {slug
                    ? <Video lessonSlug={slug} />
                    : <div style={{ flex: 1 }}><h1>Empty Card</h1></div>}
                <Sidebar />
            </S.Main>
        </S.Page>
    )
}