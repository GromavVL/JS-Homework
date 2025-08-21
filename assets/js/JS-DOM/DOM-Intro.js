const profilePhoto = document.getElementsByClassName('profilePhoto')[0];
const firstName = document.getElementsByClassName('firstName')[0];
const lastName = document.getElementsByClassName('lastName')[0];
const nickname = document.getElementsByClassName('nickname')[0];
const birthday = document.getElementsByClassName('birthday')[0];
const likesCount = document.getElementsByClassName('likesCount')[0];
const btn = document.getElementsByClassName('btn')[0];

const user = {
    firstName: 'Test',
    lastName: 'Testovych',
    profilePhoto: 'https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg',
    birthday: new Date('2000-05-16'),
    nickname: 'super dev',
    likesCount: 10,
}


function f(e) {
    profilePhoto.src = user.profilePhoto;
    firstName.textContent = user.firstName;
    lastName.textContent = user.lastName;
    nickname.textContent = user.nickname;
    likesCount.textContent = user.likesCount;
    birthday.textContent = user.birthday.toLocaleDateString('uk-UK', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    btn.disabled = true;
}

btn.addEventListener('click', f);