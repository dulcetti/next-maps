import { CloseCircle } from '@styled-icons/ionicons-outline/CloseCircle';

import * as S from './styles';
import LinkWrapper from 'components/link-wrapper';

export type PageTemplateProps = {
  body: string;
  heading: string;
};

export default function PageTemplate({ body, heading }: PageTemplateProps) {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseCircle size={32} />
      </LinkWrapper>

      <S.Heading>{heading}</S.Heading>
      <S.Body dangerouslySetInnerHTML={{ __html: body }} />
    </S.Content>
  );
}
