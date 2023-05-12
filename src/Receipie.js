/* eslint-disable jsx-a11y/anchor-is-valid */

import SingleReceipe from "./recpie-small"


const Receipie=()=>{
return(
    <section className="receipies">
        <div className="container">
            <div className="receipie">
                <div className="receipie-text-box">
                    <h2 className="heading-secondary-small">Feature receipie from the wwl Meal Plan</h2>
                    <button className="btn main-nav-link">Get the shopping list</button>
                </div>
                <div className="grid-3-cols">
                <SingleReceipe/>
                <SingleReceipe/>
                <SingleReceipe/>
                </div>
                
            </div>
        
        </div>
    </section>
    
)
}
export default Receipie