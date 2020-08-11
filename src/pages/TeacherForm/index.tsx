import React, { useState } from 'react'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Inputs';

import Select from '../../components/Select';

import './styles.css';

import warningIcon from '../../assets/icons/warning.svg'
import TextArea from '../../components/TextArea';


export default function TeacherForm() {

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '', }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems, {week_day: 0, from: '', to: '' }
        ]);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                description="O primeiro passo é preencher esse formulário de inscrição"
                title="Que incrível você quer dar aulas">
            </PageHeader>

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome Completo" />
                    <Input name="avatar" label="Dia da Semana" />
                    <Input type="number" name="whatsApp" label="whatsApp" />
                    <TextArea label="Biografia" name="bio" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Cálculo', label: 'Cálculo' },
                            { value: 'Lógica de programação', label: 'Lógica de programação' },
                            { value: 'Algorítimo', label: 'Algorítimo' },
                            { value: 'Redes', label: 'Redes' },
                        ]}
                    />
                    <Input name="cost" label="custo por hora" />
                </fieldset>

                <fieldset>
                    <legend>Horários disponíveis
                        <button type='button' onClick={addNewScheduleItem}>
                            + novo horário
                        </button>
                    </legend>

                    {scheduleItems.map(scheduleItems => {
                        return (
                            <div className="schedule-item">
                                <Select
                                    name="week_day"
                                    label="Dia da Semana"
                                    options={[
                                        { value: '0', label: 'Segunda-feira' },
                                        { value: '1', label: 'Terça-feira' },
                                        { value: '2', label: 'Quarta-feira' },
                                        { value: '3', label: 'Quinta-feira' },
                                        { value: '4', label: 'Sexta-feira' },
                                        { value: '5', label: 'Sábado' },
                                    ]}
                                />

                                <Input name="from" label="Dias" type="time" />
                                <Input name="to" label="Até" type="time" />
                            </div>
                        )
                    })}


                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importe" />
                            Importante! <br />
                            Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}