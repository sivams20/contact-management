import react from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const contacts =[
    {id: 1, "name": "sivam", "email": "sivams20@gmail.com"},
    {id: 2, "name": "balu", "email": "balu@gmail.com"},
    {id: 3, "name": "Deepesh", "email": "dips@gmail.com"}
  ];
  return (
    <div className="ui container">
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
