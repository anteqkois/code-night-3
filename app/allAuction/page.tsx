'use client';

import { api } from '@/lib/apiConfig';
import { useQuery } from '@tanstack/react-query';

export default function Page() {
  const { data, error } = useQuery({
    queryKey: ['auction'],
    queryFn: () => api('http://localhost:3000/api/auction'),
    suspense: true,
    // retry: false,
    refetchInterval: 1000,
  });

  // console.log(data);

  return <main>{JSON.stringify(data?.data)}</main>;
}
