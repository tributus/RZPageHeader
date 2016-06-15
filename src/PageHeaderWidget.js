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
            pageSubTitle:"This is the subtitle",
            displaySubTitle:true,
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
        sb.appendFormat('    <h1 class="{1}">{0}</h1>',$this.params.pageTitle,$this.params.ui.innerClass);
        if($this.params.displaySubTitle){
            sb.appendFormat('    <small>{0}</small>',$this.params.pageSubTitle);
        }
        renderBreadcrumb(sb);
        sb.appendFormat('</div>');
        $("#" + target).html(sb.toString());
    };
    
    var renderBreadcrumb = function(sb){
        if($this.params.displayBreadcrumb && $this.params.breadCrumbData !==undefined && $this.params.breadCrumbData.length > 0){
            sb.appendFormat('<div class="ui breadcrumb {0}">',$this.params.ui.breadcrumbAdditionalCSSClass);
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
        }
    }
    
});