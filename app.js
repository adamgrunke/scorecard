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
    
console.log(title)
const title = <h1>React Element</h1>
const desc = <p>Created react node and rendered it into the DOM </p>

const header = React.createElement(
    'header',
    null,
    title,
    desc
);

ReactDOM.render(
    header,
    document.getElementById('root')
);