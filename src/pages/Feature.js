import { Navbar } from "components/general"
import { Footer } from "components/general"
const { Index } = require("components/features/index/Index")


const Feature = () =>{
  return(
    <div>
      <Navbar />
      <Index />
      <Footer />
    </div>
  )
}
export default Feature