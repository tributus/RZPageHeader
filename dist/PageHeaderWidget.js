/**
 * Created by anderson.santos on 13/06/2016.
 */
rz.widgets.RZPageHeaderWidgetHelpers = {
    PageHeadertInterface:[
        "setTitle",
        "getTitle",
        "setSubtitle",
        "getSubtitle",
        "getBreadcrumbData",
        "changeBreadcrumb"
    ]
};

/**
 * Created by anderson.santos on 13/06/2016.
 */
rz.widgets.TableWidget = ruteZangada.widget("rz-page-header", rz.widgets.RZPageHeaderWidgetHelpers.PageHeadertInterface, [], function () {
    var $this = this;
    this.initialize = function (p, initialized) {
        var elementID = generateRandomID(8);
        var defaultParams = {
            elementID : elementID,
            pageTitle:"Page Title",
            pageSubtitle:"This is the subtitle",
            displaySubtitle:true,
            displayBreadcrumb:true,
            breadCrumbData:[
                {name:"home"}
            ],
            ui: {
                widgetMainCssClass:"ui block header with-right-aligned-breadcrumb",
                innerClass:"ui header light",
                breadcrumbAdditionalCSSClass:"",
                breadcrumbDivider:" /"
            }
        };
        $this.params = $.extend(true, {}, defaultParams, p);
        initialized();
    };

    this.render = function (target) {
        var sb = new StringBuilder();
        $this.baseID = $this.params.elementID + "_pageheader";
        sb.appendFormat('<div id="{0}" class="{1} rzpageheader">',$this.baseID,$this.params.ui.widgetMainCssClass);
        sb.appendFormat('    <h1 id="{2}_title" class="{1}">{0}</h1>',$this.params.pageTitle,$this.params.ui.innerClass,$this.baseID);
        if($this.params.displaySubtitle){
            sb.appendFormat('    <small id="{1}_subtitle">{0}</small>',$this.params.pageSubtitle,$this.baseID);
        }
        renderBreadcrumb(sb);
        sb.appendFormat('</div>');
        $("#" + target).html(sb.toString());
    };
    
    var renderBreadcrumb = function(sb){
        var isUpdating =  false;
        if(sb===undefined){
            isUpdating = true;
            sb = new StringBuilder();
        }
        if($this.params.displayBreadcrumb && $this.params.breadCrumbData !==undefined && $this.params.breadCrumbData.length > 0){
            sb.appendFormat('<div id="{1}_bc" class="ui breadcrumb {0}">',$this.params.ui.breadcrumbAdditionalCSSClass,$this.baseID);
            var length = $this.params.breadCrumbData.length;
            var current = 0;
            $this.params.breadCrumbData.forEach(function(item){
                var isLast = ++current==length;
                sb.appendFormat('    <{3} {2} class="{0}section">{1}</{3}>',(isLast)?"active ":"",
                    item.name,
                    (item.url !==undefined)?' href="*"'.replace("*",item.url):"",
                    (item.url !==undefined)?"a":"span"
                );
                if(!isLast){
                    sb.appendFormat('    <div class="divider">{0}</div>',$this.params.ui.breadcrumbDivider);
                }
            });
            sb.appendFormat('</div>');
            if(isUpdating){
                var id = "#*_bc".replace("*",$this.baseID);
                $(id).replaceWith(sb.toString());
            }
        }
    };

    this.setTitle = function(t){
        $this.params.pageTitle = t;
        $("#" + $this.baseID + "_title").text(t);
    };
    
    this.getTitle = function(){
        return $this.params.pageTitle;
    };

    this.setSubtitle = function(t){
        $this.params.pageSubtitle = t;
        $("#" + $this.baseID + "_subtitle").text(t);
    };

    this.getSubtitle = function(){
        return $this.params.pageSubtitle;
    };

    this.getBreadcrumbData = function(){
        return $this.params.breadCrumbData;
    };

    this.changeBreadcrumb = function(data){
        $this.params.breadCrumbData = data;
        renderBreadcrumb();
    };

});