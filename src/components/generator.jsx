import React, { useState } from "react";
import "./generator.css";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);

  const generatePassword = () => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const rIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset.charAt(rIndex);
    }
    setPassword(newPassword);
  };
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <h1>Gerador de senhas </h1>
          <h2>Comprimento da senha: </h2>
          <input
            type="number"
            id="password-length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <div className="generate-button" onClick={generatePassword}>
          <span>Gerar Senha</span>
        </div>
      </form>

      <div className="senha">
        <strong className="senhaT">Senha gerada:</strong> {password}
      </div>
    </div>
  );
};

export default PasswordGenerator;
