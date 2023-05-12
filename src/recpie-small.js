/* eslint-disable jsx-a11y/anchor-is-valid */
import image from "./img/Image.jpg"
const SingleReceipe=()=>{
    return(
    
        <figure className="recp">
            <img src={image} alt="recp" />
            <div className="recp-box">
              <h3 className="recp-heading">
                <span className="recp-big">Tomato Pesto Farfalle Pasta </span>
                <span className="recp-small"> with Arugula and Butternut Squash</span>
               </h3>
              <div className="recp-price">
                <strong className="comments">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                 <path d="M3.92806 12.0322H15.1195V10.1669H3.92806V12.0322ZM3.92806 9.23431H15.1195V7.36906H3.92806V9.23431ZM3.92806 6.43644H15.1195V4.57119H3.92806V6.43644ZM18.85 19.4932L15.1195 15.7627H2.06282C1.54987 15.7627 1.11092 15.5802 0.745954 15.2152C0.380365 14.8496 0.197571 14.4104 0.197571 13.8974V2.70595C0.197571 2.193 0.380365 1.75374 0.745954 1.38815C1.11092 1.02318 1.54987 0.840698 2.06282 0.840698H16.9848C17.4977 0.840698 17.937 1.02318 18.3026 1.38815C18.6676 1.75374 18.85 2.193 18.85 2.70595V19.4932ZM2.06282 2.70595V13.8974H15.889L16.9848 14.9933V2.70595H2.06282ZM2.06282 2.70595V14.9933V2.70595Z" fill="#333333"/>
                 </svg>
                    23</strong>
                <a href="#" className="btn-recp">Add to Meal Plan</a>
              </div>
            </div>
   </figure>)
}
export default SingleReceipe