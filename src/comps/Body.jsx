
import MainContent from "./MainContent"
import Loader from "./Loader"
import Navbar from "./Navbar"
import { useUser } from "../context/userContext"


const Body = () => {
  const {isLoading} = useUser()
  if(isLoading) return <Loader />
  return (
    <div className="body">  
      <Navbar />
      <MainContent />
    </div>
  )
}

export default Body
