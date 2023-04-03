import type { Handler, HandlerEvent } from "@netlify/functions"
import axios from "axios"
import { config } from "dotenv"
config()

const handler: Handler = async (event: HandlerEvent) => {
     try {
          await axios.post(
               `https://api.jgrtowy.xyz/netlify?key=${process.env.NETLIFY_KEY}`,
               {
                    eventType: "deploy-failed",
                    eventBody: JSON.parse(event.body || "{}"),
               },
               {
                    headers: {
                         "Content-Type": "Application/json",
                    },
               }
          )
     } catch (e) {
          return {
               statusCode: 500,
          }
     }

     return {
          statusCode: 200,
     }
}

export { handler }
