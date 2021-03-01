import React from 'react';
import { lightGray } from '../styles/colors';
import { useHistory } from 'react-router-dom';

const containerInput = {
    fontSize: '35',
    height: '15%',
    width: '100%',
    padding: '30px',
    border: `2px solid ${lightGray}`,
    backgroundColor: 'white',
    outline: 0,
}

const result = {
    height: '40px',
    paddingTop: '25px',
    paddingLeft: '20px',
    paddingRight: '20px',
    fontSize: '20'
}

const styles = {
    containerInput: {
        borderRadius: '10px',
        ...containerInput,
    },
    containerInputFocus: {
        ...containerInput,
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        borderBottom: '0px',
        boxShadow: '-2px 0px 10px -10px rgba(0,0,0,0.75)'
    },
    containerResults: {
        border: `2px solid ${lightGray}`,
        borderTop: '0px',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
    },
    result: {
        ...result,
    },
    resultHover: {
        ...result,
        backgroundColor: '#EEE',
        cursor: 'pointer'
    },
    containerDivider: {
        borderLeft: `2px solid ${lightGray}`,
        borderRight: `2px solid ${lightGray}`,
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    divider: {
        border: `1px solid ${lightGray}`,
    }
}

export const Search = () => {
    const [showResults, setShowResults] = React.useState(false);
    const [text, setText] = React.useState('');

    React.useEffect(() => {
        if (text) {
            const timeout = setTimeout(() => {
                setShowResults(true);
            }, 1000);
            return () => {
                clearTimeout(timeout);
            }
        }
    }, [text]);

    return (
        <div>
            <div>
                <input
                    style={showResults ? styles.containerInputFocus : styles.containerInput}
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    type="text" />
                {
                    showResults && 
                    <>
                        <div style={styles.containerDivider}><div style={styles.divider}></div></div>
                        <div style={styles.containerResults}>
                            <Result content={'¿Qué es techo?'} />
                            <Result content={'¿Qué es programa de fomento al trabajo?'} />
                        </div>
                    </>
                }
                
            </div>
        </div>
    );
}

const Result = ({ content }) => {
    const [isHover, setIsHover] = React.useState(false);
    const history = useHistory();
    return (
        <div
            onMouseOut={() => setIsHover(false)}
            onMouseOver={() => setIsHover(true)}
            onClick={() => history.push('/description')}
            style={isHover ? styles.resultHover : styles.result}>{content}</div>
    )
}