'use client'
import React, { useState } from 'react';
import Keyboard from '../components/keyboard';
import styles from '../styles/index.module.css';

const Index = (): JSX.Element => {
  const [cardNumber, setCardNumber] = useState<string>('');

  const handleKeyPress = (key: string): void => {
    setCardNumber((prevCardNumber) => prevCardNumber + key);
  };

  const handleAccept = (): void => {
    // Aquí puedes agregar la lógica para procesar la aceptación del número de tarjeta
  };

  const handleDelete = (): void => {
    setCardNumber((prevCardNumber) => prevCardNumber.slice(0, -1));
  };

  const handleCancel = (): void => {
    setCardNumber('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>¡Bienvenido al Cajero Automático!</h1>
      <form>
        <div className={styles.message}>Ingrese número de cuenta</div>
        <input type="text" value={cardNumber} readOnly className={styles.cardInput} />
      </form>
      <Keyboard
        onKeyPress={handleKeyPress}
        onAccept={handleAccept}
        onDelete={handleDelete}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default Index;
