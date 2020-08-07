import React from 'react'

import './styles.css'

import WhatsAppIcon from '../../assets/icons/whatsapp.svg';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

export default function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponíveis">
                <form action="" id="search-teachers">

                    <div className="input-block">
                        <label htmlFor="subject">Matérias</label>
                        <input type="text" id='subject' />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Dias</label>
                        <input type="text" id='week-day' />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">hora</label>
                        <input type="text" id='time' />
                    </div>

                </form>
            </PageHeader>
            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>

    )
}