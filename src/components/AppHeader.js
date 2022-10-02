import React from 'react';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';
import { useState } from 'react';

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.appHeader}>
      <Button varians="primary" onClick={() => { setModalOpen(true) }}>
        Add Task
      </Button>
      <SelectButton>
        <option value="a">a</option>
        <option value="b">b</option>
      </SelectButton>
      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  );
}

export default AppHeader;
