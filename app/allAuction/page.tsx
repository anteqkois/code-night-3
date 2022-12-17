'use client';

import { api } from '@/lib/apiConfig';
import { useQuery } from '@tanstack/react-query';

export default function Page() {
  const { data, error } = useQuery({
    queryKey: ['auction'],
    queryFn: () => api('/auction'),
    suspense: true,
    retry: false,
    refetchInterval: 2000,
  });
  console.log(error);

  return <main>{JSON.stringify(data?.data)}</main>;
}
