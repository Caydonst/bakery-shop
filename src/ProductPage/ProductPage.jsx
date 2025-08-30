import "./ProductPage.css"
import { useParams } from "react-router-dom";
import products from "../products.js"
import {useState} from "react";
import {ChevronDownIcon} from "@heroicons/react/24/outline";

export default function ProductPage() {
    const [openNutrition, setOpenNutrition] = useState(false);
    const [openAllergy, setOpenAllergy] = useState(false);

    const allProducts = [
        ...products[0].cookieProducts,
        ...products[1].cakeProducts
    ];

    const { id } = useParams();
    const product = allProducts.find((p) => p.id === parseInt(id));

    const reviews = [
        {id: 1, name: "John Smith", rating: 5, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
        {id: 2, name: "Emily Johnson", rating: 5, content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."},
        {id: 3, name: "Michael Brown", rating: 5, content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
    ]

    const nutritionInformation = [
        {name: "Calories", amount: "260 cal"},
        {name: "Fat", amount: "28 g"},
        {name: "Saturated Fat", amount: "11 g"},
        {name: "Trans Fat", amount: "0 g"},
        {name: "Cholesterol", amount: "78 mg"},
        {name: "Sodium", amount: "108 mg"},
        {name: "Carbohydrates", amount: "44 g"},
        {name: "Dietary Fiber", amount: "3 g"},
        {name: "Sugars", amount: "27 g"},
        {name: "Protein", amount: "3 g"}
    ]

    return (
        <>
            {!product ? (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                </div>
            ) : (
                <div className={"ProductPage"}>
                    <div className={"info-container"}>
                        <div className={"product-img"}>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className={"product-info-container"}>
                            <div className={"product-name"}>
                                <h1>{product.name}</h1>
                            </div>
                            <div className={"product-description"}>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </p>
                            </div>
                            <div className={"product-buttons"}>
                                <button>Order Now</button>
                            </div>
                        </div>
                    </div>

                    <div className={"reviews-container"}>
                        <div className={"reviews-header"}>
                            <h1>Top Reviews</h1>
                        </div>
                        <div className={"reviews"}>
                            {reviews.map((review, index) => (
                                <div key={index} className={"review"}>
                                    <h2>{review.name}</h2>
                                    <div className={"rating"}>
                                        {Array.from({ length: review.rating }).map((_, i) => (
                                            <i key={i} className="fa-solid fa-star"></i>
                                        ))}
                                    </div>
                                    <p>{review.content}</p>
                                </div>
                            ))}
                        </div>
                        <div className={"reviews-footer"}>
                            <p>Download our app to write a review!</p>
                            <button>Download App</button>
                        </div>
                    </div>

                    <div className={"dietary-info-container"}>
                        <div className={"dietary-info-header"}>
                            <h1>Dietary Information</h1>
                        </div>

                        {/* Nutrition Dropdown */}
                        <div className={"nutrition-container"}>
                            <div className={"nutrition-dropdown"}>
                                <div
                                    className={"nutrition-header"}
                                    onClick={() => setOpenNutrition(!openNutrition)}
                                >
                                    <div
                                        className={`nutrition-header-inner ${
                                            openNutrition ? "open" : ""
                                        }`}
                                    >
                                        <h3>Nutrition Information</h3>
                                        <ChevronDownIcon
                                            className={`chevron-down-icon ${
                                                openNutrition ? "open" : ""
                                            }`}
                                        />
                                    </div>
                                </div>
                                <div
                                    className={`nutrition-content ${
                                        openNutrition ? "open" : ""
                                    }`}
                                >
                                    <div className={"nutrition-content-inner"}>
                                        <div className={"nutrition-content-header"}>
                                            <p>Nutrient</p>
                                            <p>Amount</p>
                                        </div>
                                        {nutritionInformation.map((item, index) => (
                                            <div key={index} className={"nutrition-item"}>
                                                <p>{item.name}</p>
                                                <p>{item.amount}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Allergy Dropdown */}
                        <div className={"allergy-container"}>
                            <div className={"allergy-dropdown"}>
                                <div
                                    className={"allergy-header"}
                                    onClick={() => setOpenAllergy(!openAllergy)}
                                >
                                    <div
                                        className={`allergy-header-inner ${
                                            openAllergy ? "open" : ""
                                        }`}
                                    >
                                        <h3>Allergy Information</h3>
                                        <ChevronDownIcon
                                            className={`chevron-down-icon ${
                                                openAllergy ? "open" : ""
                                            }`}
                                        />
                                    </div>
                                </div>
                                <div
                                    className={`allergy-content ${
                                        openAllergy ? "open" : ""
                                    }`}
                                >
                                    <div className={"allergy-content-inner"}>
                                        <div className={"allergy-content-header"}>
                                            <p>Contains: Egg, Milk, Wheat, Soy</p>
                                        </div>
                                        <div className={"allergy-content-info"}>
                                            <p>
                                                Our desserts are made onsite and may come into contact with
                                                different allergens during production. Please be advised
                                                that any of our products may contain allergens including
                                                peanuts, tree nuts, milk, eggs, wheat, soy, and sesame.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}