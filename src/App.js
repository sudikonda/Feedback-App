import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header'
import AboutPage from './components/pages/AboutPage';
import FeedbackData from './data/FeedbackData'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';

export default function App() {

    const [feedback, setFeedback] = useState(FeedbackData);

    const handleFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
            setFeedback(feedback.filter(feedback => feedback.id !== id));
        }
    }

    return (
        <Router>
            <Header text={"Feedback Header"} />
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleAdd={handleFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                            <AboutIconLink />
                        </>
                    }>

                    </Route>
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
        </Router>
    )
}