import { Beer } from '@styled-icons/ionicons-outline/Beer';
// import { CloseCircle } from '@styled-icons/ionicons-outline/CloseCircle';

import LinkWrapper from 'components/link-wrapper';
import dynamic from 'next/dynamic';
import * as S from './styles';

const Map = dynamic(() => import('components/map'), { ssr: false });

export default function Main() {
  return (
    <S.Wrapper>
      <LinkWrapper href="/about">
        <Beer size={32} />
      </LinkWrapper>
      <Map />
    </S.Wrapper>
  );
}
