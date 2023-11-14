var pool = require('./bd');

async function getNovedades(){
    var query = "select * from productos";
    var rows = await pool.query(query);
    return rows;
}

async function insertProducto(obj){
    try{
        var query = "insert into productos set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteNovedadById(id){
    var query = "delete from productos where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getNovedadesById(id) {
    var query = "select * from productos where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarNovedadesById(obj, id) {
    try {
        var query = "update productos set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {getNovedades, insertProducto, deleteNovedadById,
 getNovedadesById, modificarNovedadesById}