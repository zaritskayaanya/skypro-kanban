import axios from 'axios'

const API_URL = 'https://wedev-api.sky.pro/api/kanban/';
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
                "Content-Type": "",
            },
        })
        return data.data.tasks
    } catch (error) {
        throw new Error(error.message)
    }
}

// Функция изменения задачи:

export async function redactTask({ token, _id, task }) {
    try {
        const data = await axios.put(API_URL + _id, task, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': '',
            },
        })
        return data.data
    } catch (error) {
        throw new Error(error.message)
    }
}

// Функция удаления задачи:

export async function deleteTask({ token, _id }) {
    try {
        const data = await axios.delete(API_URL + _id,  {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': '',
            },
        })
        return data.data.tasks
    } catch (error) {
        throw new Error(error.message)
    }
}