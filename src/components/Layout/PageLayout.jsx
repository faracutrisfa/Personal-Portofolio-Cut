import Footer from "../Footer";
import Navbar from "../Navbar";

const PageLayout = ({children}) => {
  return (
    <div className="">
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default PageLayout