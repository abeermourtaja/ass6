const logRepository=require('./log.repository.js');
const createLogCollectionService=async()=>{
    await logRepository.createLogCollection();
    console.log('author collection created successfully');
};
const insertLogService=async(log)=>{
    await logRepository.insertLog(log);
}
module.exports={createLogCollectionService,insertLogService}