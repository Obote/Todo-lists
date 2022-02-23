require('./index.html');
import _ from 'lodash';
import './index.css';

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo =>{

    const html = ` 
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
        `;
        list.innerHTML += html;
};