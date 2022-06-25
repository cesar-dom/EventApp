import * as S from './styles'

export function Placeholder() {
  return (
    <S.VideoContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <img
          style={{
            width: '100%',
            height: '100%',
            maxWidth: '1100px',
            maxHeight: '100vh',
            opacity: '0.6'
          }}
          src="https://api-media-develop.s3.amazonaws.com/eventapp/video-placeholder.jpg"
        />
      </div>
    </S.VideoContainer>
  )
}