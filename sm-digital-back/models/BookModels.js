import db from "../database/db.js";
import { DataTypes } from "sequelize"; //borrar el types de ser necesario

const BookModel = db.define('libros', {
    titulo: { type: DataTypes.STRING },
    sinopsis: { type: DataTypes.STRING },
    autor: { type: DataTypes.STRING },
    precio: { type: DataTypes.NUMBER },
})

export default BookModel