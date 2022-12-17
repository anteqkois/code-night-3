'use client';

import { api } from '@/lib/apiConfig';
import { useQuery } from '@tanstack/react-query';

export default function Page() {
  const { data, error } = useQuery({
    queryKey: ['auction', '4'],
    queryFn: () => api('http://localhost:3000/api/auction/4'),
    // queryFn: () => api('http://localhost:3000/api/auction'),
    suspense: true,
    // retry: false,
    refetchInterval: 5000,
  });

  // console.log(data);

  return <main>{JSON.stringify(data?.data)}</main>;
}
