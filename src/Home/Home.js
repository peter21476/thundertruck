import React from 'react';
import TruckShadow from '../images/truckShadow.png';

function Home(){
    return(
        <section className="home-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={TruckShadow} className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                        <h1>Welcome to ThunderTruck</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod arcu vitae venenatis ultricies. In volutpat convallis gravida. Vivamus hendrerit enim accumsan sem imperdiet vulputate. Quisque vulputate convallis orci, sit amet scelerisque eros tincidunt quis. Suspendisse potenti. Curabitur vitae egestas dolor. Aliquam luctus ligula in erat tincidunt, sit amet pharetra neque viverra. Mauris condimentum lectus at nisi blandit, at accumsan felis volutpat. Suspendisse rhoncus molestie sapien, non cursus dolor lacinia non. Integer ac tincidunt ante, vel ornare nibh.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;