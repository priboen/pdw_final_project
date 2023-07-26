import React from "react";

class Header extends React.Component { 
    render() { 
        return (<header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
            <div class="text-center text-white">
                <h1 class="display-4 fw-bolder">Welcome to The Game Shop</h1>
                <p class="lead fw-normal text-white-50 mb-0">Your One and Only Place for Every Gaming Needs</p>
            </div>
        </div>
    </header>);
        
    }
}

export default Header;