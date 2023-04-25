import { Link, Outlet } from "react-router-dom";

function SharedLayout() {
    return (
        <div>
            <nav>
                <p>Logo</p>
                <p>Carrinho</p>
            </nav>
            <Outlet/>
        </div>
    )
}

export default SharedLayout

