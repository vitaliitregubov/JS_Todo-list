'use strict';

const skillsList = document.getElementById('skills-list');
const newSkill = document.getElementById('new-skill');
const tip = document.querySelector('.tip');
let skills = ['html', 'css', 'js'];
let skill = '';

newSkill.addEventListener('input', ({ target }) =>  skill = target.value.toLowerCase());

window.addEventListener('keydown', ({ code }) => {
    const inputValue = skill.trim();
    if(code === 'Enter' && inputValue) {
        const isSkillNew = checkMatch(skills, inputValue)
        if(isSkillNew) {
            skills.push(inputValue);
            skill = '';
            newSkill.value = '';
            newSkill.classList.remove('error');
            tip.classList.remove('shown');
            renderSkills(skills);
        } else if (!isSkillNew) {
            newSkill.classList.add('error');
            tip.classList.add('shown');
        }
    }
})

function renderSkills(array) {
    skillsList.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        const listItem = createEl('li', ['skill']);
        const removeBtn = createEl('button', ['remove-btn']);
        const icon = createEl('i', ['fas','fa-times']);
        const skillText = createEl('mark');
        skillText.innerText = array[i];
        removeBtn.addEventListener('click', () => {
            removeSkill(skillText.innerText);
            if(checkMatch(skills, skill)) {
                tip.classList.remove('shown');
                newSkill.classList.remove('error');
            }
        });  
        removeBtn.appendChild(icon);
        listItem.appendChild(skillText);
        listItem.appendChild(removeBtn);
        skillsList.appendChild(listItem);
    }
}

function removeSkill(skill) {
    skills = skills.filter(el => el !== skill);
    renderSkills(skills);
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


window.addEventListener('DOMContentLoaded', () => renderSkills(skills));
