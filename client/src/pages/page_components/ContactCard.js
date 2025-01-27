function ContactCard({ contact }) {
    return (
        <a className='link-card' href={contact.link}>
                <div className="img-container">
                    <img className= "link-image" src={`${process.env.PUBLIC_URL}/assets/contact_images/${contact.image}`} alt={contact.name} />
                </div>
                <h3 className="contact-name">{contact.name}</h3>
        </a>
    ); 
}

export default ContactCard;