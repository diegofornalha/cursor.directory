'use client';

import { useState, useEffect } from 'react';

export function usePageUrl(slug: string) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(`${process.env.NEXT_PUBLIC_APP_URL || window?.location?.origin || ''}/${slug}`);
  }, [slug]);

  return url;
} 