import "../css/QuantitySelector.css";

export default function QuantitySelector({quantity, cb=function(){}}){
    return (
        <div className="QuantitySelector">
            <div className="QuantitySelector-container">
                <button className="QuantitySelector-plus QuantitySelector-button" onClick={()=>{
                    cb(quantity+1);
                }}>+</button>
                <input className="QuantitySelector-input" disabled={true} type={"number"} value={quantity}/>
                <button className="QuantitySelector-less QuantitySelector-button" onClick={()=>{
                    cb(quantity-1);
                }}>-</button>
            </div>
        </div>
    )
}