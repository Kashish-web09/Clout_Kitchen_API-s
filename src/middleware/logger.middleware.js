import { body } from "express-validator";
import winston from "winston";

const logger=winston.createLogger({
    level:'info',
    format:winston.format.json(),
    defaultMeta:{service:'user-service'},
    transports:[
        new winston.transports.File({
            filename:'log.txt'
        })
    ]
});

const loggerMiddleware =  (req, res, next) => {

    try {


            const logData ={
                method:req.method,
                url:req.url,
                body:req.body,
                time:new Date().toISOString()
            };

logger.info(logData);        

        next();

    } catch (error) {

        next(error);
    }
}

export default loggerMiddleware;