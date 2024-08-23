import { Handler } from "aws-lambda";
import * as crypto from "crypto-js"; // Importa la biblioteca desde la Layer

export const hello: Handler = async (event: any) => {
  const randomHash = crypto.lib.WordArray.random(16).toString(); // Genera un hash aleatorio

  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function ejecuted successfully!",
        input: event,
        hash: randomHash, // Incluye el hash en la respuesta
      },
      null,
      2
    ),
  };

  return response;
};
