import React from 'react';


const Button = (text, callback) =>(
    <Button type='button' onClick={callback}>
                {text}
    </Button>
)

export default Button;