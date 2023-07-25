import { useState } from "react";
import { formatOff, formatPrice } from "../../utils/formatters";
import OptionsSlider from "../options_slider/OptionsSlider";
import QuantitySelector from "./QuantitySelector";
import "../css/ProductSliderItem.css"

export default function ProductSliderItem({title, image, options = {quantity:true, options:[]}}){

    let [currentOption, setCurrentOption] = useState(options.options[0]);
    let [quantity, setQuantity] = useState(0);
    let [expandOptions, setExpandOptions] = useState(false);

    let {offPrice, price} = currentOption;
    let quantityType = currentOption.title;

    console.log(currentOption)

    return (
        <div className="ProductSliderItem">
            <div className={`ProductSliderItem-container ${(expandOptions)?"options-expanded":""}`} onClick={(e)=>{
                if(e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON'){
                    return;
                }
                setExpandOptions(!expandOptions);
            }}>
                <div className="ProductSliderItem-data-container">
                    <div className="ProductSliderItem-image-container">
                        <img className="ProductSliderItem-image" alt="Imagen del Producto" src={image}/>
                    </div>
                    <div className="ProductSliderItem-info-container">
                        <h5 className="ProductSliderItem-title">{title}</h5>
                        <div className="ProductSliderItem-price-container">
                            <div className="ProductSliderItem-price">{(offPrice > 0) ? formatPrice(offPrice) : formatPrice(price)}</div>
                            {(offPrice > 0)
                            ?<div className="ProductSliderItem-off">{formatOff(1-(offPrice/price), 2)}</div>
                            :<></>
                            }
                        </div>
                    </div>
                </div>
                <div className="ProductSliderItem-quantity-container">
                    <span className="ProductSliderItem-quantity-type">{quantityType}</span>
                    <QuantitySelector quantity={quantity} cb={setQuantity}/>
                    <button className="ProductSliderItem-button-add-cart">{"Añadir"}</button>
                </div>
            </div>
            <OptionsSlider options={options.options} cb={(option) => {
                setCurrentOption(option);
                setExpandOptions(!expandOptions);
            }} _expand={expandOptions}/>
        </div>
    )
}