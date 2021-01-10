import Profile from './components/Profile/Profile';
import user from './db/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './db/statistical-data.json';


 function App() {

  
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
    </>
  );
 }

 export default App;
