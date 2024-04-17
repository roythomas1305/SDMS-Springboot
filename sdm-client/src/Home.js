import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
        <div>
            <h2>Welcome to the Student Data Management System</h2>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100 h-25"
                        src="https://greensheenpaint.com/wp-content/uploads/splash_v10_1920x630.jpg"
                        alt="ImageOne"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 h-25"
                        src="https://awcc.edu.au/site/assets/files/2189/painting_outside_sized.1920x630.jpg"
                        alt="ImageTwo"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 h-25"
                        src="https://www.ff.zcu.cz/cs/media/quality/_CHA1415-1920x630.jpg"
                        alt="ImageThree"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 h-25"
                        src="https://www2.deloitte.com/content/dam/insights/articles/us176169_aging-longevity/primaryfull-bleed/US176169_Banner-1920x630.png"
                        alt="ImageFour"
                    />
                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default Home;

