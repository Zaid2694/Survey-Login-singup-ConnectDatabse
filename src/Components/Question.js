import React from 'react'

export default function Question(props) {
    return (
        <div className='container-fluid'>
            <div className='col-md-5 m-auto'>
                <div className='mt-3'>
                    <div className='card text-left'>
                        <div className='card-body'>
                            <form onSubmit={props.submit}>
                                {/* Q3 */}
                                <div className='mb-3'>
                                    <label className="form-label">
                                        <b>3.</b> What are you currently doing?
                                    </label>
                                    <br />
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type='radio' name='q1' id='teacher' value="teacher" autoComplete='off' />
                                        <label className="form-check-label" htmlFor="teacher" >Testing</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type='radio' name='q1' id='student' value="student" autoComplete='off' />
                                        <label className="form-check-label" htmlFor="student" >Student</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type='radio' name='q1' id='programmer' value="programmer" autoComplete='off' />
                                        <label className="form-check-label" htmlFor="programmer" >Programmer</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type='radio' value="other" name='q1' id='other' autoComplete='off' />
                                        <label className="form-check-label" htmlFor="other" name="other">Other</label>
                                    </div>
                                    <br />

                                    <input
                                        type='text'
                                        className='form-control mt-2'
                                        disabled
                                        autoComplete='off'
                                        placeholder='Type here if not listed.'
                                    />
                                </div>

                                {/* Q4 */}
                                <div className='mb-3'>
                                    <label className="form-label">
                                        <b>4.</b> Please rate your course.
                                    </label>
                                    <br />
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" id="poor" name="q2" value={"poor"} autoComplete="off" />
                                        <label className="form-check-label" htmlFor="poor">Poor</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" id="good" name="q2" value={"good"} autoComplete="off" />
                                        <label className="form-check-label" htmlFor="good">Good</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" id="excellent" name="q2" value={"excellent"} autoComplete="off" />
                                        <label className="form-check-label" htmlFor="excellent">Excellent</label>
                                    </div>
                                </div>

                                {/* Q5 */}
                                <div className="mb-3">
                                    <label className="form-label"> <b>5.</b> Write your review here. </label>
                                    <textarea className="form-control" name="q3" rows="3" ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary">Save</button>
                            </form>

                            <center className="mt-3">
                                {/* Bootstrap 5 Badge Classes */}
                                <span className='badge bg-primary rounded-pill'>1</span>
                                <span className='badge bg-secondary rounded-pill'>2</span>
                            </center>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}