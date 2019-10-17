// const title = React.createElement(
//     'h1',
//     {id: 'main-title', title: 'This is a title'},
//     'My react element'
// );


// const desc = React.createElement(
    //     'p',
    //     null,
    //     'Created react node and rendered it into the DOM'
    // );
    
const title = 'React Element'
const desc = 'Created react node and rendered it into the DOM'

const header = (
    <header>
        <h1>{title}</h1>
        <p> {desc} </p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);