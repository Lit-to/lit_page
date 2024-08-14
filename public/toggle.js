//ダークモード/ライトモード
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});
//ハンバーガーメニュー
document.querySelector('.hamburger-icon').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.left === '0%') {
        sidebar.style.left = '-15%';
    } else {
        sidebar.style.left = '0%';
    }
});

