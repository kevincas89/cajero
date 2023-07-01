import React from 'react';
import { FiCheck, FiDelete, FiX } from 'react-icons/fi';
import styles from '../styles/keyboard.module.css';

type KeyboardProps = {
  onKeyPress: (key: string) => void;
  onAccept: () => void;
  onDelete: () => void;
  onCancel: () => void;
};

const Keyboard: React.FC<KeyboardProps> = ({ onKeyPress, onAccept, onDelete, onCancel }) => {
  const handleKeyPress = (key: string): void => {
    onKeyPress(key);
  };

  const handleAccept = (): void => {
    onAccept();
  };

  const handleDelete = (): void => {
    onDelete();
  };

  const handleCancel = (): void => {
    onCancel();
  };

  const renderKey = (key: string): JSX.Element => {
    return (
      <button key={key} className={styles.keyButton} onClick={() => handleKeyPress(key)}>
        {key}
      </button>
    );
  };

  return (
    <div className={styles.keyboardContainer}>
      <div className={styles.row}>
        {renderKey('1')}
        {renderKey('2')}
        {renderKey('3')}
        <button className={`${styles.keyButton} ${styles.acceptButton}`} onClick={handleAccept}>
          <FiCheck />
        </button>
      </div>
      <div className={styles.row}>
        {renderKey('4')}
        {renderKey('5')}
        {renderKey('6')}
        <button className={`${styles.keyButton} ${styles.deleteButton}`} onClick={handleDelete}>
          <FiDelete />
        </button>
      </div>
      <div className={styles.row}>
        {renderKey('7')}
        {renderKey('8')}
        {renderKey('9')}
        <button className={`${styles.keyButton} ${styles.cancelButton}`} onClick={handleCancel}>
          <FiX />
        </button>
      </div>
      <div className={styles.row}>
        <button className={styles.keyButton}></button>
        {renderKey('0')}
        <button className={styles.keyButton}></button>
        <button className={styles.keyButton} style={{'marginRight':0}}></button>
      </div>
    </div>
  );
};

export default Keyboard;
