import dynamodb from "../services/dynamoService";
import joi from "joi";
import { PREFIX_NAME } from "../config";

const DepartamentoModel = dynamodb.define("departamento", {
  hashKey: "DepartamentoId",
  timestamps: false,
  schema: {
    DepartamentoId: dynamodb.types.uuid(),
    Nombre: joi.string(),
    numAgentes: joi.number(),
  },
  tableName: `Departamento${PREFIX_NAME}`
  });

  dynamodb.createTables((err) => {
    if (err) {
      console.log("Error creating tables: ", err);
    } else {
      console.log("Tables have been created");
    }
  })

  export default DepartamentoModel;
