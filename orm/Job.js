/**
 * Created by ruichengping on 2017/4/12.
 */
const Sequelize=require('sequelize');
const sequelize=require('../config/sequelize.config');
const Company=require('../orm/Company');
const Job=sequelize.define('job',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    jobName:{
        type:Sequelize.STRING
    },
    companyId:{
        type:Sequelize.INTEGER,
    },
    hrId:{
        type:Sequelize.INTEGER
    },
    provinceId:{
        type:Sequelize.INTEGER
    },
    cityId:{
        type:Sequelize.INTEGER
    },
    countryId:{
        type:Sequelize.INTEGER
    },
    createTime:{
        type:Sequelize.DATE
    },
    address:{
        type:Sequelize.STRING
    },
    experience:{
        type:Sequelize.INTEGER
    },
    salary:{
        type:Sequelize.INTEGER
    },
    education:{
        type:Sequelize.INTEGER
    },
    jobNature:{
        type:Sequelize.INTEGER
    },
    briefIntroduction:{
        type:Sequelize.STRING
    },
    description:{
        type:Sequelize.STRING
    },
    status:{
        type:Sequelize.INTEGER
    }
},{
    freezeTableName:true,
    tableName:'yige_job',
    timestamps: false
});
module.exports=Job;