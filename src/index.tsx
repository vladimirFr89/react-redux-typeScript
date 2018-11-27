import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Hello from './Components/Hello'

ReactDOM.render(
    <Hello name="TypeScript" enthusiasmLevel={100}/>,
    document.getElementById('root') as HTMLElement
);
