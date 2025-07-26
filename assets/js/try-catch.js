//------------JS Обробка помилок----------


// 2. *Реалізувати функцію для валідації імейлу
function pochta(email) {
    if(!email.includes('@') || !email.includes('.com')){
        throw new RangeError('Email має містити символ @ або .com');
    }
    return email;
}
try {
    const user = pochta('vlad@gmail.com');
    console.log('user :>> ', user);
}catch (err) {
    console.log(err);
}