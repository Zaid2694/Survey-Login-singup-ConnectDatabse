import React, { Component } from "react";
import Register from "./Components/Resigter";
import Login from "./Components/Login";

// Only Compat version use karein
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCpdiYLr-Us1ZQB9a4TvpLcLUUxUXp_FL8",
  authDomain: "first-survey-6dd52.firebaseapp.com",
  databaseURL: "https://first-survey-6dd52-default-rtdb.firebaseio.com",
  projectId: "first-survey-6dd52",
  storageBucket: "first-survey-6dd52.firebasestorage.app",
  messagingSenderId: "662090609782",
  appId: "1:662090609782:web:dfb65b7d760d6a27421b57"
};

// Initialize Firebase (Compat style)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      message: '',
      type: 1,
    };
  }

  pageSwitchHandler = (e) => {
    this.setState({ page: !this.state.page, message: null });
    e.preventDefault();
  };

  registrationHandler = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      this.setState({ message: "Password does not match!", type: 0 });
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // 1. Account banne ke baad verification email send karein
        userCredential.user.sendEmailVerification()
          .then(() => {
            console.log("Verification email sent!");
            this.setState({
              message: "Account created! Verification link sent to your email. Please check your inbox/spam.",
              type: 1,
            });
          })
          .catch((err) => {
            console.log("Error sending verification email:", err);
            this.setState({ message: "Account created but failed to send verification email.", type: 0 });
          });
      })
      .catch((error) => {
        console.log("Firebase Error: ", error);
        this.setState({ message: error.message, type: 0 });
      });
  };
  googleletLoginHandler = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((response) => {
        console.log(response.user);
      })
      .catch((error) => {
        console.log(error);
      })


  }

  loginHandler = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log("🔥 loginHandler called");
    console.log("Email:", email);

    // Compat version ka sign in method
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // 2. Check karein ke email verify ho chuka hai ya nahi
        if (user.emailVerified) {
          // ✅ Verified — login successful
          this.setState({ message: "Login successful!", type: 1 });
        } else {
          // ❌ Not Verified
          this.setState({ message: "Your Email is not verified yet. Please check your inbox.", type: 0 });

          // Optional: Login block karne ke liye user ko sign out kar dein taaki state clean rahe
          firebase.auth().signOut();
        }
      })
      .catch((error) => {
        console.log("Error code:", error.code);
        console.log("Error message:", error.message);
        this.setState({ message: error.message, type: 0 });
      });
  };

  render() {
    return (
      <div>
        {this.state.page ? (
          <Register
            type={this.state.type}
            message={this.state.message}
            switch={this.pageSwitchHandler}
            register={this.registrationHandler}
            google={this.googleletLoginHandler}
          />
        ) : (
          <Login
            switch={this.pageSwitchHandler}
            login={this.loginHandler}
            type={this.state.type}
            message={this.state.message}
          />
        )}
      </div>
    );
  }
}

export default App;




// import React, { Component } from "react";
// import Register from "./Components/Resigter";
// import Login from "./Components/Login";

// // Only Compat version use karein
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCpdiYLr-Us1ZQB9a4TvpLcLUUxUXp_FL8",
//   authDomain: "first-survey-6dd52.firebaseapp.com",
//   databaseURL: "https://first-survey-6dd52-default-rtdb.firebaseio.com",
//   projectId: "first-survey-6dd52",
//   storageBucket: "first-survey-6dd52.firebasestorage.app",
//   messagingSenderId: "662090609782",
//   appId: "1:662090609782:web:dfb65b7d760d6a27421b57"
// };

// // Initialize Firebase (Compat style)
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
//   const auth = firebase.auth();
// }

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       page: 1,
//       message: '',
//       type: 1,
//     };
//   }

//   pageSwitchHandler = (e) => {
//     this.setState({ page: !this.state.page, message: null });
//     e.preventDefault();
//   };

//   registrationHandler = (event) => {
//     event.preventDefault();

//     const email = event.target.email.value;
//     const password = event.target.password.value;
//     const confirmPassword = event.target.confirmPassword.value;

//     if (password !== confirmPassword) {
//       this.setState({ message: "Password does not match!", type: 0 });
//       return;
//     }

//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then((data) => {
//         console.log("User Registered Successfully: ", data);
//         this.setState({
//           message: "Account created successfully!",
//           type: 1,
//         });
//       })
//       .catch((error) => {
//         console.log("Firebase Error: ", error);
//         this.setState({ message: error.message, type: 0 });
//       });
//   };
//   // import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

//   loginHandler = (event) => {
//     event.preventDefault();

//     // 1. Auth instance get karein (agar pehle se initialized nahi hai)
//     const auth = getAuth();

//     const email = event.target.email.value;
//     const password = event.target.password.value;
//     console.log("🔥 loginHandler called");   // <-- ye line add karein
//     console.log("Email:", event.target.email.value);
//     console.log("Password:", event.target.password.value);

//     // 2. Sahi function call (auth instance pass karein)
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = auth.currentUser;

//         if (user.emailVerified === true) {
//           // ✅ Verified — login successful
//           this.setState({ message: "Login successful", type: 1 });
//         } else {

//           this.setState({ message: "Your Email is not verified yet.", type: 0 });
//         }

//       })
//       .catch((error) => {
//         console.log("Error code:", error.code);
//         console.log("Error message:", error.message);

//         // Agar class component hai to this.setState use karein, 
//         // warna functional component mein useState ka setter use karein.
//         this.setState({ message: error.message, type: 0 });
//       });
//   };
//   render() {
//     return (
//       <div>
//         {this.state.page ? (
//           <Register
//             type={this.state.type}
//             message={this.state.message}
//             switch={this.pageSwitchHandler}
//             register={this.registrationHandler}
//           />
//         ) : (
//           <Login switch={this.pageSwitchHandler}
//             login={this.loginHandler}
//             type={this.state.type}
//             message={this.state.message} />
//         )}
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from "react";
// import Register from "./Components/Resigter";
// import Login from "./Components/Login";

// // Only Compat version use karein (consistent rakhein)
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCpdiYLr-Us1ZQB9a4TvpLcLUUxUXp_FL8",
//   authDomain: "first-survey-6dd52.firebaseapp.com",
//   databaseURL: "https://first-survey-6dd52-default-rtdb.firebaseio.com",
//   projectId: "first-survey-6dd52",
//   storageBucket: "first-survey-6dd52.firebasestorage.app",
//   messagingSenderId: "662090609782",
//   appId: "1:662090609782:web:dfb65b7d760d6a27421b57"
// };

// // Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       page: 1,
//       message: '',
//       type: 1,
//     };
//   }

//   pageSwitchHandler = (e) => {
//     this.setState({ page: !this.state.page, message: null });
//     e.preventDefault();
//   };

//   registrationHandler = (event) => {
//     event.preventDefault();

//     const email = event.target.email.value;
//     const password = event.target.password.value;
//     const confirmPassword = event.target.confirmPassword.value;

//     if (password !== confirmPassword) {
//       this.setState({ message: "Password does not match!", type: 0 });
//       return;
//     }

//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Verification email bhejo
//         return userCredential.user.sendEmailVerification().then(() => {
//           console.log("User Registered + Verification Email Sent");
//           this.setState({
//             message: "Account created! Please check your email and verify before login.",
//             type: 1,
//           });
//         });
//       })
//       .catch((error) => {
//         console.log("Firebase Error: ", error);
//         this.setState({ message: error.message, type: 0 });
//       });
//   };

//   loginHandler = (event) => {
//     event.preventDefault();

//     const email = event.target.email.value;
//     const password = event.target.password.value;

//     console.log("loginHandler called");
//     console.log("Email:", email);

//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;

//         if (user.emailVerified) {
//           // ✅ Verified — login successful
//           this.setState({ message: "Login successful", type: 1 });
//           // Yahan aap dashboard pe redirect kar sakte hain
//         } else {
//           // ❌ Not verified — message dikhao + sign out kar do
//           this.setState({
//             message: "Your Email is not verified yet. Please check your inbox.",
//             type: 0,
//           });

//           // Important: user ko sign out kar do
//           firebase.auth().signOut();
//         }
//       })
//       .catch((error) => {
//         console.log("Error code:", error.code);
//         console.log("Error message:", error.message);
//         this.setState({ message: error.message, type: 0 });
//       });
//   };

//   render() {
//     return (
//       <div>
//         {this.state.page ? (
//           <Register
//             type={this.state.type}
//             message={this.state.message}
//             switch={this.pageSwitchHandler}
//             register={this.registrationHandler}
//           />
//         ) : (
//           <Login
//             switch={this.pageSwitchHandler}
//             login={this.loginHandler}
//             type={this.state.type}
//             message={this.state.message}
//           />
//         )}
//       </div>
//     );
//   }
// }

// export default App;



// import React, { Component } from "react";
// import { initializeApp } from "firebase/app";
// import Register from "./Components/Resigter";
// import Login from "./Components/Login";
// import firebase from "firebase/compat/app";  // <-- Yahan 'compat/app' use karein
// import "firebase/compat/auth";               // <-- Yahan 'compat/auth' use karein

// const firebaseConfig = {
//   apiKey: "AIzaSyCpdiYLr-Us1ZQB9a4TvpLcLUUxUXp_FL8",
//   authDomain: "first-survey-6dd52.firebaseapp.com",
//   databaseURL: "https://first-survey-6dd52-default-rtdb.firebaseio.com",
//   projectId: "first-survey-6dd52",
//   storageBucket: "first-survey-6dd52.firebasestorage.app",
//   messagingSenderId: "662090609782",
//   appId: "1:662090609782:web:dfb65b7d760d6a27421b57"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// class App extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {

//       //  page = 0 (login) or page=1 (Register) 
//       page: 1,
//       message: '',
//       // type 1-sucess 0 is error
//       type: 1,
//     };
//   }
//   pageSwitchHandler = (e) => {
//     this.setState({ page: !this.state.page });
//     e.preventDefault();
//   };
//   registrationHandler = (event) => {
//     event.preventDefault();

//     const email = event.target.email.value;
//     const password = event.target.password.value;
//     const confirmPassword = event.target.confirmPassword.value;
//     if (password !== confirmPassword) {
//       this.setState({ message: "Password does not much!", type: 0 });
//       return;
//     }
//     // const auth = firebase.auth();
//     // const authPromise = auth.createUserWithEmailAndPassword(email, password);
//     // authPromise
//     //   .then((data) => {
//     //     console.log(data);
//     //   })
//     //   .catch((error) => {
//     //     console.log(error);
//     //   });
//     const auth = firebase.auth();
//     const authPromise = auth.createUserWithEmailAndPassword(email, password);
//     authPromise
//       .then((data) => {
//         console.log("User Registered Successfully: ", data);
//         this.setState({
//           message: "Account created successfully!",
//           type: 1,
//           // Optional: Register hone ke baad page ko Login (0) pe switch kar sakte hain
//           // page: 0 
//         });
//       })
//       .catch((error) => {
//         console.log("Firebase Error: ", error);
//         // Firebase error message ko state mein set karein
//         this.setState({ message: error.message, type: 0 });
//       });
//   }

//   render() {
//     return <div>
//       {this.state.page ? (
//         <Register
//           type={this.state.type}
//           message={this.state.message}
//           switch={this.pageSwitchHandler}
//           register={this.registrationHandler}

//         />) : (<Login switch={this.pageSwitchHandler} />)
//       }

//     </div>;
//   }
// }

// export default App;
// // loginHandler = (event) => {
// //   const auth = firebase.auth();

// //   event.preventDefault();

// //   const email = event.target.email.value;
// //   const password = event.target.password.value;
// //   auth().
// //     signInWithEmailAndPassword(email, password)
// //     .then((data) => {
// //       console.log(data);
// //     })
// //     .catch((error) => {
// //       console.log(error);
// //       this.setState({ message: error.message, type: 0 });

// //     })


// };
