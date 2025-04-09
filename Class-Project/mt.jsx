function mt(){

    const randomString = "hELLoWOrLD";
    const [text, setText] = useState(randomString);
    const formattedString = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

    return(
        <>
            <h1>Original String: {randomString}</h1>
            <h2>Formatted String: {formattedString}</h2>
        </>
    );
}

export default mt;