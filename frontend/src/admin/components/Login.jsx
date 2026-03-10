import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/Authentification";

const Login = () => {
  const navigate = useNavigate();
  const { setToken } = useAuth();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); 

  const handleLogin = async (e) => {
    e.preventDefault();

    // Évite les doubles soumissions
    if (loading) return;

    setLoading(true);
    setMessage("");

    const loginData = {
      email: email,
      password: password,
    };

    console.log("📤 Données envoyées:", loginData);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      // Stocke le token
      const token = res.data.token;
      setToken(token);

      // Configure axios pour les futures requêtes
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setMessage("Connexion réussie ✅");
      setTimeout(() => {
        navigate("/admin/pageadmin/homeadmin", { replace: true });
        setLoading(false);
      }, 100);
    } catch (error) {
      console.error(" Erreur détaillée:", {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });

      setMessage("Email ou mot de passe incorrect ");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="form-login">
      <h2>Connexion Admin</h2>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          required
        />
      </div>

      <div className="form-group">
        <label>Mot de passe</label>
        <input
          type="password"
          placeholder="Votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={loading ? "btn-loading" : ""}
      >
        {loading ? "Connexion en cours..." : "Se connecter"}
      </button>

      {message && (
        <p className={message.includes("réussie") ? "success" : "error"}>
          {message}
        </p>
      )}
    </form>
  );
};

export default Login;
