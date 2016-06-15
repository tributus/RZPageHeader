#RuteZangada Page Header Widget
Page/view Header with breadcrumb

##Overview
This component display a page or view header with title and breadcrumb  

##Install
Use bower to install this component:

```
bower install rutezangada-page-header
```

Default parameters:
```
{
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
```