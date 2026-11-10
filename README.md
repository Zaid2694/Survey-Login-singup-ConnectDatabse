# Survey Login & Signup with Firebase

A React-based survey application featuring secure user authentication (Login/Signup) using Firebase. Users can create an account, verify their email, log in, and proceed to fill out a survey. The survey data is stored in Firebase Realtime Database.

## Live Demo
*(Agar aapne deploy kiya hai, toh yahan link daalein, jaise: [Live Demo](https://first-survey-6dd52.web.app))*

## Features

- **User Authentication**: Secure email/password signup and login using Firebase Auth.
- **Email Verification**: New users receive a verification email before they can log in.
- **Google Sign-In**: Quick authentication via Google account.
- **Survey Form**: Multi-step survey form (Details -> Questions) to collect user data.
- **Database Integration**: Survey responses are saved to Firebase Realtime Database.
- **Responsive UI**: Built with React and Bootstrap for a clean, mobile-friendly interface.

## Tech Stack

- **Frontend**: React.js (Class Components), Bootstrap
- **Backend/Auth**: Firebase Authentication (Email/Password & Google OAuth)
- **Database**: Firebase Realtime Database
- **Styling**: CSS, Bootstrap

## Prerequisites

Before running this project, ensure you have:
- [Node.js](https://nodejs.org/) installed (v14 or higher recommended).
- A Firebase project set up with **Authentication** (Email/Password & Google provider enabled) and **Realtime Database**.

## Installation & Setup

1.  **Clone the repository:**
    git clone https://github.com/Zaid2694/Survey-Login-singup-ConnectDatabse.git
    cd Survey-Login-singup-ConnectDatabse
2.Install dependencies:
bash
npm install

3.Firebase Configuration:

Open src/App.js and replace the firebaseConfig object with your own Firebase project credentials.

Ensure you have enabled Email/Password and Google sign-in methods in the Firebase Console.

Enable Realtime Database and set the rules to read: true, write: true (for testing purposes only).


4.Run the app
bush
npm start

Usage
Sign Up: Create a new account using email/password. Check your email for the verification link.

Login: After verification, log in with your credentials. (Note: Unverified users will be prompted to verify their email first).

Survey: Once logged in, fill out the survey details and answer the questions.

Data Storage: Upon submission, your responses are saved to the Firebase Realtime Database under the survey/ node.

Project Structure
src/App.js: Main component, handles Firebase initialization and auth logic.

src/Components/Resigter.js: Signup form component.

src/Components/Login.js: Login form component.

src/Components/Container.js: Manages the survey flow and database submission.

src/Components/Details.js & Question.js: Survey form components.

Deployment
(Agar aapne deploy kiya hai)
This app can be deployed using Firebase Hosting or any other static hosting service.

Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


    
