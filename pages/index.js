import { useMoralis } from "react-moralis";
import AuthPage from "../components/AuthPage";
import UploadForm from "../components/UploadForm";

export default function Home() {
  const {
    isAuthenticated,
    authenticate,
    logout,
    user
  } = useMoralis()
  if(!isAuthenticated) {
    return(
      <AuthPage authenticate={authenticate} />
    )
  }
  return (
    <div>
      <UploadForm logout={logout} user={user}/>
    </div>
  )
}
