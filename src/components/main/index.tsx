import { useEffect, useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useForm, SubmitHandler } from 'react-hook-form';

import * as S from './styles';
import { Place } from 'components/map/interface';

type Inputs = {
  cep: string;
  number: string;
};

const Map = dynamic(() => import('components/map'), { ssr: false });

export default function Main() {
  const [place, changePlace] = useState<Place>({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    getLatLong(data.cep);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(showPosition);
  }, []);

  function showPosition(position) {
    const place: Place = {
      id: '1',
      name: 'Tijuca',
      slug: 'tijuca',
      location: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
    };
    changePlace(place);
  }

  function getLatLong(cep: string) {
    const result = axios.get(`https://www.cepaberto.com/api/v3/cep?cep=${cep}`, {
      headers: {
        'Authorization': `Token token=${token}`,
      },
    });
    console.info(result);
  }

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <h1>Header</h1>
      </S.HeaderWrapper>
      <S.BannerWrapper>
        <S.Banner></S.Banner>
        <S.Map>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <input
                type="text"
                id="cep"
                maxLength={9}
                placeholder="Digite seu CEP"
                defaultValue="20541-145"
                {...register('cep', { required: true })}
              />
              {errors.cep && <p>CEP obrigatório</p>}
              <br />
              <input
                type="phone"
                id="number"
                maxLength={9}
                placeholder="Digite seu número"
                defaultValue="57"
                {...register('number', { required: true })}
              />
              {errors.cep && <p>Número obrigatório</p>}
              <br />
              <button type="submit">Consultar</button>
            </fieldset>
          </form>
          <Map places={[place]} />
        </S.Map>
      </S.BannerWrapper>
    </S.Wrapper>
  );
}
