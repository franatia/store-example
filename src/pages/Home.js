import Gallery from "../components/Gallery";
import ProductSlider from "../components/products_slider/ProductSlider";

export default function Home(){
    return (
        <div className="Home">
            <header className="Home-header">
                <Gallery/>
                <ProductSlider title={"Empanadas"}/>
                <ProductSlider title={"Tartas"} items={[
                    {
                        title: "Tarta de Verdura",
                        image: "https://clarin.com/img//2020/06/05/OSoK3fQ0r_340x340__1.jpg",
                        options: {
                            quantity: true,
                            options: [
                                {
                                    title:"Porcion",
                                    price:500,
                                    offPrice:-1
                                },
                                {
                                    title:"1/2 Tarta",
                                    price:1200,
                                    offPrice:-1
                                },
                                {
                                    title:"Completa",
                                    price:2200,
                                    offPirce:2000
                                }
                            ]
                        }
                    },
                ]}/>
            </header>
        </div>
    )
}