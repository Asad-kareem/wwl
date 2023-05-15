import TeamReceipiePlan from "./TeamReceipiePlan";
import Receipie from "./Receipie";
const Aside=()=>{
    return(
        <div>
        <section className="section-hero">
            <div className="hero">
               <div className="hero-textbox">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">Welcome</span>
                    <span className="heading-primary-sub">Chesla ✋</span>
                </h1>
                <p className="hero-description">
                    Take a look below to explore receipies ,happy prepping
                </p>
                </div> 
            </div>
            <div>
            </div>
        </section>
        <Receipie/>
        <TeamReceipiePlan/>
        </div>




            )
}
export default Aside;