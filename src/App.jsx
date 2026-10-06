import React, { useState } from "react";
import Navigation from "./component/Navigation";
import HeroSection from "./component/HeroSection";
import HamBurger from "./component/HamBurger";
import PopularDish from "./component/PopularDish";
import Services from "./component/Services";
import Reservation from "./component/Reservation";
import PizzaMenu from "./component/PizzaMenu";
import PastaMenu from "./component/PastaMenu";
import BurgerMenu from "./component/BurgerMenu";
import Review from "./component/Review";
import FoodImg from "./component/FoodImg";
import LatestNews from "./component/LatestNews";
import MenuFooter from "./component/MenuFooter";
import FooterCopy from "./component/FooterCopy";



const logo = "./Images/Illustration/logo.png";
const links = ["Home", "Menu", "Pages", "News", "Contact"];
const navBtn = "Book a Table";
const navIcon = "bi bi-list";
const heroheading = "Food For Your Soul";
const heroparagraph = "It's about good food and fresh ingredients.";
const herobtn = "View Our Menu";
const heroheading2="Try our New Burger Menu";
const heroparagraph2="It's about good food and fresh ingredients.";
const herobtn2="View Our Menu";
const hamburgerparagraph = "Best Dish Of The Day";
const hamburgerheading = "Hamburger & Sweet Potato Fries";
const hamburgerprice = "$19.99";
const hamburgerbtn = "Add to Cart";
const popularheadings = "Popular Dishes"
const populartheme = "Try the delicious new dishes from our chef."
const populardata = [
    {
        DishImg: "/Images/Illustration/img-1.jpg",
        Dishheading: "Classic Havana Burger",
        Dishparagraph: "Grilled beef patty, Turkey rashes, and burger relish",
        DishPrice: "$21.00",
        Dishbtn: "Add to Cart"
    },
    {
        DishImg: "/Images/Illustration/img-2.jpg",
        Dishheading: "Buffalo Mozzarella",
        Dishparagraph: "Grilled beef patty, Turkey rashes, and burger relish",
        DishPrice: "$16.50",
        Dishbtn: "Add to Cart"
    },
    {
        DishImg: "/Images/Illustration/img-3.jpg",
        Dishheading: "Cheese Royal Burger",
        Dishparagraph: "Grilled beef patty, Turkey rashes, and burger relish",
        DishPrice: "$13.50",
        Dishbtn: "Add to Cart"
    },
    {
        DishImg: "/Images/Illustration/img-4.jpg",
        Dishheading: "Classic Havana Burge",
        Dishparagraph: "Grilled beef patty, Turkey rashes, and burger relish",
        DishPrice: "$21.00",
        Dishbtn: "Add to Cart"
    },
    {
        DishImg: "/Images/Illustration/img-5.jpg",
        Dishheading: "Buffalo Mozzarella",
        Dishparagraph: "Grilled beef patty, Turkey rashes, and burger relish",
        DishPrice: "$19.00",
        Dishbtn: "Add to Cart"
    },
     {
        DishImg: "/Images/Illustration/img-1.jpg",
        Dishheading: "Cheese Royal Burger",
        Dishparagraph: "Grilled beef patty, Turkey rashes, and burger relish",
        DishPrice: "$19.00",
        Dishbtn: "Add to Cart"
    }
]

const ServicesData = [
    {
        ServiceImg: "/Images/Illustration/logo1.png",
        ServiceHeading: "Fresh Ingredients",
        ServiceParagraph: "Sed egestas, ante vulputa eros pede vitae luctus metus augue."
    },
    {
        ServiceImg: "/Images/Illustration/logo2.png",
        ServiceHeading: "Best Recipe",
        ServiceParagraph: "Sed egestas, ante vulputa eros pede vitae luctus metus augue."
    },
    {
        ServiceImg: "/Images/Illustration/logo3.png",
        ServiceHeading: "Happy Clients",
        ServiceParagraph: "Sed egestas, ante vulputa eros pede vitae luctus metus augue."
    },
    {
        ServiceImg: "/Images/Illustration/logo4.png",
        ServiceHeading: "Vegan Menu",
        ServiceParagraph: "Sed egestas, ante vulputa eros pede vitae luctus metus augue."
    }
]
const Reservationheading = "Book a Table";
const Reservationparagraph = "Choose your preferred date, time and party size. We will confirm your table request shortly."
const Reservationbtn = "Reservation";
const pizzaimg = "/Images/Illustration/imgi_11_ab1@2x1.jpg";
const pizzaheading = "Pizza";
const pizzadata = [
    {
        pizzafigure: "/Images/Illustration/imgi_12_th1@2x1.jpg",
        pizzaname: "Oakey Smokey Pizza",
        pizzaprice: "$21.00",
        pizzapara: "Smoke mozzarella, basil and picorino Romano"
    },
    {
        pizzafigure: "/Images/Illustration/imgi_13_th2@2x2.jpg",
        pizzaname: "White Ricotta Pizza",
        pizzaprice: "$24.00",
        pizzapara: "Smoke mozzarella, basil and picorino Romano"
    },
    {
        pizzafigure: "/Images/Illustration/imgi_14_th3@2x3.jpg",
        pizzaname: "Original Margherita Pizza",
        pizzaprice: "$22.00",
        pizzapara: "Smoke mozzarella, basil and picorino Romano"
    },
    {
        pizzafigure: "/Images/Illustration/imgi_15_th4@2x4.jpg",
        pizzaname: "Calzone",
        pizzaprice: "$23.00",
        pizzapara: ":moke mozzarella, basil and picorino Romano"
    },
    {
        pizzafigure: "/Images/Illustration/imgi_16_th5@2x5.jpg",
        pizzaname: "Mercy Margarita",
        pizzaprice: "$18.00",
        pizzapara: "Smoke mozzarella, basil and picorino Romano"
    }
]
const pastaheading1 = "Pasta";
const pastadata = [
    {
        pastafigure1: "/Images/Illustration/pasta1.jpg",
        pastaname1: "Spaghetti all’Amatriciana",
        pastaprice1: "$21.00",
        pastapara1: "Smoke mozzarella, basil and picorino Romano"
    },
    {
        pastafigure1: "/Images/Illustration/pasta2.jpg",
        pastaname1: "Spaghetti Carbonara",
        pastaprice1: "$24.00",
        pastapara1: "Smoke mozzarella, basil and picorino Romano"
    },
    {
        pastafigure1: "/Images/Illustration/pasta3.jpg",
        pastaname1: "Lasagna",
        pastaprice1: "$23.00",
        pastapara1: "Smoke mozzarella, basil and picorino Romano"
    }
]
const pastaimg1 = "/Images/Illustration/pastabig.jpg";

const burgerimg2 = "/Images/Background/burger1big.jpg";
const burgerheading2 = "Burger";
const burgerdata = [
    {
        burgerfigure2: "/Images/Illustration/burger1.jpg",
        burgername2: "The Double Barrel Meat Feast",
        burgerprice2: "$21.00",
        burgerpara: "Smoke mozzarella, basil and picorino Romano"
    },
    {
        burgerfigure2: "/Images/Illustration/burger2.jpg",
        burgername2: "Classic Havana Burger",
        burgerprice2: "$24.00",
        burgerpara: "Smoke mozzarella, basil and picorino Romano"
    },
    {
        burgerfigure2: "/Images/Illustration/burger3.jpg",
        burgername2: "Single BBQ Chicken Burger",
        burgerprice2: "$22.00",
        burgerpara: "Smoke mozzarella, basil and picorino Romano"
    },
    {
        burgerfigure2: "/Images/Illustration/burger4.jpg",
        burgername2: "Havana Speical Burger Combo",
        burgerprice2: "$23.00",
        burgerpara: "Smoke mozzarella, basil and picorino Romano"
    }
]
const reviewmain = "Testimonials";
const reviewparagraphs = "They Say About Us";
const reviewdata = [
    {
        reviewppicture: "/Images/Illustration/review-1.jpg",
        reviewname: "Corben Naylor",
        reviewrole: "Chef",
        reviewpara: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellente sque felis.",
    },
    {
        reviewppicture: "/Images/Illustration/review-2.jpg",
        reviewname: "Rhiana Fields",
        reviewrole: "Designer",
        reviewpara: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellente sque felis.",
    },
    {
        reviewppicture: "/Images/Illustration/review-3.jpg",
        reviewname: "Jane Avila",
        reviewrole: "Manager",
        reviewpara: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellente sque felis.",
    }
]
const imgdata = [
    {
        foodimg: "/Images/Illustration/img-1.1.jpg"
    },
    {
        foodimg: "/Images/Illustration/img-2.2.jpg"
    },
    {
        foodimg: "/Images/Illustration/img-3.3.jpg"
    },
    {
        foodimg: "/Images/Illustration/img-4.4.jpg"
    }
]
const newsheading = "Latest News";
const newstitle = "Promotion in a Cafe";
const newsdata = [
    {
        newsphoto: "/Images/Illustration/news.jpg",
        newsdetail1: "Etiam sodales, erat non.",
        newsparagraphs: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellente squefelis.",
        newsdate: "24.04.2020 / 2 comments"

    },
    {
        newsphoto: "/Images/Illustration/news2.jpg",
        newsdetail1: "Quisque volutpat mattis.",
        newsparagraphs: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellente squefelis.",
        newsdate: "24.04.2020 / 2 comments"

    },
    {
        newsphoto: "/Images/Illustration/news3.jpg",
        newsdetail1: "Cras iaculis ultricies nulla",
        newsparagraphs: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellente squefelis.",
        newsdate: "24.04.2020 / 2 comments"

    }
]
const newsanchor = "View All News";
const footerlogo="/Images/Illustration/logo.png";
const footerparass="Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellente squefelis.";
const footericon= [
    {
        footersymbol:"bi bi-facebook"
    },
     {
        footersymbol:"bi bi-twitter-x"
    },
     {
        footersymbol:"bi bi-instagram"
    }
]
const footernews="Newsletter";
const footerparass2="Morbi in sem quis dui placerat ornare. Pellentesque odionisi euismod in pharetra";
const footeremail="enter your email";
const footerbtn="Subscribe";
const footerfind="How To Find Us";
const footersign="bi bi-geo-alt-fill";
const footerdatas="Avenue Marina 34568 NY (U.S)";   
const footersign2="bi bi-telephone-fill";
const footerdatas2="+0987 193-34-76";
const footersign3="bi bi-envelope";
const footerdatas3="statumsupport@mail.com";
const footercopy1="© 2026 Koad Bistro. Crafted with React and Bootstrap.";
const footertop1="BACK TO TOP";
    

const App = () => {
    const [cartCount, setCartCount] = useState(0);
    const [cartMessage, setCartMessage] = useState("");

    const addToCart = (dish) => {
        setCartCount((count) => count + 1);
        setCartMessage(`${dish.Dishheading || "Item"} added to your order.`);
        window.setTimeout(() => setCartMessage(""), 2200);
    };

    return (
        <React.Fragment>
            <Navigation logo={logo} links={links} navBtn={navBtn} navIcon={navIcon} />
            <div className="cart-status" aria-live="polite"><i className="bi bi-bag-heart"></i> {cartCount} item{cartCount === 1 ? "" : "s"} <span>{cartMessage}</span></div>
            <HeroSection heroheading={heroheading} heroparagraph={heroparagraph} herobtn={herobtn} heroheading2={heroheading2} heroparagraph2={heroparagraph2} herobtn2={herobtn2}/>
            <HamBurger hamburgerparagraph={hamburgerparagraph} hamburgerheading={hamburgerheading} hamburgerprice={hamburgerprice} hamburgerbtn={hamburgerbtn} onAddToCart={addToCart} />
            <PopularDish popularheadings={popularheadings} populartheme={populartheme} populardata={populardata} onAddToCart={addToCart} />
            <Services ServicesData={ServicesData} />
            <Reservation Reservationheading={Reservationheading} Reservationparagraph={Reservationparagraph} Reservationbtn={Reservationbtn} />
            <PizzaMenu pizzaimg={pizzaimg} pizzaheading={pizzaheading} pizzadata={pizzadata} />
            <PastaMenu pastaheading1={pastaheading1} pastadata={pastadata} pastaimg1={pastaimg1} />
            <BurgerMenu burgerimg2={burgerimg2} burgerheading2={burgerheading2} burgerdata={burgerdata} />
            <Review reviewmain={reviewmain} reviewparagraphs={reviewparagraphs} reviewdata={reviewdata} />
            <FoodImg imgdata={imgdata} />
            <LatestNews newsheading={newsheading} newstitle={newstitle} newsdata={newsdata} newsanchor={newsanchor} />
            <MenuFooter footerlogo={footerlogo} footerparass={footerparass} footeremail={footeremail} footerbtn={footerbtn} footericon={footericon} footernews={footernews} footerparass2={footerparass2} footerfind={footerfind} footersign={footersign} footerdatas={footerdatas} footersign2={footersign2} footerdatas2={footerdatas2} footersign3={footersign3} footerdatas3={footerdatas3} />
            <FooterCopy footercopy1={footercopy1} footertop1={footertop1}/>
        </React.Fragment>
    );
}

export default App;