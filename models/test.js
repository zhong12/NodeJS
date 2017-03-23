/**
 * Created by zhongjing on 2015/12/29 0029.
 */
var mongoose = require("mongoose");  //  顶会议用户组件
var Schema = mongoose.Schema;    //  创建模型
var testsScheMa = new Schema({
    id: String,
    name: String,
    age: String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联
exports.tests = mongoose.model('tests', testsScheMa); //  与users集合关联
exports.tests1 = mongoose.model('tests');