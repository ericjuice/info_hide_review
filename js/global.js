function toggleAnswer(button) {
    const questionNumber = button.getAttribute("data-question");
    const answer = document.querySelector(`#answer${questionNumber}`);
    if (answer.style.display === "none") {
        answer.style.display = "block";
        button.textContent = "隐藏参考答案";
    } else {
        answer.style.display = "none";
        button.textContent = "单击显示答案";
        // 我也不知道为什么, 第一次必须双击才行. 不妨把bug改成特性吧..
    }
}

const toggleDarkMode = () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
}

const btn = document.querySelector('#dark-mode-toggle');
btn.addEventListener('click', toggleDarkMode);