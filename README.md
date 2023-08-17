[![Статус тестов](../../actions/workflows/tests.yml/badge.svg)](../../actions/workflows/tests.yml)

# Mesto
> фронтенд + бэкенд

![screenshot](./frontend/src/images/preview.jpg)

### **Версии проекта**

---

1. Mesto (версия фронтенд + бэкенд) 🔆 _этот репозиторий_
2. [Mesto (бэкенд)](https://github.com/endjoyer/express-mesto-gha)
3. [Mesto (React, регистрация и авторизация)](https://github.com/endjoyer/react-mesto-auth)
4. [Mesto (React)](https://github.com/endjoyer/mesto-react)
5. [Mesto (версия на чистом JS)](https://github.com/endjoyer/mesto)

---

<a name="summary">
  <details>
    <summary>Оглавление</summary>
    <ol>
      <li><a href="#project-description">Описание проекта</a></li>
      <li><a href="#technologies">Стек технологий</a></li>
      <li><a href="#installation">Установка и запуск приложения в локальном репозитории, эксплуатация</a></li>
      <li><a href="#establishing">Процесс создания</a></li>
      <ul>
        <li><a href="#tasks-and-problems">Основные задачи, проблемы и их решение</a></li>
      </ul>
      <li><a href="#enhancement">Планы по улучшению</a></li>
    </ol>
  </details>
</a>

<a name="project-description"><h2>1. Описание проекта</h2></a>
Данная проектная работа - итоговая в рамках образовательной программы <a href="https://practicum.yandex.ru/">Яндекс Практикума</a>. Проект представляет собой адаптивное приложение (SPA), написанное на "React" (часть frontend) и "Node" (часть backend). Сервис позволяет авторизироваться и регистрироваться пользователям, редактировать данные своего профиля, загружать и удалять свои изображения, лайкать картинки из ленты пользователей.

В этом репозитории обе части объединены и сохранены на виртуальной машине, размещенной на <a href="https://cloud.yandex.ru/">Яндекс Облаке</a>.

<b>Ссылки на проект:</b>
<br>
IP 51.250.95.139
<br>
Frontend https://endjoys.project.nomoredomains.rocks
<br>
Backend https://api.endjoys.project.nomoredomains.rocks

<b>Ссылки на макет:</b>
<br>
https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1
https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1
https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=0%3A1
https://www.figma.com/file/PSdQFRHoxXJFs2FH8IXViF/JavaScript-9-sprint?node-id=0%3A1
https://www.figma.com/file/5H3gsn5lIGPwzBPby9jAOo/Sprint-14-RU?node-id=0%3A1

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="technologies"><h2>2. Стек технологий</h2></a>
<span>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="Иконка React">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="Иконка React Router">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="Иконка 'JavaScript'">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="Иконка CSS3">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="Иконка HTML5">
  <a href=""><img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Иконка 'Express'"></a>
  <a href=""><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Иконка 'Node JS'"></a>
  <a href=""><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="Иконка 'MongoDB'"></a>
  <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" alt="Иконка 'NGINX'">
</span>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="installation"><h2>3. Установка и запуск приложения в локальном репозитории, эксплуатация</h2></a>
1. `git clone https://github.com/elrouss/react-mesto-api-full-gha.git` - клонировать репозиторий (HTTPS) на свое устройство
2. `npm i` - установить зависимости (отдельно - в папке `frontend` и `backend`)
3. `npm run dev` - запустить приложение в режиме разработчика в папке `backend`
4. `npm run start` - запустить приложение в режиме разработчика в папке `frontend`

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="establishing"><h2>4. Процесс создания</h2></a>
Работа выполнена в <b>1 этап</b>:
<br>
* Реализовано логирование запросов и ошибок
* Объединены frontend и backend части приложения
* Создан облачный сервер и развернут API
* Создан .env-файл
* Создан домен и прикреплен к серверу
* Выпущены и подключены SSL-сертификаты

<div align="right">(<a href="#summary">к оглавлению</a>)</div>


<a name="tasks-and-problems"><h3>4.1 Основные задачи, проблемы и их решение</h3></a>
1. Кросс-доменные запросы и механизм CORS
<p>
  <b>Решение:</b> скачан и <a href="https://github.com/elrouss/react-mesto-api-full-gha/commit/0acbd1f7358d7bf39b912747fffb4e2812436235">подключен</a> пакет CORS
</p>

2. Связывание frontend и backend
<p>
  <b>Решение:</b> в связи с тем, что backend был написан несколько иначе, чем учебная серверная часть в процессе подготовки frontend, в процессе тестирования возникали многочисленные ошибки (регистрация/авторизация, не приходили данные, выход из личного кабинета одним пользоваталем и вход другим приводили к сохранению данных первого пользователя и их изменению только после перезагрузки страницы). Связывание проходило локально, были <a href="https://github.com/elrouss/react-mesto-api-full-gha/commit/0acbd1f7358d7bf39b912747fffb4e2812436235">внесены изменения</a> как на backend, так и на frontend
</p>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="enhancement"><h2>6. Планы по улучшению</h2></a>
- Оптимизация лишних ререндеров
- Оптимизация приложения для людей с ограниченными возможностями (напр., <b>label</b> для инпутов форм)
- Добавление автоматического обновления галереи карточек

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

