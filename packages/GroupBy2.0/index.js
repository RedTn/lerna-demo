const { addObjectProperty } =  require("myradaddon");

module.exports.callGroupBy = () => {
    const init = {
        "data": "Hello World",
        "version": "2.0"
    };
    return addObjectProperty(init);
};