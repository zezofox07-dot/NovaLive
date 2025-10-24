let currentUser = null;
let users = [];
let rooms = [];

function login() {
    const username = document.getElementById('username').value;
    if(!username.trim()) return alert('ادخل اسم المستخدم');
    currentUser = { id: Date.now(), username, online: true };
    users.push(currentUser);
    document.getElementById('login-screen').style.display='none';
    document.getElementById('main-screen').style.display='block';
    renderProfile(); renderFriends(); renderRooms();
}

function renderProfile() {
    const profile = document.getElementById('profile');
    profile.innerHTML = `<h2>الملف الشخصي: ${currentUser.username} <span class="online-status"></span></h2>`;
}

function renderFriends() {
    const friends = document.getElementById('friends');
    friends.innerHTML = `<h3>الأصدقاء</h3>`;
    users.filter(u=>u.id!==currentUser.id).forEach(u=>{
        friends.innerHTML += `<p>${u.username} <span class="online-status"></span></p>`;
    });
}

function renderRooms() {
    const roomsDiv = document.getElementById('rooms');
    roomsDiv.innerHTML = `<h3>الغرف</h3>`;
    // يمكن إضافة الغرف الصوتية والنصية لاحقًا
}
