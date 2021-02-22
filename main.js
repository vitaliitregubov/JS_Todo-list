'use strict';

const tasksList = document.getElementById('skills-list');
const newTaskInput = document.getElementById('new-skill');
const tip = document.querySelector('.tip');
let tasksArray = ['do homework', 'buy groceries', 'check emails'];
let newTask = '';

newTaskInput.addEventListener('input', ({ target }) =>  newTask = target.value.toLowerCase());

window.addEventListener('keydown', ({ code }) => {
    const inputValue = newTask.trim().toLowerCase();
    if(code === 'Enter' && inputValue) {
        const isTaskNew = checkMatch(tasksArray, inputValue)
        if(isTaskNew) {
            tasksArray.push(inputValue);
            newTask = '';
            newTaskInput.value = '';
            newTaskInput.classList.remove('error');
            tip.classList.remove('shown');
            renderTasks(tasksArray);
        } else if (!isTaskNew) {
            newTaskInput.classList.add('error');
            tip.classList.add('shown');
        }
    }
})

function renderTasks(array) {
    tasksList.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        const listItem = createEl('li', ['skill']);
        const removeBtn = createEl('button', ['remove-btn']);
        const icon = createEl('i', ['fas','fa-times']);
        const taskText = createEl('mark');
        taskText.innerText = array[i];
        removeBtn.addEventListener('click', () => {
            removeTask(taskText.innerText);
            if(checkMatch(tasksArray, skill)) {
                tip.classList.remove('shown');
                newSkill.classList.remove('error');
            }
        });  
        removeBtn.appendChild(icon);
        listItem.appendChild(taskText);
        listItem.appendChild(removeBtn);
        tasksList.appendChild(listItem);
    }
}

function removeTask(skill) {
    tasksArray = tasksArray.filter(el => el !== skill);
    renderTasks(tasksArray);
}

function checkMatch(array, value) {
   return !array.includes(value);
}

function createEl(tag = 'div', classesArray = []) {
    const el = document.createElement(tag);
    if (classesArray.length) {
        for(let i = 0; i < classesArray.length; i++) {
            el.classList.add(classesArray[i]);
        }
    }

    return el;
}


window.addEventListener('DOMContentLoaded', () => renderTasks(tasksArray));

