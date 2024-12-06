import { collection, addDoc } from "firebase/firestore";
import { db } from './index'; 
// Handle the contact form submission
document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Get form values
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    try {
        // Add contact message to Firestore
        const docRef = await addDoc(collection(db, "contacts"), {
            email: email,
            subject: subject,
            message: message,
            timestamp: new Date()
        });

        // Alert user about successful submission
        alert("Votre message a été envoyé avec succès !");
        
        // Optionally, reset form fields
        document.getElementById('contactForm').reset();
    } catch (e) {
        console.error("Erreur d'ajout du message : ", e);
        alert("Une erreur est survenue. Veuillez réessayer plus tard.");
    }
});
