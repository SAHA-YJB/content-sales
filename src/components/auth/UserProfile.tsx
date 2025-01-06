'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

export const UserProfile = () => {
  const [user, setUser] = useState<User | null>(null);

  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
      }
    };
    fetchUser();
  }, [supabase.auth]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    window.location.reload();
  };

  if (!user) return null;

  return (
    <div className='flex items-center gap-4'>
      <Avatar>
        <AvatarImage
          src={user.user_metadata.avatar_url}
          alt={user.user_metadata.full_name}
        />
        <AvatarFallback>
          {user.user_metadata.full_name.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <div>
        <p>{user.user_metadata.full_name}</p>
        <p>{user.email}</p>
        <Button variant='destructive' onClick={handleLogout}>
          로그아웃
        </Button>
      </div>
    </div>
  );
};
