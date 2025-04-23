import '../styles/Contact.scss';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logue simple des données
        console.log('Formulaire envoyé :', formData);
        alert("Votre message a bien été envoyé. Merci !");
        // API ou service email à intégrer ici !
    };

    return (
        <div className="contact-page">
            <h1>Contactez la rédaction</h1>
            <p>Vous souhaitez réagir à un article, proposer une thématique ou faire part d’une remarque ? Ce formulaire est à votre disposition, ou par courriel <a href="mailto:contact@la-depeche-animale.fr">ici</a>.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                    Adresse e-mail :
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="exemple@domaine.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Objet :
                    <input
                        type="text"
                        name="subject"
                        required
                        placeholder="Objet de votre message"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Message :
                    <textarea
                        name="message"
                        rows="6"
                        required
                        placeholder="Votre message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </label>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default Contact;
