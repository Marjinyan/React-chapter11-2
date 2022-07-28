import {useState} from 'react'

const App = () => {

  const [user, setUser] = useState({name: '', age: ''})

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user)
  }

  return <div>
    <h1>Working with Forms!!</h1>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={user.name} 
        onChange={e => setUser({...user, name: e.target.value})}
      />
      <input 
        type="text" 
        value={user.age}  
        onChange={e => setUser({...user, age: e.target.value})}
      />
      <button>Send</button>
    </form>
  </div>
}

export default App