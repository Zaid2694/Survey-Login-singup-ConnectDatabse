




import React, { Component } from 'react'
import Details from './Details'
import Question from './Question'
import { v4 as uuidv4 } from 'uuid';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
const firebaseConfig = {
    apiKey: "AIzaSyCpdiYLr-Us1ZQB9a4TvpLcLUUxUXp_FL8",
    authDomain: "first-survey-6dd52.firebaseapp.com",
    databaseURL: "https://first-survey-6dd52-default-rtdb.firebaseio.com",
    projectId: "first-survey-6dd52",
    storageBucket: "first-survey-6dd52.firebasestorage.app",
    messagingSenderId: "662090609782",
    appId: "1:662090609782:web:dfb65b7d760d6a27421b57"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: uuidv4(),
            name: null,
            email: null,
            questions: {

                q1: null,
                q2: null,
                q3: null,
                other: null,
            },
            isSubmitted: false
        };
    }
    detailsSubmitHnadler = (event) => {
        const name = event.target.name.value;
        const email = event.target.email.value;
        this.setState({ name, email }, () => {
            console.log(this.state);
        });
        event.preventDefault();
    };
    questionsSubmitHnadler = (event) => {
        const questions = {}
        questions.q1 = event.target.q1.value;
        questions.q2 = event.target.q2.value;
        questions.q3 = event.target.q3.value;
        questions.other = event.target.other.value;
        const isSubmitted = true;

        this.setState({ questions, isSubmitted }, () => {
            console.log(this.state);
        });



        event.preventDefault();
        firebase.database().ref("survey/" + this.state.id).set({
            name: this.state.name,
            email: this.state.email,
            questions: questions,   // use local object
        })
            .then(() => {
                console.log("Data saved successfully!");
                this.setState({ isSubmitted: true });
            })
            .catch((error) => {
                console.error("Error saving data: ", error);
            });

    };

    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <div className='container card mt-2'>
                        <h1 className='text-center text-primary'>Hello World!</h1>
                    </div>
                </div>
                {this.state.isSubmitted ? (
                    <div className='card'>
                        <h1>Thank you!</h1>
                    </div>
                ) : this.state.name === null && this.state.email === null ? (
                    <Details submit={this.detailsSubmitHnadler} />

                ) : (
                    <Question submit={this.questionsSubmitHnadler} />

                )
                }
            </div>
        );
    }
}

export default Container