'use client';

import { useQuery } from '@tanstack/react-query';
import { api } from 'src/lib/apiConfig';

export default function Page() {
  const { data } = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => api('https://pokeapi.co/api/v2/pokemon/ditto'),
    suspense: true,
    retry: false,
  });

  return <main>{JSON.stringify(data?.data)}</main>;
}
