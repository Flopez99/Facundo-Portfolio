import '../styling/App.css';
import '../styling/contact.css';
import { useState, useEffect } from 'react';
import ContactCard from './page_components/ContactCard';
function ContactPage() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("data/contacts.json",
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setContacts(data);
      })
      .catch((error) => console.error('Error fetching contacts:', error));
  }, []); 

  return (
    <div className="ContactPage">
      <header className="App-header">
        <div className='page-header'>
          <h2 className='title'>Get in Touch</h2>
          <p className='subtitle'>I'm always happy to connect! <br/> Reach out through any of the platforms below.</p>  
        </div>

        <div className="page-links">
            {contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact}/>
            ))}
        </div> 

      </header>
    </div>
  );
}

export default ContactPage;
