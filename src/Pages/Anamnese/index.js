import React, { useState } from "react";
import style from './Anamnese.module.scss'
import InputComponent from "../../Components/Input";

function Anamnese(props) {
    const [inputValue, setInputValue] = useState(''); // Importe 'useState' no início do arquivo

    const handleInputChange = (value) => {
      setInputValue(value);
    };

    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.container_content}>
                    <InputComponent
                        label="Exemplo de Input"
                        maxLength={50}
                        required={true}
                        onChange={handleInputChange}
                    />
                    <p>Valor do Input: {inputValue}</p>
                </div>
            </div>
        </div>
    )
}

export default Anamnese;
