import { CloseCircle } from '@styled-icons/ionicons-outline/CloseCircle';

import * as S from './styles';
import LinkWrapper from 'components/link-wrapper';

export default function AboutTemplate() {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseCircle size={32} />
      </LinkWrapper>

      <S.Heading>My Beers</S.Heading>
      <S.Body>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Vehicula non. Ut sed ex eros. Vivamus sit amet
          nibh non tellus tristique interdum. Quem num gosta di mim que vai caçá sua turmis! Mé faiz
          elementum girarzis, nisi eros vermeio. Per aumento de cachacis, eu reclamis.
        </p>
        <p>
          Interagi no mé, cursus quis, vehicula ac nisi. Mais vale um bebadis conhecidiss, que um
          alcoolatra anonimis. Si num tem leite então bota uma pinga aí cumpadi! Praesent malesuada
          urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.
        </p>
        <p>
          A ordem dos tratores não altera o pão duris. Casamentiss faiz malandris se pirulitá.
          Delegadis gente finis, bibendum egestas augue arcu ut est. Cevadis im ampola pa arma uma
          pindureta.
        </p>
      </S.Body>
    </S.Content>
  );
}
