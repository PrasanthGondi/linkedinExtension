const btn = document.getElementById('start')
const btn2 = document.getElementById('stop')

btn.addEventListener('click',(e) => {
    btn.classList.add('hide')
    btn2.classList.remove('hide')
    const params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params,(tabs) => {
        chrome.tabs.sendMessage(tabs[0].id,e.target.id);
    });
});

btn2.addEventListener('click',(e) => {
    btn2.classList.add('hide')
    btn.classList.remove('hide')
    const params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params,(tabs) => {
        chrome.tabs.sendMessage(tabs[0].id,e.target.id);
    });
});

