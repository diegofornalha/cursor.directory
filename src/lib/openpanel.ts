import { createClient } from '@openpanel/nextjs';

export const analytics = createClient({
  disabled: process.env.NODE_ENV === 'development',
  catchErrors: true,
}); 