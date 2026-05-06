import { useEffect, useState } from 'react';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('idle');
  const [seconds, setSeconds] = useState(10);

  const addData = () => {
    setPosts([...posts, 'Hitesh', 'chaicode']);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(seconds);
      if (seconds === 0) {
        clearInterval(timer);
        setStatus('Time up');
      } else {
        setSeconds((prev) => Math.max(prev - 1, 0));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        setStatus('loading');
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
          { signal },
        );
        const data = await response.json();
        setPosts(data);
        setStatus('success');
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setStatus('error');
        }
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1>Posts {seconds} </h1>
      <button onClick={addData}>Add Data</button>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
