const menuIcon = document.querySelector('.navigation_menu .nav_menu_icon');

//Handling Menu State
function handleMenu() {
    const menuContainer = document.querySelector('.left_container');
    const contentDiv = document.querySelector('.content');
    const mainTopics = document.querySelector('.main_topics');

    if (!menuContainer.classList.contains('active')) {
        menuContainer.classList.add('active');
        menuIcon.classList.remove('fa-circle-right');
        menuIcon.classList.add('fa-circle-left');
        contentDiv.style.display = 'none';
        mainTopics.style.display = 'block';

    } else {
        menuContainer.classList.remove('active');
        menuIcon.classList.remove('fa-circle-left');
        menuIcon.classList.add('fa-circle-right');
        contentDiv.style.display = 'flex';
        mainTopics.style.display = 'none';
    }

}

//Fetching Data From JSON File
async function fetchData() {
    const res = await fetch('./data.json');
    const data = await res.json();
    console.log(data);

    showUIData(data);
    showMenuData(data);
}

//Left Container UI
function showMenuData(data) {
    const contentMenu = document.querySelector('.content_menu');
    const main_topics = document.querySelector('.main_topics');
    console.log(main_topics);
    data.tasks.forEach((task, index) => {
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');
        contentDiv.textContent = index + 1;
        contentMenu.appendChild(contentDiv);


        const mainTopicHeading = document.createElement('li');
        mainTopicHeading.classList.add('main_topic');
        mainTopicHeading.innerHTML = `
        ${task.task_title}
        `;
        const ul = document.createElement('ul');
        task.assets.forEach((asset) => {
            const li = document.createElement('li');
            li.textContent = asset.asset_title;
            ul.appendChild(li);
        });
        mainTopicHeading.appendChild(ul);
        main_topics.appendChild(mainTopicHeading);
    });
}

//Middle Container UI
function showUIData(data) {
    const middleContainer = document.querySelector('.middle_container');
    const cardsContainer = document.querySelector('.cards_container');

    data.tasks.forEach((task) => {
        //Displaying Info
        const infoContainer = document.createElement('div');
        infoContainer.classList.add('info_container');
        infoContainer.innerHTML = `
            <h3>${task.task_title}</h3>
            <p>${task.task_description}</p>
        `;
        middleContainer.appendChild(infoContainer);
        //Displaying Tasks
        task.assets.forEach((asset) => {
            if (asset.asset_type === 'display_asset') {
                if (asset.asset_content_type === 'video') {
                    const card = document.createElement('div');
                    card.classList.add('TPM_card', 'card');
                    card.innerHTML = `
            <div class="card_title" >
                ${asset.asset_title}
            <i class="fa-solid fa-circle-info"></i>
                    </div>
                    <div class="description">
                        <p><span>Description:</span> ${asset.asset_description}
                        </p>
                    </div>
                    <div class="TPM_card_image">
                        <iframe src="https://www.youtube.com/embed/TiMRwri1xJ8" frameborder="0"></iframe>
                    </div>;
            `;
                    cardsContainer.appendChild(card);
                } else {
                    const card = document.createElement('div');
                    card.classList.add('SA_card', 'card');
                    card.innerHTML = `
                <div class="card_title">
                        ${asset.asset_title}
                        <i class="fa-solid fa-circle-info"></i>
                    </div>
                    <div class="description">
                        <p><span>Description:</span> ${asset.asset_description}
                        </p>
                    </div>
                    <hr>
                    <div class="SA_content_wrapper">
                        <div class="SA_accordion">
                            <div class="SA_accordion_one accordion">
                                <i class="fa-solid fa-angle-up"></i>
                                Introduction
                            </div>
                            <div class="accordion_one_content">
                                <p>
                                    The 4SA Method , How to bring a idea into progress ?
                                </p>
                                <span>See More</span>
                            </div>

                            <div class="SA_accordion_two accordion">
                                <i class="fa-solid fa-angle-up"></i>
                                Thread A
                            </div>
                            <div class="accordion_two_content">
                                <p>
                                    How are you going to develop your stratergy ? Which method are you going to use to
                                    develop a stratergy ? What if the
                                    project is lengthy?
                                </p>
                                <span>See More</span>
                            </div>
                        </div>
                        <div class="SA_example_container">
                            <div>Example 1</div>
                            <p>You have a concept , How will you put into progress?</p>
                        </div>
                    </div>
                </div>
                `;
                    cardsContainer.appendChild(card);
                }

            }
            if (asset.asset_type === 'input_asset') {
                if (asset.asset_content_type === 'threadbuilder') {
                    const card = document.createElement('div');
                    card.classList.add('TB_card', 'card');
                    card.innerHTML = `
                <div class="card_title">
                    ${asset.asset_title}
            <i class="fa-solid fa-circle-info"></i>
                    </div >
                    <div class="description">
                        <p><span>Description:</span> ${asset.asset_description}
                        </p>
                    </div>
                    <div class="TB_accordion accordion">
                        <i class="fa-solid fa-angle-up"></i>
                        Thread A
                    </div>
                    <div class="input-wrapper">
                        <div class="TB_input">
                            Sub thread 1
                            <textarea placeholder="Enter Text here" name="" id=""></textarea>
                        </div>
                        <div class="TB_input">
                            Sub Interpretation 1
                            <textarea placeholder="Enter Text here" name="" id=""></textarea>
                        </div>
                    </div>
                    <div class="TB_menus">
                        <div class="TB_icons">
                            <img src="./assets/bulb.svg" alt="icon">
                            <img src="./assets/message.svg" alt="icon">
                            <img src="./assets/help.svg" alt="icon">
                            <img src="./assets/info.svg" alt="icon">
                        </div>
                        <div class="TB_menu">
                            <select>
                                <option value="">Select Category</option>
                                <option value="1">Option1</option>
                                <option value="2">Option2</option>
                                <option value="3">Option2</option>
                            </select>
                            <select>
                                <option value="">Select Process</option>
                                <option value="1">Option1</option>
                                <option value="2">Option2</option>
                                <option value="3">Option2</option>
                            </select>
                        </div>
                    </div>
                    <button class="TB_button">
                        <i class="fa-solid fa-plus"></i>
                        Sub-thread
                    </button>
                    <div class="TB_input_area">
                        <div class="TB_input">
                            Summary for Thread A
                            <textarea placeholder="Enter Text here" name="" id=""></textarea>
                        </div>
                    </div>
                `;
                    cardsContainer.appendChild(card);
                } else {
                    const card = document.createElement('div');
                    card.classList.add('SYP_card', 'card');
                    card.innerHTML = `
                <div class="card_title">
                        ${asset.asset_title}
                        <i class="fa-solid fa-circle-info"></i>
                    </div>
                    <div class="description">
                        <p><span>Description:</span> ${asset.asset_description}
                        </p>
                    </div>
                    <hr>
                    <div class="SYP_input_container">
                        <div class="SYP_input_title_box">
                            <h3 class="title">Title</h3>
                            <textarea></textarea>
                        </div>
                        <div class="SYP_content_box">
                            <h3 class="title">Content</h3>
                            <div class="box_tools">
                                <ul>
                                    <li>File</li>
                                    <li>Edit</li>
                                    <li>View</li>
                                    <li>Insert</li>
                                    <li>Format</li>
                                    <li>Tools</li>
                                    <li>Table</li>
                                    <li>Help</li>
                                </ul>
                                <div>
                                    <img src="./assets/arrow-curve-left-right.svg" alt="">
                                    <img src="./assets/arrow-curve-left-down.svg" alt="">
                                    <img src="./assets/arrow-expand.svg" alt="">
                                    <input type="text" placeholder="Paragraph">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </div>
                            </div>
                            <div class="SYP_message_box">
                                <textarea></textarea>
                            </div>
                        </div>
                    </div>
                `;
                    cardsContainer.appendChild(card);
                }

            }
            middleContainer.appendChild(cardsContainer);
        });
    });
}






//Event Listeners
menuIcon.addEventListener('click', handleMenu);
document.addEventListener('DOMContentLoaded', fetchData);