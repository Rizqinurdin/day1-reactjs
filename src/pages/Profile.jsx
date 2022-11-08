    import React from "react";

    const Profile = () => {
    return (
        <>
        <nav>
        <input type="checkbox" id="check"/>
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
        <label class="logo">Instagram</label>
        <ul>
          <li><a class="active" href="profile">Profile</a></li>
          <li><a href="/counter">Counter</a></li>
          <li><a href="/counter-advanced">CounterAdvance</a></li>
          <li><a href="/counter-pro">CounterPro</a></li>
        </ul>
    </nav>
        <div className="container justify-content-center">
            <div className="row mt-5 foto">
            <div className="col-md-4">
                <img
                src={require("./pp.JPG")}
                alt="profile"
                width="200"
                height="200"
                />
            </div>
            <div className="col-md-5 mr-3 header">
                <h2>
                Rizqinurdin_ &ensp;{" "}
                <button type="button" className="btn btn-secondary">
                    {" "}
                    Edit Profile
                </button>{" "}
                <img
                    className="settings"
                    src={require("./settings.png")}
                    alt="profile"
                    width="20"
                    height="20"
                />
                </h2>
                <div className="col-md-4 mt-4 kiriman">
                <p>
                    <b>100</b>
                </p>
                &emsp;
                <p>Kiriman</p>
                &emsp;
                <p>
                    <b>930</b>
                </p>
                &emsp;
                <p>Pengikut</p>
                &emsp;
                <p>
                    <b>800</b>
                </p>
                &emsp;
                <p>Diikuti</p>
                </div>
                <div className="col mb-5 kikskuy">
                <span>Kikskuy</span>
                <br />
                Blog Pribadi
                <span>
                    {" "}
                    <br />
                    Nothing is Impossible Before You Try
                </span>
                <span>
                    <p>Padang-Tangerang</p>
                    <a href="https://rizqinurdin.github.io/">
                    https://rizqinurdin.github.io/
                    </a>
                </span>
                </div>
            </div>
            <hr style={{ borderTop: "2px solid black" }} />
            </div>
        </div>
        <div class="container">
            <div class="row">
            <div class="col text-center">
                <img
                className="settings"
                src={require("./add.png")}
                alt="profile"
                width="20"
                height="20"
                />{" "}
                <b>KIRIMAN</b>
                &emsp;
                <img
                className="settings"
                src={require("./ribbon.png")}
                alt="profile"
                width="20"
                height="20"
                />{" "}
                TERSIMPAN &emsp;
                <img
                className="settings"
                src={require("./user.png")}
                alt="profile"
                width="20"
                height="20"
                />{" "}
                DITANDAI &emsp;
            </div>
            </div>
        </div>
        <br />
        <br />
        &emsp; &emsp; &emsp; &emsp;
        <img
            className="foto1"
            src={require("./1.jpg")}
            alt="profile"
            width="300"
            height="300"
        />
            {/* <div className="image-title">
            <img
            src={require("./heart.png")}
            alt="profile"
            width="20"
            height="20"
            />
            </div>
            <p>100</p>
            &ensp;
            <img
            src={require("./chat.png")}
            alt="profile"
            width="20"
            height="20"
            />
            <p>20</p> */}
        &emsp; &emsp; &emsp; &emsp;
        <img
            className="foto2"
            src={require("./2.jpg")}
            alt="profile"
            width="300"
            height="300"
        />
        &emsp; &emsp; &emsp; &emsp;
        <img
            className="foto3"
            src={require("./3.jpg")}
            alt="profile"
            width="300"
            height="300"
        />
        <br />
        <br />
        &emsp; &emsp; &emsp; &emsp;
        <img
            className="foto4"
            src={require("./4.jpg")}
            alt="profile"
            width="300"
            height="300"
        />
        &emsp; &emsp; &emsp; &emsp;
        <img
            className="foto5"
            src={require("./5.jpg")}
            alt="profile"
            width="300"
            height="300"
        />
        &emsp; &emsp; &emsp; &emsp;
        <img
            className="foto6"
            src={require("./6.jpg")}
            alt="profile"
            width="300"
            height="300"
        />
        <div class="container">
            <div class="row mt-5">
            <div class="col-12 text-center">
                <p class="pt-1 pb-1">
                2022, Copyright Rizqinurdin, All Right Reserved
                </p>
            </div>
            </div>
        </div>
        </>
    );
    };

    export default Profile;
