import Footer from "./Footer";
import Header from "./Header";
function Contact() {
    return ( 
        <section>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 about-us-page">
                        <h6>Contact Us</h6>
                        <p>Ut enim ad minim veniam, Ut enim ad minim veniam, Ut enim ad <br /> minim veniam</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 contact-page pt-5 pb-5">
                        <div className="contact-data">
                            <p>Discover the Power of Listing Your <span>Property with Us</span></p>
                            <span>Our proven marketing strategies and expert team will ensure your property stands out in the market, attracting the right buyers and securing the best deal for you.</span>
                            <form action="">
                                <label className="form-label">*Name</label>
                                <input type="text" placeholder="Enter Name" className="form-control" />
                                <label className="form-label">*Contact number</label>
                                <input type="text" placeholder="Enter Contact Number" className="form-control" />
                                <label className="form-label">*Email</label>
                                <input type="text" placeholder="Enter Email Address" className="form-control" />
                                <label className="form-label">*Looking for</label>
                                <select name="" id="" className="form-select">
                                    <option value="">Select Looking for Option </option>
                                </select>
                                <label className="form-label">*Location</label>
                                <select name="" id="" className="form-select">
                                    <option value="">Enter Location</option>
                                </select>
                                <label className="form-label">*Briefly Share your requirement</label>
                                <textarea name="" id="" className="form-control" placeholder="Write Briefly Share your requirement "></textarea>
                                <label className="form-label">*How did you hear about us?</label>
                                <select name="" id="" className="form-select">
                                    <option value="">Select Platform</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
     );
}

export default Contact;