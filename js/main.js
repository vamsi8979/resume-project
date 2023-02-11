const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        document.querySelector("#education table").setAttribute("class","table table-striped table-dark")
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.documentElement.setAttribute('data-bs-theme', 'light');
        document.querySelector("#education table").setAttribute("class","table table-striped")
        localStorage.setItem('theme', 'light');
    }    
}
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.documentElement.setAttribute('data-bs-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        document.querySelector("#education table").setAttribute("class","table table-striped table-dark")
    }
}
function login() {
    alert(this.email.value+' '+this.fname.value+' '+this.message.value);
}