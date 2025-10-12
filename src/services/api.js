import axios from 'axios'

const API_URL = 'https://wedev-api.sky.pro/api/kanban';
export async function fetchTasks({ token }) {
    try {
        const data = await axios.get(API_URL, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        })
        return data.data.tasks
        // когда работаем с axios, не забываем, что результат лежит в ключе datа
    } catch (error) {
        throw new Error(error.message)
    }
}

// Функция добавления новой задачи:

export async function postTask({ token, task }) {
    try {
        const data = await axios.post(API_URL, task, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'text/html',
            },
        })
        return data.data.tasks
    } catch (error) {
        throw new Error(error.message)
    }
}

// Функция изменения задачи:

export async function editTask({ token, id, task }) {
    try {
        const data = await axios.patch(API_URL + id, task, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'text/html',
            },
        })
        return data.data.tasks
    } catch (error) {
        throw new Error(error.message)
    }
}

// Функция удаления задачи:

export async function deleteTask({ token, id }) {
    try {
        const data = await axios.delete(API_URL + id, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'text/html',
            },
        })
        return data.data.tasks
    } catch (error) {
        throw new Error(error.message)
    }
}