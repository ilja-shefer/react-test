import React from "react"; 

function montoToStr(num) {
    return num > 12 || num < 1
      ? null
      : 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')[
          num - 1
        ];
  }

function FunctionProfile (props) {

    const {registredAt, name} = props;

    return (
        <div>
            <p>Привет, <b>{name.split(' ')[0]}</b></p>
            <p>Дата регистрации {[registredAt.getFullYear(), montoToStr(registredAt.getMonth()), registredAt.getDate()].join(' ')}</p>
        </div>
    );
}


export default FunctionProfile;