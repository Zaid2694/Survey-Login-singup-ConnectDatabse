import React from 'react'

export default function Details(props) {
    return (
        <div className='container-fluid'>
            <div className='col-md-5 m-auto'>
                <div className='mt-3'>
                    <div className='card text-left'>
                        <div className='card-body'>
                            <form onSubmit={props.submit}>
                                {/* Question 1 */}
                                <div className='mb-3'> {/* Bootstrap 5 spacing class */}
                                    <label className="form-label">
                                        <b>1.</b> Name
                                    </label>
                                    <input
                                        type='text'
                                        name='name'
                                        className='form-control' /* Fixed typo: from-control -> form-control */
                                        placeholder='Please enter your name'
                                        autoComplete='off'
                                        required
                                    />
                                </div>

                                {/* Question 2 */}
                                <div className='mb-3'>
                                    <label className="form-label">
                                        <b>2.</b> Email
                                    </label>
                                    <input
                                        type='email' /* Type email better hai text se */
                                        name='email'
                                        className='form-control'
                                        placeholder='Please enter your email'
                                        autoComplete='off'
                                        required
                                    />
                                </div>

                                <button type='submit' className='btn btn-primary'>Next</button>
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