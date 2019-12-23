import * as mongoose from 'mongoose'

export const MetricSchema = new mongoose.Schema({
    date:{type:Date, required:true},
    number:{type:Number, required:true},
    

})

const Metric = mongoose.model('Metric',MetricSchema)

export default Metric;
