import React from "react";
import "./Register.css";

export default function Login(props) {
    let msgClass = ["text-center"];
    if (props.type) {
        msgClass.push("text-success");
    }
    else {
        msgClass.push("text-danger");

    }

    return (
        <div className="container">
            <div className="card bg-light">
                <article className="card-body mx-auto" style={{ width: "500px" }}>
                    <h4 className="card-title mt-3 text-center">Login</h4>
                    <p className={msgClass.join(" ")}>{props.message}</p>

                    <p>
                        <a href="#" className="btn btn-block btn-twitter text-white w-100 mb-2" style={{ backgroundColor: "#1DA1F2" }}>
                            <i className="fab fa-twitter"></i> Login via Twitter
                        </a>
                        <a href="#" className="btn btn-block btn-facebook text-white w-100" style={{ backgroundColor: "#3b5998" }}>
                            <i className="fab fa-facebook-f"></i> Login via Facebook
                        </a>
                    </p>

                    <p className="divider-text">
                        <span className="bg-light">OR</span>
                    </p>

                    <form onSubmit={props.Login}>
                        {/* Email Input */}
                        <div className="form-group input-group mb-3">
                            <span className="input-group-text">
                                <i className="fa fa-envelope"></i>
                            </span>
                            <input
                                name="email"
                                className="form-control"
                                placeholder="Email address"
                                type="email"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="form-group input-group mb-3">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                            </span>
                            <input
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                type="password"
                            />
                        </div>

                        {/* Login Button */}
                        <div className="form-group mb-3">
                            <button type="submit" className="btn btn-primary w-100">
                                Login
                            </button>
                        </div>

                        <p className="text-center">
                            Don't have an account? <a href="#" onClick={props.switch}>Sign Up</a>
                        </p>
                    </form>
                </article>
            </div>
        </div>
    );
}