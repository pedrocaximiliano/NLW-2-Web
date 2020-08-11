import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Inputs';

import Select from '../../components/Select';

import './styles.css';

import warningIcon from '../../assets/icons/warning.svg'
import TextArea from '../../components/TextArea';
import api from '../../services/api';


export default function TeacherForm() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsApp, setwhatsApp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '', }
    ]);

    function addNewScheduleItem(value: number) {
        if (scheduleItems.length < 3) {
            setScheduleItems([
                ...scheduleItems, { week_day: 0, from: '', to: '' }
            ]);
        } else {
            alert('maximo de 3 horarios por semana');
        }
    };

    function removeNewScheduleItem(position: number) {
        const array = [...scheduleItems];
        if (scheduleItems.length > 1) {
            scheduleItems.map((scheduleItem, index) => {
                if (index === position) {
                    return array.splice(index, 1)
                }
            })
        }

        setScheduleItems(array)
    }

    function handlerCreate(e: FormEvent) {
        e.preventDefault();

        api.post('/classes', {
            name,
            avatar,
            whatsApp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!!');
            history.push('/');
        })
    }

    function setScheduleItemsValue(position: number, field: string, value: string) {

        const updateArrayItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }
            return scheduleItem;
        });


        setScheduleItems(updateArrayItems)
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                description="O primeiro passo é preencher esse formulário de inscrição"
                title="Que incrível você quer dar aulas">
            </PageHeader>

            <main>
                <form onSubmit={handlerCreate}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input
                            required
                            name="name"
                            label="Nome Completo"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <Input
                            required
                            name="avatar"
                            label="avatar"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />
                        <Input
                            required
                            type="number"
                            name="whatsApp"
                            label="whatsApp"
                            value={whatsApp}
                            onChange={(e) => { setwhatsApp(e.target.value) }}
                        />
                        <TextArea
                            required
                            label="Biografia"
                            name="bio"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select
                            required
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
                            options={[
                                { value: 'Cálculo', label: 'Cálculo' },
                                { value: 'Lógica de programação', label: 'Lógica de programação' },
                                { value: 'Algorítimo', label: 'Algorítimo' },
                                { value: 'Redes', label: 'Redes' },
                            ]}
                        />
                        <Input
                            required
                            name="cost"
                            label="custo por hora"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Horários disponíveis
                        <button type='button' onClick={() => addNewScheduleItem}>
                                + novo horário
                        </button>
                        </legend>
                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        required
                                        name="week_day"
                                        label="Dia da Semana"
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemsValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: '0', label: 'Segunda-feira' },
                                            { value: '1', label: 'Terça-feira' },
                                            { value: '2', label: 'Quarta-feira' },
                                            { value: '3', label: 'Quinta-feira' },
                                            { value: '4', label: 'Sexta-feira' },
                                            { value: '5', label: 'Sábado' },
                                        ]}
                                    />
                                    <Input
                                        required
                                        name="from"
                                        label="Dias"
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemsValue(index, 'from', e.target.value)}
                                    />
                                    <Input
                                        required
                                        name="to"
                                        label="Até"
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemsValue(index, 'to', e.target.value)}
                                    />
                                    {scheduleItems.length > 1 && (
                                        <legend>
                                            <button
                                                type="submit"
                                                onClick={() => removeNewScheduleItem(index)}>
                                                excluir
                                            </button>
                                        </legend>
                                    )}
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
                        <button type="submit">
                            Salvar cadastro
                    </button>
                    </footer>
                </form>

            </main>
        </div>
    )
}