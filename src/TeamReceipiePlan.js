import Receipie from "./Receipie"
import Catagories from "./Catagories"
import GlobalCusine from "./GlobalCusine"
import Footer from "./Footer"
const TeamReceipiePlan=()=>{

    return(
        
      <section className="TeamReceipiePlan">
      <h2 className="TeamHeading">WWL Team Recipe Collections</h2>
      <p className="TeamHeading-descrp">Each season, our team produces fun, situational, special recipe collections to help you to gain meal plan and prep inspiration!</p>
      <Receipie/>
      <Receipie/>
      <Receipie/>
      <div className="btn-center-container">  <button className="btn main-nav-link ">see more</button></div>
      <Catagories/>
      <GlobalCusine/>
      <Footer/>
    </section>
    )
}

export default TeamReceipiePlan