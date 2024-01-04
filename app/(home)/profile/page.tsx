import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'

async function ProfilePage() {
  const session = await getServerSession(authOptions)

  if(session?.user) {
    return (
      <div>AdminPage {session?.user.username}</div>
    )
  }

  return <h2>Please login to see admin page</h2>
}

export default ProfilePage