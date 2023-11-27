export interface RootState {
  isOn: boolean;
}

export interface LocationState {
  from: {
    pathname: string;
  };
}

export interface ProviderProps {
  state: {
    id: number;
    name: string;
  };
}
