import { useRef } from 'react';

function HomePage() {

  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const feedback = feedbackInputRef.current.value;

    const reqBody = {
      email,
      text: feedback,
    };

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json()).then(data => console.log(data)); 
  };

  const getFeedback = (event) => {
    event.preventDefault();

    fetch('/api/feedback').then(response => response.json()).then(data => console.log(data));
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='email'>Your Email</label>
          <input id='email' type='email' ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor='feedback'>Your Feedback</label>
          <textarea id='feedback' rows='5' ref={feedbackInputRef} />
        </div>
        <button type='submit'>Submit Feedback</button>
        <button type='button' onClick={getFeedback}>Get Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
