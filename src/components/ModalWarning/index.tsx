import React, { useState } from 'react';

import './styles.css'

interface ModalWarningProps {
    title: string;
}

const ModalWarning: React.FC<ModalWarningProps> = (props) => {

    const [show, setShow] = useState(true);

    return (
        <>
            {show && (
                <>
                    <div>
                        {props.title}
                    </div>
                    <button type="submit" onClick={() => setShow(false)}>entendi</button>
                </>
            )}
        </>
    )
}

export default ModalWarning;