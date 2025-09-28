import React from 'react';
import { AuthProvider } from './context/AuthContext';
import AuthForm from './components/AuthForm/AuthForm';
import TasksBoard from './components/Tasks/TasksBoard';

export default function App() {
  return (
    <AuthProvider>
      <div style={{ padding: 20 }}>
        <AuthForm />
        <hr style={{ margin: '20px 0' }} />
        <TasksBoard />
      </div>
    </AuthProvider>
  );
}
