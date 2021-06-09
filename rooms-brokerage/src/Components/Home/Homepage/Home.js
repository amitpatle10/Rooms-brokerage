import react from 'react';
import './Home.css';
import Banner from './Banner.js';
import Card from './Card.js';

function Home(){
    return (
        <div className='home'>
            <Banner />
            <div className='home__section'>
            <Card
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                title="Real Time Support"
                description="We provide real-time support to our users."
            />
            <Card
                src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=787&q=80"
                title="Wide variety of living spaces"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="Sharing Flats in Mumbai"
                description="Divides rent alongwith space."
                price="₹10000/month"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Luxurious Penthouse"
                description="Enjoy the amazing sights of Mumbai with stunning high-end apartments"
                price="Starting at ₹2.5 crores"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="Apartments for Students"
                description="Get places to stay near your educational institute"
                price="Starting at ₹6000/month."
            />
            </div>
            
        </div>
    );
}

export default Home;