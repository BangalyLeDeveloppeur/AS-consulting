import React from "react";

const Form = () => {
  return (
    <div>
      <h1>Contactez-nous</h1>
      <form action="#" method="post">
        <label for="nom">
          Nom :
          <input type="text" id="nom" name="nom" required />
        </label>

        <label for="prenom">
          Prénom :
          <input type="text" id="prenom" name="prenom" required />
        </label>

        <label for="email">
          E-mail :
          <input type="email" id="email" name="email" required />
        </label>

        <label for="message">
          Message :
          <textarea id="message" name="message" rows="4" required></textarea>
        </label>

        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Form;
