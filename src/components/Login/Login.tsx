import { useSession, signIn, signOut } from "next-auth/react"
import { Avatar } from "@mui/material";

export default function Component() {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session?.user?.email} <br/>
      <p>Welcome {session?.user?.name}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
}