const { default: Index } = require("components/features/index/Index")
const { Navbar } = require("components/general")

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