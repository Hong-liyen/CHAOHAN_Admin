// 側邊選單
const aside_menu = document.querySelector('.aside_menu')
const main_content = document.querySelector('.main_content')
const aside_close = document.querySelector('.aside_close')
const chatlist = document.querySelector('.chatlist')
const chatbox = document.querySelector('.chatbox')

function barMenu() {
    aside_menu.classList.toggle('close')
    if(aside_menu.classList.contains('close')) {
        main_content.style.width = '100%'
    }
    if(window.innerWidth < 768) {
        aside_menu.classList.toggle('open')
        if(aside_menu.classList.contains('open')) {
            aside_menu.classList.remove('close')
        } 
    }
}

function aside_menu_close() {
    aside_menu.classList.remove('open')
    if(aside_menu.classList.contains('open')) {
        aside_menu.classList.add('close')
    }
}

function chat() {
    if(window.innerWidth < 768) {
        chatlist.classList.add('open')
        chatbox.style.display = 'none'
    }
}

// 下拉選單
const dropdown_menu = document.querySelector('.dropdown_menu')
const dropdown_menu_bell = document.querySelector('.dropdown_menu_bell')
const fa_angle_down = document.querySelector('.fa-angle-down')

function menu() {
    dropdown_menu.classList.toggle('open')
    if(dropdown_menu.classList.contains('open')) {
        fa_angle_down.classList.replace('fa-angle-down', 'fa-angle-up')
    } else {
        fa_angle_down.classList.replace('fa-angle-up', 'fa-angle-down')
    }
}

function bell() {
    dropdown_menu_bell.classList.toggle('open')
}

// 表格彈窗
const deleteModel = document.querySelector('.delete_model');
const editAddModel = document.querySelector('.edit_add_model');
const recordsModel = document.querySelector('.records_model');

function deletebox() {
    deleteModel.classList.add('open')
    if(deleteModel.classList.contains('open')) {
        deleteModel.classList.remove('close')
    }
}

function editaddbox() {
    editAddModel.classList.add('open')
    if(editAddModel.classList.contains('open')) {
        editAddModel.classList.remove('close')
    }
}

function recordsbox() {
    recordsModel.classList.add('open')
    if(recordsModel.classList.contains('open')) {
        recordsModel.classList.remove('close')
    }
}

function confirm() {
    deleteModel.classList.add('close')
    if(deleteModel.classList.contains('close')) {
        deleteModel.classList.remove('open')
    }
    editAddModel.classList.add('close')
    if(editAddModel.classList.contains('close')) {
        editAddModel.classList.remove('open')
    }
    recordsModel.classList.add('close')
    if(recordsModel.classList.contains('close')) {
        recordsModel.classList.remove('open')
    }
}

function cancel() {
    deleteModel.classList.add('close')
    if(deleteModel.classList.contains('close')) {
        deleteModel.classList.remove('open')
    }
    editAddModel.classList.add('close')
    if(editAddModel.classList.contains('close')) {
        editAddModel.classList.remove('open')
    }
    recordsModel.classList.add('close')
    if(recordsModel.classList.contains('close')) {
        recordsModel.classList.remove('open')
    }
}