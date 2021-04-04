import * as S from './styles';

export default function Main({
  title = 'Dulcetti Maps',
  description = 'An example to use an application using Next and Leaflet',
}) {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="Imagem de um átomo e React Avançado escrito ao lado." />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
}
