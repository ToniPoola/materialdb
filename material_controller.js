// CREATE
const api_get_material = (req, res, next) => {
let data = req.body;
res.send(JSON.stringify(data));

};

// READ

const api_get_materials = (req, res, next) => {
    res.send(JSON.stringify([]));
};
// UPDATE

// DELETE


// EXPORTS
module,exports.api_post_material = api_post_material;
module.exports.api_get_materials = api_get_materials;
