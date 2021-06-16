import { useEffect, useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useForm, SubmitHandler } from 'react-hook-form';

import * as S from './styles';
import { Inputs, Coords } from './interface';
import { Place } from 'components/map/interface';

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

  function showPosition(positions: Coords) {
    const { latitude, longitude } = positions.coords;
    const place: Place = {
      id: '1',
      name: 'Tijuca',
      slug: 'tijuca',
      location: {
        latitude: latitude,
        longitude: longitude,
      },
    };
    changePlace(place);
  }

  const getLatLong = async (cep: string) => {
    const { data } = await axios.get(`${process.env.API_URL}/Localizacao/latxlont?zipCode=${cep}`);
    const placeCords = {
      coords: {
        latitude: data.lat,
        longitude: data.long,
      },
    };
    showPosition(placeCords);
  };

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
