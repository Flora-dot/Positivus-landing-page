let toggleBtns = document.getElementsByClassName('tab-btn');
let tabInfo = document.getElementsByClassName('tab-info');

function showTabInfo(event) {
    const tabId = event.currentTarget.getAttribute('data-tab');
    const targetTab = document.getElementById(`tab-${tabId}`);
    const workTabsContainer = event.currentTarget.closest('.work-tabs');
    const plusIcon = event.currentTarget.querySelector('.plus-icon');
    const minusIcon = event.currentTarget.querySelector('.minus-icon');
    
    if (targetTab.style.display === 'none' || targetTab.style.display === '') {
        targetTab.style.display = 'block';
        plusIcon.style.display = 'none';
        minusIcon.style.display = 'block';
        workTabsContainer.style.backgroundColor = '#B9FF66';
    } else {
        targetTab.style.display = 'none';
        plusIcon.style.display = 'block';
        minusIcon.style.display = 'none';
        workTabsContainer.style.backgroundColor = '';
    }
}

Array.from(toggleBtns).forEach(toggleBtn => {
    toggleBtn.addEventListener('click', showTabInfo);
});