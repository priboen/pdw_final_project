import React from "react";

class Navbar extends React.Component { 
    render() { 
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#!">Games Shop</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li class="nav-item"><a class="nav-link active notAvailableBtn" aria-current="page" href="#!">Mobile
                            Games</a></li>
                    <li class="nav-item"><a class="nav-link notAvailableBtn" href="#!">PC Games</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                        <ul class="dropdown-menu notAvailableBtn" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#!">All Products</a></li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li><a class="dropdown-item notAvailableBtn" href="#!">Popular Items</a></li>
                            <li><a class="dropdown-item notAvailableBtn" href="#!">New Arrivals</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex">
                    <button class="btn btn-outline-dark notAvailableBtn" type="submit">
                        <i class="bi-cart-fill me-1"></i>
                        Cart
                    </button>
                </form>
            </div>
        </div>
    </nav>
        );
    }
}

export default Navbar;