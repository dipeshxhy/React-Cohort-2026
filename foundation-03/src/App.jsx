// props are objects

import AvatarCard from './components/AvatarCard';

// we can take required key
function Shell({ title, children }) {
  return (
    <section>
      <p>Reusable Shell</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

const App = () => {
  const avatars = [
    {
      id: 1,
      name: 'Nova',
      role: 'Navigator',
      power: 'Routing',
      initials: 'NV',
    },
    {
      id: 2,
      name: 'Flux',
      role: 'State Keeper',
      power: 'useState',
      initials: 'FX',
    },
    {
      id: 3,
      name: 'Memo',
      role: 'Optimizer',
      power: 'Memoization',
      initials: 'MM',
    },
  ];
  return (
    <div>
      <h1>Hello from Dipesh</h1>
      <section>
        {avatars.map((avt) => (
          <AvatarCard
            key={avt.id}
            avatar={avt}
            level={avt.id === 1 ? 'Captain' : undefined}
          />
        ))}
      </section>

      <br />

      <h1>Children in react</h1>
      <Shell title={'Batman'}>
        <p>Batman is a superhero who fights crime in Gotham City.</p>
        <p>
          He is known for his intelligence, physical prowess, and use of
          technology to combat criminals.
        </p>
      </Shell>
    </div>
  );
};

export default App;
