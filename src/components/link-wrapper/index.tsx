import Link from 'next/link';

import * as S from './styles';
import { ILinkWrapper } from './interface';

export default function LinkWrapper({ children, href }: ILinkWrapper) {
  return (
    <S.Wrapper>
      <Link href={href}>{children}</Link>
    </S.Wrapper>
  );
}
