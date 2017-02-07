defineClass("ViewController:<UITableViewDelegate,UITableViewDataSource>",['myTableView'],{
            
            init: function(){
            self = self.super().init()
            self.setTableView()
            return self;
            },
            
            viewDidLoad: function(){
            self.super().viewDidLoad();
            self.loadSubviews();
            },
            
            loadSubviews: function()
            {
            require('UIView,UIColor')
            var view = UIView.alloc().initWithFrame({x:100,y:100,width:100,height:100})
            var redColor = UIColor.redColor();
            view.setBackgroundColor(redColor);
            self.view().addSubview(view);
            
            self.myTableView = require('UITableView').alloc().initWithFrame_style(self.view().frame(),0);
            self.myTableView.setDelegate(self);
            self.myTableView.setDataSource(self);
            self.view().addSubview(self.myTableView);
            },
            
            tableView_numberOfRowsInSection: function(tableView,section)
            {
            return 10;
            },
            
            tableView_cellForRowAtIndexPath: function(tableView,indexPath)
            {
            var cell = tableView.dequeueReusableCellWithIdentifier("cell")
            if(!cell)
            {
            cell = require('UITableViewCell').alloc().initWithStyle_reuseIdentifier(0,"cell")
            }
            cell.textLabel().setText("cell名字")
            return cell
            },
            
            tableView_didSelectRowAtIndexPath: function(tableView,indexPath)
            {
            tableView.deselectRowAtIndexPath_animated(indexPath,YES)
            },
            
            tableView_heightForRowAtIndexPath: function(tableView,indexPath)
            {
            return 60
            },
            
            },{})
