const models = require('../../../../models');

exports.save = (req,res,next)=> {
    let info = {};
    info.store_id = req.body.store_id;
    info.tableNum = req.body.tableNum;
    info.time = req.body.time;
    info.book_id = req.body.book_id;
    info.mem_id = req.body.mem_id;
    info.menu = req.body.menu;
    info.price = req.body.price;

    var t
    var Use;
    
    var ob = {};

    models.sequelize.transaction().then(function(transaction){
        t= transaction;
        
        if(info.time == "AM_00시00분"){
            return models.booktime.update({AM_00시00분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 0;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "AM_00시30분"){
            return models.booktime.update({AM_00시30분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 30;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "AM_01시00분"){
            return models.booktime.update({AM_01시00분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 100;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "AM_01시30분"){
            return models.booktime.update({AM_01시30분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 130;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "AM_02시00분"){
            return models.booktime.update({AM_02시00분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 200;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "AM_02시30분"){
            return models.booktime.update({AM_02시30분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 230;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "AM_03시00분"){
            return models.booktime.update({AM_03시00분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 300;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "AM_03시30분"){
            return models.booktime.update({AM_03시30분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 330;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "AM_04시00분"){
            return models.booktime.update({AM_04시00분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 400;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "AM_04시30분"){
            return models.booktime.update({AM_04시30분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 430;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "AM_05시00분"){
            return models.booktime.update({AM_05시00분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 500;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "AM_05시30분"){
            return models.booktime.update({AM_05시30분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 530;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "AM_06시00분"){
            return models.booktime.update({AM_06시00분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 600;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "AM_06시30분"){
            return models.booktime.update({AM_06시30분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 630;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "AM_07시00분"){
            return models.booktime.update({AM_07시00분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 700;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "AM_07시30분"){
            return models.booktime.update({AM_07시30분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 730;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "AM_08시00분"){
            return models.booktime.update({AM_08시30분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 830;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "AM_09시00분"){
            return models.booktime.update({AM_09시00분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 900;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "AM_09시30분"){
            return models.booktime.update({AM_09시30분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 930;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "AM_10시00분"){
            return models.booktime.update({AM_10시00분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 1000;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "AM_10시30분"){
            return models.booktime.update({AM_10시30분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 1030;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "AM_11시00분"){
            return models.booktime.update({AM_11시00분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 1100;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "AM_11시30분"){
            return models.booktime.update({AM_11시30분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 1130;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "PM_12시00분"){
            return models.booktime.update({PM_12시00분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 1200;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "PM_12시30분"){
            return models.booktime.update({PM_12시30분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 1230;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "PM_01시00분"){
            return models.booktime.update({PM_01시00분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 1300;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "PM_01시30분"){
            return models.booktime.update({PM_01시30분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 1330;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "PM_02시00분"){
            return models.booktime.update({PM_02시00분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 1400;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "PM_02시30분"){
            return models.booktime.update({PM_02시30분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 1430;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "PM_03시00분"){
            return models.booktime.update({PM_03시00분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 1500;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "PM_03시30분"){
            return models.booktime.update({PM_03시30분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 1530;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "PM_04시00분"){
            return models.booktime.update({PM_04시00분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 1600;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "PM_04시30분"){
            return models.booktime.update({PM_04시30분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 1630;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "PM_05시00분"){
            return models.booktime.update({PM_05시00분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 1700;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "PM_05시30분"){
            return models.booktime.update({PM_05시30분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 1730;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "PM_06시00분"){
            return models.booktime.update({PM_06시00분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 1800;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "PM_06시30분"){
            return models.booktime.update({PM_06시30분 : true},
                    {where : {book_id : info.book_id},transaction : t})
                    .then((result)=>{ //result 필요 x 
                        var num = 1830;
                       return models.list.create({
                            time : num,
                            book_id : info.book_id,
                            mem_id : info.mem_id,
                            menu : info.menu,
                            price : info.price,
                            tableNum :info.tableNum,
                            store_id :info.store_id
                        },{transaction : t}).then((list)=>{
                            ob.pret02 = pretty02(list.dataValues,info.tableNum);
    
                         return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                                ob.pret01 = pretty01(listall);
                           })
                        })
                    }).then(()=>{return t.commit()}).then(()=>{
                        
                         req.pret01 = ob.pret01;
                         req.pret02 = ob.pret02;
                        req.store_id = info.store_id;
                        next();
                    }).catch((err)=>{
                        t.rollback();
                    })
        }
        if(info.time == "PM_07시00분"){
        return models.booktime.update({PM_07시00분 : true},
                {where : {book_id : info.book_id},transaction : t})
                .then((result)=>{ //result 필요 x 
                    var num = 1900;
                   return models.list.create({
                        time : num,
                        book_id : info.book_id,
                        mem_id : info.mem_id,
                        menu : info.menu,
                        price : info.price,
                        tableNum :info.tableNum,
                        store_id :info.store_id
                    },{transaction : t}).then((list)=>{
                        ob.pret02 = pretty02(list.dataValues,info.tableNum);

                     return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                            ob.pret01 = pretty01(listall);
                       })
                    })
                }).then(()=>{return t.commit()}).then(()=>{
                    
                     req.pret01 = ob.pret01;
                     req.pret02 = ob.pret02;
                    req.store_id = info.store_id;
                    next();
                }).catch((err)=>{
                    t.rollback();
                })
    }
    if(info.time == "PM_07시30분"){
        return models.booktime.update({PM_07시30분 : true},
                {where : {book_id : info.book_id},transaction : t})
                .then((result)=>{ //result 필요 x 
                    var num = 1930;
                   return models.list.create({
                        time : num,
                        book_id : info.book_id,
                        mem_id : info.mem_id,
                        menu : info.menu,
                        price : info.price,
                        tableNum :info.tableNum,
                        store_id :info.store_id
                    },{transaction : t}).then((list)=>{
                        ob.pret02 = pretty02(list.dataValues,info.tableNum);

                     return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                            ob.pret01 = pretty01(listall);
                       })
                    })
                }).then(()=>{return t.commit()}).then(()=>{
                    
                     req.pret01 = ob.pret01;
                     req.pret02 = ob.pret02;
                    req.store_id = info.store_id;
                    next();
                }).catch((err)=>{
                    t.rollback();
                })
    }
    if(info.time == "PM_08시00분"){
        return models.booktime.update({PM_08시00분 : true},
                {where : {book_id : info.book_id},transaction : t})
                .then((result)=>{ //result 필요 x 
                    var num = 2000;
                   return models.list.create({
                        time : num,
                        book_id : info.book_id,
                        mem_id : info.mem_id,
                        menu : info.menu,
                        price : info.price,
                        tableNum :info.tableNum,
                        store_id :info.store_id
                    },{transaction : t}).then((list)=>{
                        ob.pret02 = pretty02(list.dataValues,info.tableNum);

                     return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                            ob.pret01 = pretty01(listall);
                       })
                    })
                }).then(()=>{return t.commit()}).then(()=>{
                    
                     req.pret01 = ob.pret01;
                     req.pret02 = ob.pret02;
                    req.store_id = info.store_id;
                    next();
                }).catch((err)=>{
                    t.rollback();
                })
    }
    if(info.time == "PM_08시30분"){
        return models.booktime.update({PM_08시30분 : true},
                {where : {book_id : info.book_id},transaction : t})
                .then((result)=>{ //result 필요 x 
                    var num = 2030;
                   return models.list.create({
                        time : num,
                        book_id : info.book_id,
                        mem_id : info.mem_id,
                        menu : info.menu,
                        price : info.price,
                        tableNum :info.tableNum,
                        store_id :info.store_id
                    },{transaction : t}).then((list)=>{
                        ob.pret02 = pretty02(list.dataValues,info.tableNum);

                     return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                            ob.pret01 = pretty01(listall);
                       })
                    })
                }).then(()=>{return t.commit()}).then(()=>{
                    
                     req.pret01 = ob.pret01;
                     req.pret02 = ob.pret02;
                    req.store_id = info.store_id;
                    next();
                }).catch((err)=>{
                    t.rollback();
                })
    }
    if(info.time == "PM_09시00분"){
        return models.booktime.update({PM_09시00분 : true},
                {where : {book_id : info.book_id},transaction : t})
                .then((result)=>{ //result 필요 x 
                    var num = 2100;
                   return models.list.create({
                        time : num,
                        book_id : info.book_id,
                        mem_id : info.mem_id,
                        menu : info.menu,
                        price : info.price,
                        tableNum :info.tableNum,
                        store_id :info.store_id
                    },{transaction : t}).then((list)=>{
                        ob.pret02 = pretty02(list.dataValues,info.tableNum);

                     return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                            ob.pret01 = pretty01(listall);
                       })
                    })
                }).then(()=>{return t.commit()}).then(()=>{
                    
                     req.pret01 = ob.pret01;
                     req.pret02 = ob.pret02;
                    req.store_id = info.store_id;
                    next();
                }).catch((err)=>{
                    t.rollback();
                })
    }
    if(info.time == "PM_09시30분"){
        return models.booktime.update({PM_09시30분 : true},
                {where : {book_id : info.book_id},transaction : t})
                .then((result)=>{ //result 필요 x 
                    var num = 2130;
                   return models.list.create({
                        time : num,
                        book_id : info.book_id,
                        mem_id : info.mem_id,
                        menu : info.menu,
                        price : info.price,
                        tableNum :info.tableNum,
                        store_id :info.store_id
                    },{transaction : t}).then((list)=>{
                        ob.pret02 = pretty02(list.dataValues,info.tableNum);

                     return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                            ob.pret01 = pretty01(listall);
                       })
                    })
                }).then(()=>{return t.commit()}).then(()=>{
                    
                     req.pret01 = ob.pret01;
                     req.pret02 = ob.pret02;
                    req.store_id = info.store_id;
                    next();
                }).catch((err)=>{
                    t.rollback();
                })
    }
    if(info.time == "PM_10시00분"){
        return models.booktime.update({PM_10시00분 : true},
                {where : {book_id : info.book_id},transaction : t})
                .then((result)=>{ //result 필요 x 
                    var num = 2200;
                   return models.list.create({
                        time : num,
                        book_id : info.book_id,
                        mem_id : info.mem_id,
                        menu : info.menu,
                        price : info.price,
                        tableNum :info.tableNum,
                        store_id :info.store_id
                    },{transaction : t}).then((list)=>{
                        ob.pret02 = pretty02(list.dataValues,info.tableNum);

                     return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                            ob.pret01 = pretty01(listall);
                       })
                    })
                }).then(()=>{return t.commit()}).then(()=>{
                    
                     req.pret01 = ob.pret01;
                     req.pret02 = ob.pret02;
                    req.store_id = info.store_id;
                    next();
                }).catch((err)=>{
                    t.rollback();
                })
    }
    if(info.time == "PM_10시30분"){
        return models.booktime.update({PM_10시30분 : true},
                {where : {book_id : info.book_id},transaction : t})
                .then((result)=>{ //result 필요 x 
                    var num = 2230;
                   return models.list.create({
                        time : num,
                        book_id : info.book_id,
                        mem_id : info.mem_id,
                        menu : info.menu,
                        price : info.price,
                        tableNum :info.tableNum,
                        store_id :info.store_id
                    },{transaction : t}).then((list)=>{
                        ob.pret02 = pretty02(list.dataValues,info.tableNum);

                     return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                            ob.pret01 = pretty01(listall);
                       })
                    })
                }).then(()=>{return t.commit()}).then(()=>{
                    
                     req.pret01 = ob.pret01;
                     req.pret02 = ob.pret02;
                    req.store_id = info.store_id;
                    next();
                }).catch((err)=>{
                    t.rollback();
                })
    }
    if(info.time == "PM_11시00분"){
        return models.booktime.update({PM_11시00분 : true},
                {where : {book_id : info.book_id},transaction : t})
                .then((result)=>{ //result 필요 x 
                    var num = 2300;
                   return models.list.create({
                        time : num,
                        book_id : info.book_id,
                        mem_id : info.mem_id,
                        menu : info.menu,
                        price : info.price,
                        tableNum :info.tableNum,
                        store_id :info.store_id
                    },{transaction : t}).then((list)=>{
                        ob.pret02 = pretty02(list.dataValues,info.tableNum);

                     return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                            ob.pret01 = pretty01(listall);
                       })
                    })
                }).then(()=>{return t.commit()}).then(()=>{
                    
                     req.pret01 = ob.pret01;
                     req.pret02 = ob.pret02;
                    req.store_id = info.store_id;
                    next();
                }).catch((err)=>{
                    t.rollback();
                })
    }
    if(info.time == "PM_11시30분"){
        return models.booktime.update({PM_11시30분 : true},
                {where : {book_id : info.book_id},transaction : t})
                .then((result)=>{ //result 필요 x 
                    var num = 2330;
                   return models.list.create({
                        time : num,
                        book_id : info.book_id,
                        mem_id : info.mem_id,
                        menu : info.menu,
                        price : info.price,
                        tableNum :info.tableNum,
                        store_id :info.store_id
                    },{transaction : t}).then((list)=>{
                        ob.pret02 = pretty02(list.dataValues,info.tableNum);

                     return  models.list.findAll({where:{store_id : info.store_id}, order :[['tableNum','ASC']],transaction : t}).then((listall)=>{
                            ob.pret01 = pretty01(listall);
                       })
                    })
                }).then(()=>{return t.commit()}).then(()=>{
                    
                     req.pret01 = ob.pret01;
                     req.pret02 = ob.pret02;
                    req.store_id = info.store_id;
                    next();
                }).catch((err)=>{
                    t.rollback();
                })
    }
})



    function pretty01(list){
        var time = new Date();
        var currenthour = time.getHours();
        var currentmin = time.getMinutes();
        var currentTime = currenthour*100+currentmin;// 24h 기준으로 2400 이런식으로 저장
        var result = [];
        for(var n = 0 ;n < list.length;n++){
        if((currentTime - list[n].dataValues.time)<0){ //현재시간 이후의 주문들
                var ob ={};
                ob.mem_id = list[n].dataValues.mem_id;
                ob.tableNum = list[n].dataValues.tableNum; 
                ob.time = list[n].dataValues.time;
                var hour = parseInt(ob.time /100);
                var min = ob.time % 100;
                var log = "테이블 " + ob.tableNum + "에  "+ hour + "시 " + min +"분   "+ ob.mem_id +" 손님 예약 " 
                result[n] = log;
            }
        }
        return result;
    }
    
    function pretty02(list,tableNum){
        var result;
            var ob = {};
            ob.tableNum =tableNum;
            ob.menu = list.menu;
            ob.price = list.price;
            ob.mem_id = list.mem_id;

            var log = "테이블 " + ob.tableNum + "에  "+ ob.mem_id +" 손님 "+ ob.menu + "예약 총 가격 : "+ob.price 
            result=log;
        
        return result;
    }

}