const shows = [
  {
    id: 1,
    title: 'The Component Returns',
    time: '10:00 AM',
    hall: 'Hall A',
  },
  {
    id: 2,
    title: 'Attack of the Re-render',
    time: '12:30 PM',
    hall: 'Hall B',
  },
  {
    id: 3,
    title: 'Virtual DOM Nights',
    time: '04:00 PM',
    hall: 'Hall C',
  },
];

const App = () => {
  const name = 'Dipesh';

  // fetch -> API -> Data -> variable
  return (
    <div>
      <h1>Hello Hi {name} from chaicode</h1>
      <h2>project 2</h2>
      <p>{shows[0].title}</p>

      <section className="grid">
        {shows.map((show) => (
          <article key={show.id}>
            <h3>{show.title}</h3>
            <p className="muted">{show.time}</p>
            <p className="tag">{show.hall}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default App;
