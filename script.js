let toggleBtns = document.getElementsByClassName('tab-btn');
let tabInfo = document.getElementsByClassName('tab-info');
let workTabs = document.getElementsByClassName('work-tabs')

function showTabInfo() {
    Array.from(tabInfo).forEach(tab => {
        if (tab.style.display === 'none') {
            tab.style.display = 'block';
            // workTabs.style.background-color = '#B9FF66';
        } else {
            tab.style.display = 'none';
        }
    });
}

Array.from(toggleBtns).forEach(toggleBtn => {
    toggleBtn.addEventListener('click', showTabInfo);
});