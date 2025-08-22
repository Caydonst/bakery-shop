import React from "react";
import chocolateChipCookie from "./assets/Cookies/chocolate chip cookie.png";
import mmCookie from "./assets/Cookies/m&m cookie.png";
// ... other imports

const CookieItems = React.memo(() => {
    return (
        <div className="items-section">
            <div className="item">
                <div className="img-container">
                    <img src={chocolateChipCookie} alt="Chocolate Chip Cookie" loading="lazy" />
                </div>
                <h1>Chocolate Chip Cookie</h1>
                <div className="buttons">
                    <button>Learn More</button>
                    <button>Order Now</button>
                </div>
            </div>
            {/* repeat for others */}
        </div>
    );
});

export default CookieItems;
