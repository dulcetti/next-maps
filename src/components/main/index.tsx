import dynamic from 'next/dynamic';
import * as S from './styles';

const Map = dynamic(() => import('components/map'), { ssr: false });

export default function Main() {
  return (
    <S.Wrapper>
      <Map />
    </S.Wrapper>
  );
}
