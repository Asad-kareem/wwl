import country from "./img/country.png"
const GlobalCusine=()=>{
    return(
        <section className="globalCusine">
              <div className="container">
            <div className="receipie">
                <div className="receipie-text-box">
                    <h2 className="heading-secondary-small">Feature receipie from the wwl Meal Plan</h2>
                    <button className="btn main-nav-link btn-big btn-small">Get the shopping list</button>
                </div>
               
                
            </div>
            <div className="cusine-section">
                <div className="cusines">
                    <div className="cusine-countries">
                        <div className="cusine-country">
                           <p>Mexican</p> 
                            </div>
                            <div className="cusine-country">
                           <p>Mexican</p> 
                            </div>
                            <div className="cusine-country">
                           <p>Mexican</p> 
                            </div>
                            <div className="cusine-country">
                           <p>Mexican</p> 
                            </div>
                            <div className="cusine-country">
                           <p>Mexican</p> 
                            </div>
                    </div>
                    <div className="cusine-countries">
                        <div className="cusine-country">
                           <p>Mexican</p> 
                            </div>
                            <div className="cusine-country">
                           <p>Mexican</p> 
                            </div>
                            <div className="cusine-country">
                           <p>Mexican</p> 
                            </div>
                            <div className="cusine-country">
                           <p>Mexican</p> 
                            </div>
                            <div className="cusine-country">
                           <p>Mexican</p> 
                            </div>
                    </div>
                    <div className="cusine-countries">
                        <div className="cusine-country">
                           <p>Mexican</p> 
                            </div>
                            <div className="cusine-country">
                           <p>Mexican</p> 
                            </div>
                            <div className="cusine-country">
                           <p>Mexican</p> 
                            </div>
                            <div className="cusine-country">
                           <p>Mexican</p> 
                            </div>
                            <div className="cusine-country">
                           <p>Mexican</p> 
                            </div>
                    </div>
                </div>
            <div className="cusine-map">
                <img src={country} alt="country"></img>
            </div>    
        </div>
            </div>
        </section>
    )
}
export default GlobalCusine