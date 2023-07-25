import ProductSliderItem from "./ProductSliderItem";
import "../css/ProductSlider.css";
import { useState } from "react";

export default function ProductSlider({title, items=[
    {
        title: "Empanadas Criollas",
        image: "https://cuk-it.com/wp-content/uploads/2020/05/thumb02-1-1024x576-2-1.jpg",
        options: {
            quantity: true,
            options: [
                {
                    title:"Unidad",
                    price:500,
                    offPrice:-1
                },
                {
                    title:"1/2 Docena",
                    price:2500,
                    offPrice:2000
                },
                {
                    title:"Docena",
                    price:3000,
                    offPirce:-1
                }
            ]
        }
    },
    {
        title: "Empanadas Arabes",
        image: "https://www.recetasnatura.com.ar/sites/default/files/empanadas-arabes-.jpg",
        options: {
            quantity: true,
            options: [
                {
                    title:"Unidad",
                    price:500,
                    offPrice:-1
                },
                {
                    title:"1/2 Docena",
                    price:2500,
                    offPrice:2000
                },
                {
                    title:"Docena",
                    price:3000,
                    offPirce:-1
                }
            ]
        }
    }
]}){

    const [expanded, setExpanded] = useState(false);

    return(
        <div className="ProductSlider">
            <div className="ProductSlider-container">
                <div className="ProductSlider-title-container">
                    <h4 className="ProductSlider-title">{title}</h4>
                    <span class={`material-symbols-outlined ${(expanded) ? "rotate" : ""}`} onClick={() => {
                        setExpanded(!expanded);
                    }}>
                        expand_more
                    </span>
                </div>
                <div className={`ProductSlider-item-container ${(expanded)?"expand":"unexpand"}`}>
                    {items.map(item=><ProductSliderItem title={item.title} image={item.image} options={item.options}/>)}
                </div>
            </div>
        </div>
    )
}