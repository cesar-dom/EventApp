import { useParams } from 'react-router-dom'
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Video } from "../../components/Video";
import { Placeholder } from "../../components/Placeholder";


import * as S from './style'


export function Activities() {
    const { slug } = useParams()

    return (
        <S.Page>
            <Header />
            <S.Main>
                {/* <Video lessonSlug={slug} /> */}

                {slug
                    ? <Video lessonSlug={slug} />
                    : <Placeholder />}
                <Sidebar />
            </S.Main>
        </S.Page>
    )
}