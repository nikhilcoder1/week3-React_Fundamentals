import './App.css'
import ProfileCard from './Profile'

function App() {

  return (
    <>
      <h1>My Profile</h1>
      <ProfileCard 
        name="Nikhil"
        age={22}
        role="Frontend Developer"
      />
    </>
  )
}

export default App