import React from 'react';

function Form() {
  let email = '';
  let password = '';

  function onChangeInput(event) {
    if (event.target.name === 'email') {
      email = event.target.value;
    }
    if (event.target.name === 'password') {
      password = event.target.value;
    }
  }

  function handelSubmit(event) {
    event.preventDefault();
    if (email.trim() || password.trim()) {
      alert('Заполните поля');
      event.target.reset();
    } else {
      console.log({ password, email });
      event.target.reset();
      email = '';
      password = '';
    }
  }

  return (
    <form onSubmit={handelSubmit}>
      <div>
        <input name="email" onChange={onChangeInput} type="text" placeholder="E-Mail" />
      </div>
      <div>
        <input name="password" onChange={onChangeInput} type="password" placeholder="Пароль" />
      </div>
      <div>
        <button type="submit">Войти</button>
      </div>
    </form>
  );
}

export default Form;
