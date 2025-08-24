import "./footer.css"

export default function Footer() {
    return (
        <>
            <div className={"footer"}>
                <div className={"links-container"}>
                    <a href={""}>Order</a>
                    <a href={""}>Rewards</a>
                    <a href={""}>Support</a>
                    <a href={""}>Terms & Conditions</a>
                    <a href={""}>Privacy</a>
                </div>
                <div className={"socials-container"}>
                    <a href={""}><i className="fa-brands fa-instagram"></i></a>
                    <a href={""}><i className="fa-brands fa-facebook"></i></a>
                    <a href={""}><i className="fa-brands fa-tiktok"></i></a>
                    <a href={""}><i className="fa-brands fa-x-twitter"></i></a>
                </div>
            </div>
            <div className={"footer-logo-container"}>
                <h1>Batter & Bliss</h1>
                <p><i className="fa-regular fa-copyright"></i> 2025 all rights reserved.</p>
            </div>
        </>
    )
}