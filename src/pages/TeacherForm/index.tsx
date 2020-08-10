import React from 'react'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Inputs';

import Select from '../../components/Select';

import './styles.css';

import warningIcon from '../../assets/icons/warning.svg'
import TextArea from '../../components/TextArea';


export default function TeacherForm() {
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
                        <TextArea label="Biografia" name="bio"/>
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