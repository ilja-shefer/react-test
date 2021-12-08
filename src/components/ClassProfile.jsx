import React from "react";

function montoToStr(num) {
    return num > 12 || num < 1
      ? null
      : 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')[
          num - 1
        ];
  }

class ClassProfile extends React.Component {
    render() {

        const { name, registredAt } = this.props;

        return (
            <div>
            <p>Привет, <b>{name.split(' ')[0]}</b></p>
            <p>Дата регистрации {[registredAt.getFullYear(), montoToStr(registredAt.getMonth()), registredAt.getDate()].join(' ')}</p>
        </div>
        );
    }
}

export default ClassProfile;