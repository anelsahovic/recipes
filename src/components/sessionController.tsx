import { LogOut, User } from 'lucide-react';
import React from 'react';
import { auth, signOut, signIn } from '../../auth';

async function SessionController() {
  const session = await auth();

  return (
    <div>
      {session && session?.user ? (
        <div className="flex gap-4 items-center">
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <button
              className="px-2 py-1 w-28 flex items-center justify-center   text-amber-500 rounded-sm hover:text-amber-800 transition duration-300 gap-1"
              type="submit"
            >
              <span>Sign out</span> <LogOut />
            </button>
          </form>
        </div>
      ) : (
        <div className="flex gap-4 items-center">
          <form
            action={async () => {
              'use server';
              await signIn('github');
            }}
          >
            <button
              className="px-2 py-1 w-28 flex items-center justify-center text-amber-500 hover:text-amber-700 sm:hover:text-white sm:bg-amber-600 sm:text-white rounded-sm sm:hover:bg-amber-800 transition duration-300 gap-1"
              type="submit"
            >
              <User /> <span>Sign in</span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default SessionController;
