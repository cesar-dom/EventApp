const pipe =
    (...fns) =>
        (value) =>
            fns.reduce((val, fn) => fn(val), value);

export default pipe;
