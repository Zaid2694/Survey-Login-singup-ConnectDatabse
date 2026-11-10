import React from "react";
import "./Register.css";

export default function Register(props) {
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
                    <h4 className="card-title mt-3 text-center">Create Account</h4>
                    <p className="text-center">Get started with your free account</p>
                    <p className={msgClass.join(" ")}>{props.message}</p>

                    <p>
                        <a href="#" onClick={props.google} className="btn btn-block btn-twitter text-white" style={{ backgroundColor: "#1DA1F2" }}>
                            <i className="fab fa-gogole"></i> Sign via Google
                        </a>
                        <a href="#" className="btn btn-block btn-facebook text-white" style={{ backgroundColor: "#3b5998" }}>
                            <i className="fab fa-facebook-f"></i> Signup via Facebook
                        </a>
                    </p>

                    <p className="divider-text">
                        <span className="bg-light">OR</span>
                    </p>

                    <form onSubmit={props.register}>
                        {/* Name Input */}
                        <div className="form-group input-group mb-3">
                            <span className="input-group-text">
                                <i className="fa fa-user"></i>
                            </span>
                            <input name="name" className="form-control" placeholder="Full name" type="text" />
                        </div>

                        {/* Email Input */}
                        <div className="form-group input-group mb-3">
                            <span className="input-group-text">
                                <i className="fa fa-envelope"></i>
                            </span>
                            <input name="email" className="form-control" placeholder="Email address" type="email" />
                        </div>

                        {/* Password Input */}
                        <div className="form-group input-group mb-3">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                            </span>
                            <input name="password" className="form-control" placeholder="Create password" type="password" />
                        </div>

                        {/* Confirm Password Input (Jo aapke screenshot mein tha) */}
                        <div className="form-group input-group mb-3">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                            </span>
                            <input
                                name="confirmPassword"
                                className="form-control"
                                placeholder="Repeat password"
                                type="password"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="form-group mb-3">
                            <button type="submit" className="btn btn-primary btn-block w-100">
                                Create Account
                            </button>
                        </div>

                        <p className="text-center">
                            Have an account? <a href="#" onClick={props.switch}>Log In</a>
                        </p>
                    </form>
                </article>
            </div>
        </div>
    );
}