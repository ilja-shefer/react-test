import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function BasicTextFields({ onSubmit }) {
  const createdAt = new Date();

  const [fields, setFields] = React.useState({
    createdAt,
    email: '',
    fullName: '',
    text: '',
  });

  function onChangeInput(event) {
    const { name, value } = event.target;
    setFields({
      ...fields,
      [name]: value,
      createdAt,
    });
  }

  function handleClickAdd() {
    if (fields.fullName.trim() && fields.email.trim() && fields.text.trim()) {
      onSubmit(fields);
      setFields({
        email: '',
        fullName: '',
        text: '',
      });
    } else {
      alert('Заполните все поля!');
    }
  }

  return (
    <Box component="form" className="add-form" noValidate autoComplete="off">
      <div className="text-field">
        <TextField
          onChange={onChangeInput}
          value={fields.fullName}
          name="fullName"
          label="Имя"
          variant="outlined"
        />
      </div>
      <div className="text-field">
        <TextField
          onChange={onChangeInput}
          value={fields.email}
          name="email"
          label="Почта"
          variant="outlined"
        />
      </div>
      <div className="text-field">
        <TextField
          onChange={onChangeInput}
          value={fields.text}
          name="text"
          label="Текст..."
          multiline
          rows={4}
          fullWidth
        />
      </div>
      <Button onClick={handleClickAdd} fullWidth variant="contained">
        Contained
      </Button>
    </Box>
  );
}
