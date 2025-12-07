const Error = ({ error, children }) => {
    if (error) {
        error.then(errMsg => {
            console.log(errMsg)
        })
    }

    return (
        <section className="error">
            <div className="container">{children}</div>
        </section>
    );
};

export default Error;
