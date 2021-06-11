export type MapProps = {
  places?: Place[];
};

export type Place = {
  id?: string;
  name?: string;
  slug?: string;
  location?: Location;
};

export type Location = {
  latitude: number;
  longitude: number;
};
