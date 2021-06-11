import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  width: 100%;
`;

export const HeaderWrapper = styled.header`
  background-color: rgb(102, 0, 153);
  height: 60px;

  > h1 {
    font-size: 4rem;
  }
`;

export const BannerWrapper = styled.div`
  background-color: #00001a;
  display: flex;
  height: 380px;
  width: 100%;
`;

export const Banner = styled.section`
  background: url('/banner.jpg') no-repeat;
  background-size: contain;
  width: 50%;
`;

export const Map = styled.section`
  height: 100%;
  position: relative;
  width: 50%;

  > form {
    bottom: 20px;
    left: 30%;
    position: absolute;
    z-index: 999;

    > fieldset {
      border-radius: 12px;
      padding: 20px;
    }
  }
`;

export const Logo = styled.img`
  margin-bottom: 2rem;
  width: 25rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;
