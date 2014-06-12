//////////////////////////////////////////////////////////////////////////////
// Russell Christopher v1.7 Feb-2013, CSS & Harness modified from Justin Rockwood's examples
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// Local Variables
//////////////////////////////////////////////////////////////////////////////
var serverName = "localhost",
    mainViz, mainWorkbook, newCustomView, dataSources;

// REMEMBER to change the reference to tableau_v8.debug.js in index.html so that 
// it points to the right server


//////////////////////////////////////////////////////////////////////////////
// Initialization
//////////////////////////////////////////////////////////////////////////////




function activityClick(activity) {

    // Respond to clicks in sidebar

    switch (activity.displayName) {
    case "Render Viz":
        renderViz();
        break;
    case "Render Viz with more Options":
        renderVizMoreOptions();
        break;
    case "Dispose viz":
        dispose();
        break;
    case "Hide Viz":
        hideViz();
        break;
    case "Show Viz":
        showViz();
        break;
    case "Show Toolbar":
        showToolbar();
        break;
    case "Hide Toolbar":
        hideToolbar();
        break;
    case "Viz Property: AreToolbarsHidden":
        areToolbarsHidden();
        break;
    case "Viz Property: AreTabsHidden":
        areTabssHidden();
        break;
    case "Download Workbook":
        showDownloadWorkbook();
        break;
    case "Export Crosstab":
        showExportCrosstabDialog();
        break;
    case "Export Data":
        exportData();
        break;
    case "Export Image":
        exportImage();
        break;
    case "Export PDF":
        exportPDF();
        break;
    case "Viz Property: IsHidden":
        getIsVizHidden();
        break;
    case "Viz Property: AreAutomaticUpdatesPaused":
        getAreAutomaticUpdatesPaused();
        break;
    case "Viz Property: ParentElement":
        getParentElement();
        break;
    case "Viz Property: Url":
        getURL();
        break;
    case "Viz Property: Workbook":
        getWorkbook();
        break;
    case "Pause automatic updates":
        pauseAutomaticUpdatesAsync();
        break;
    case "Refresh Data":
        refreshData();
        break;
    case "Resume automatic updates":
        resumeAutomaticUpdates();
        break;
    case "Revert All":
        revertAll();
        break;
    case "Set frame size":
        setFrameSize();
        break;
    case "Show share dialog":
        showShareDialog();
        break;
    case "Toggle automatic updates":
        toggleAutomaticUpdates();
        break;
    case "Activate event listeners":
        activateEventListeners();
        break;
    case "Deactivate event listeners":
        deactivateEventListeners();
        break;
    case "Change Parameter Value Async":
        changeParameterValueAsync();
        break;
    case "Revert all async":
        revertAllAsync();
        break;
    case "Save as custom view named 'test'":
        rememberCustomViewAsync();
        break;
    case "Remove custom view 'test'":
        removeCustomViewAsync();
        break;
    case "Show custom view 'test'":
        showCustomViewAsync();
        break;
    case "Set active view as default":
        setActiveCustomViewAsDefaultAsync();
        break;
    case "WB Property: ActiveCustomView":
        getActiveCustomView();
        break;
    case "WB Property: ActiveSheet":
        getActiveSheet();
        break;
    case "WB Property: Name":
        getName();
        break;
    case "WB Property: Parameters":
        getParametersAsync();
        break;
    case "WB Property: PublishedSheetsInfo":
        getPublishedSheetsInfo();
        break;
    case "Create Custom View":
        customView();
        break;
    case "Save Custom View":
        saveAsync();
        break;
    case "Share Custom View":
        setAdvertised();
        break;
    case "Rename Custom View":
        setName();
        break;
    case "Show Custom View":
        showAsync();
        break;
    case "Set Active Sheet - Range Example":
        activateSheetRange();
        break;
    case "Set Active Sheet - Categorical Example":
        activateSheetCategorical();
        break;
    case "Set Active Sheet - Date Period":
        activateSheetDatePeriod();
        break;
    case "Set Active Sheet - Relative Date":
        activateSheetRelative();
        break;
    case "Apply Hierarchical Filter":
        applyHierarchicalFilterAsync();
        break;
    case "Apply Categorical Filter":
        applyFilterAsync();
        break;
    case "Remove and Add a Categorical Filter":
        applyFilterMoreAsync();
        break;
    case "Apply All to Categorical Filter":
        applyAll();
        break;
    case "Apply Date Period Date Filter":
        applyDatePeriodFilter();
        break;
    case "Apply Range Filter":
        applyRangeFilterAsync();
        break;
    case "Apply Relative Date Filter":
        applyRelativeDateFilterAsync();
        break;
    case "Clear Hierarchical Filter":
        clearHierarchicalFilter();
        break;
    case "Clear Categorical":
        clearCategorical();
        break;
    case "Clear Range Filter":
        clearRangeFilter();
        break;
    case "Clear Relative Date Filter":
        clearRelativeDateFilter();
        break;
    case "Select Marks Inside Dashboard":
        selectMarksInsideDashboard();
        break;
    case "Select Marks":
        selectMarksAsync();
        break;
    case "Select More Marks":
        selectMoreMarksAsync();
        break;
    case "Select Marks using two dimensions":
        selectMarksTwoDimensionsAsync();
        break;
    case "Clear Marks":
        clearMarksAsync();
        break;
    case "Change Size":
        changeSizeAsync();
        break;
    case "Sheet Property: DataSources":
        getDataSourcesAsync();
        break;
    case "Sheet Property: Filters":
        getFiltersAsync();
        break;
    case "Sheet Property: Index":
        sheet_getIndex();
        break;
    case "Sheet Property: IsActive":
        sheet_getIsActive();
        break;
    case "Sheet Property: IsHidden":
        sheet_getIsHidden();
        break;
    case "Sheet Property: Name":
        sheet_getName();
        break;
    case "Sheet Property: Objects":
        sheet_getObjects();
        break;
    case "Sheet Property: ParentDashboard":
        getParentDashboard();
        break;
    case "Sheet Property: Repository Url":
        sheet_getRepositoryUrl();
        break;
    case "Sheet Property: Selected Marks":
        getSelectedMarksAsync();
        break;
    case "Sheet Property: Sheet Type":
        getSheetType();
        break;
    case "Sheet Property: Sheet Size":
        getSize();
        break;
    case "Sheet Property: Workbook":
        sheet_getWorkbook();
        break;
    case "Get Data Source":
        getDataSources();
        break;
    case "Fetch Fields":
        getFields();
        break;
    case "Data Source Property: IsPrimary":
        getIsPrimary();
        break;
    case "Date Source Property: Name":
        dataSourceGetName();
        break;
    case "Get Dashboard Objects":
        getObjects();
        break;
    case "Get Worksheets":
        getWorksheets();
        break;
    case "changeSizeAsync() - Story":
        changeStorySizeAsync();
        break;
    case "activateStoryPointAsync()":
        activateStoryPointAsync();
        break;
    case "activateNextStoryPointAsync()":
        activateNextStoryPointAsync();
        break;
    case "activatePreviousStoryPointAsync()":
        activatePreviousStoryPointAsync();
        break;
    case "revertStoryPointAsync()":
        revertStoryPointAsync();
        break;
    case "Story Property: Name":
        story_getName();
        break;
    case "Story Property: Index":
        story_getIndex();
        break;
    case "Story Property: isActive":
        story_getIsActive();
        break;
    case "Story Property: isHidden":
        story_getIsHidden();
        break;
    case "Story Property: Story Type":
        story_getType();
        break;
    case "Story Property: Story Size":
        getSize();
        break;
    case "Story Property: Url":
        getURL();
        break;
    case "Story Property: Workbook":
        story_getWorkbook();
        break;
    case "Story Property: StoryPointsInfo":
        getStoryPointsInfo();
        break;
    case "Story Property: ActiveStoryPoint":
        getActiveStoryPoint();
        break;
    case "StoryPoint Property - Index":
        storyPoint_getIndexAndCaption();
        break;
    case "StoryPoint Property - Caption":
        storyPoint_getIndexAndCaption();
        break; 
    case "StoryPoint Property - IsActive":
        storyPoint_getIsActive();
        break;
    case "StoryPoint Property - IsUpdated":
        storyPoint_getIsUpdated();
        break; 
     case "StoryPoint Property - ContainedSheet":
        storyPoint_getContainedSheet();
        break;  
     case "StoryPoint Property - ParentStory":
        storyPoint_getParentStory();
        break;
    case "StoryPointInfo Property - Index":
        storyPointInfo_getIndexAndCaption();
        break;
    case "StoryPointInfo Property - Caption":
        storyPointInfo_getIndexAndCaption();
        break; 
    case "StoryPointInfo Property - IsActive":
        storyPointInfo_getIsActive();
        break;
    case "StoryPointInfo Property - IsUpdated":
        storyPointInfo_getIsUpdated();
        break; 
     case "StoryPointInfo Property - ParentStory":
        storyPointInfo_getParentStory();
        break;             
    case "Get Parameters":
        parameters_getParametersAsync();
        break;
    case "Parameter Property: CurrentValue":
        parameters_getCurrentValue();
        break;
    case "Parameter Property: DataType":
        parameters_getDataType();
        break;
    case "Parameter Property: AllowableValuesType":
        parameters_getAllowableValuesType();
        break;
    case "Parameter Property: AllowableValues":
        parameters_getAllowableValues();
        break;
    case "Parameter Property: MinimumValue":
        parameters_getMinMaxValue();
        break;
    case "Parameter Property: MaximumValue":
        parameters_getMinMaxValue();
        break;
    case "Parameter Property: StepSize":
        parameters_getStepSize();
        break;
    case "Parameter Property: DateStepPeriod":
        parameters_getDateStepPeriod();
        break;
    case "Examine Parameter #1":
        parametersDate();
        break;
    case "Examine Parameter #2":
        parametersString();
        break;
    case "Examine Parameter #3":
        parametersNumeric();
        break;
    case "Get Filters":
        getFiltersAsyncAgain();
        break;
    case "Filter Property: Applied Values - #1":
        filterCategoricalAppliedValues();
        break;
    case "Filter Property: Field - #1":
        filterCategoricalField();
        break;
    case "Filter Property: FieldName - #1":
        filterCategoricalFieldName();
        break;
    case "Filter Property: FilterType - #1":
        filterCategoricalFilterType();
        break;
    case "Filter Property: IsExcludeMode - #1":
        filterCategoricalIsExcludeMode();
        break;
    case "Filter Property: Worksheet - #1":
        filterCategoricalWorksheet();
        break;
    case "Filter Property: DomainMinValue - #2":
        filterQuantitativeDomainMinValue();
        break;
    case "Filter Property: DomainMaxValue - #2":
        filterQuantitativeDomainMaxValue();
        break;
    case "Filter Property: MinValue - #2":
        filterQuantitativeMinValue();
        break;
    case "Filter Property: MaxValue - #2":
        filterQuantitativeMaxValue();
        break;
    case "Filter Property: IncludeNullValues - #2":
        filterQuantitativeIncludeNullValues();
        break;
    case "Filter Property: Period - #3":
        filterRelativeDatePeriod();
        break;
    case "Filter Property: Range - #3":
        filterRelativeDateRange();
        break;
    case "Filter Property: RangeN - #3":
        filterRelativeDateRangeN();
        break;
    case "Filter Property: AppliedFieldNames - #4":
        filterHierarchicalAppliedFieldNames();
        break;
    }
}


function renderViz() {

    // Define variables for viz
    var mainVizDiv = $("#mainViz");
    var mainWorkbookUrl = "http://" + serverName + "/views/JavaScriptTarget/Dashboard";
    var mainVizOptions = {
        hideTabs: false,
        hideToolbar: false,
        //toolbarPositon: top  (or "bottom")
        width: mainVizDiv.parent().innerWidth() + "px",
        height: mainVizDiv.parent().innerHeight() + "px",
        onFirstInteractive: function () {
            mainWorkbook = mainViz.getWorkbook();
        }
    };
    //  Create viz
    mainViz = new tableauSoftware.Viz(mainVizDiv[0], mainWorkbookUrl, mainVizOptions);
}

function renderVizMoreOptions() {

    // Define variables for viz
    var mainVizDiv = $("#mainViz");
    var mainWorkbookUrl = "http://" + serverName + "/views/JavaScriptTarget/Dashboard";
    var mainVizOptions = {
        hideTabs: false,
        hideToolbar: false,
        width: mainVizDiv.parent().innerWidth() + "px",
        height: mainVizDiv.parent().innerHeight() + "px",
        //Filter Category field - note NO spaces between multiple filter values. Just a comma
        Category: "Office Supplies,Furniture",
        //Set Top Customers Parameter Value - note wrapping quotes around parameter name since it contains spaces
        "Top Customers": 22,
        onFirstInteractive: function () {
            mainWorkbook = mainViz.getWorkbook();
        }
    };
    //  Create viz
    mainViz = new tableauSoftware.Viz(mainVizDiv[0], mainWorkbookUrl, mainVizOptions);
}


function dispose() {

    if (mainViz === null) {
        alertOrConsole("No Viz has been rendered, so I can't dispose anything");
        return;
    } else {
        mainViz.dispose();
    }
}


function hideViz() {

    if (mainViz === null || mainViz.getIsHidden() === true) {
        alertOrConsole("No Viz has been rendered, or it's already hidden.");
        return;
    } else {
        mainViz.hide();
    }
}


function showViz() {

    if (mainViz === null || mainViz.getIsHidden() === false) {
        alertOrConsole("No Viz has been rendered yet, or it's already visible.");
        return;
    } else {
        mainViz.show();
    }
}


function getIsVizHidden() {
    alertOrConsole(mainViz.getIsHidden());
}


function showToolbar() {

    if (mainViz === null || mainViz.getIsToolbarHidden() === false) {
        alertOrConsole("No Viz has been rendered yet, or toolbar is already visible.");
        return;
    } else {
        mainViz.showToolbar();
    }
}


function hideToolbar() {

    if (mainViz === null || mainViz.getIsToolbarHidden() === true) {
        alertOrConsole("No Viz has been rendered yet, or toolbar is already hidden.");
        return;
    } else {
        mainViz.hideToolbar();
    }
}


function areToolbarsHidden() {
    alertOrConsole(mainViz.getIsToolbarHidden());
}


function showTabsPlease() {

    if (mainViz === null || mainViz.getAreTabsHidden() === false) {
        alertOrConsole("No Viz has been rendered yet, or tabs are already visible.");
        return;
    } else {
        mainViz.showTabs();
    }
}


function hideTabsPlease() {

    if (mainViz === null || mainViz.getAreTabsHidden() === true) {
        alertOrConsole("No Viz has been rendered yet, or tabs are already hidden.");
        return;
    } else {
        mainViz.hideTabs();
        alertOrConsole("hideTabs");
    }
}


function areTabssHidden() {
    alertOrConsole(mainViz.getAreTabsHidden());
}


function showDownloadWorkbook() {
    mainViz.showDownloadWorkbookDialog();
}


function showExportCrosstabDialog() {
    // Select a specific sheet to download as a crosstab
    mainViz.showExportCrossTabDialog("Profit by Subcategory");
}


function exportData() {
    // View the data of a specific sheet in a dashboard
    mainViz.showExportDataDialog("Sales by Date");
}


function exportImage() {
    mainViz.showExportImageDialog();
}

function exportPDF() {
    mainViz.showExportPDFDialog();
}


function getAreAutomaticUpdatesPaused() {
    alertOrConsole(mainViz.getAreAutomaticUpdatesPaused());
}


function getParentElement() {
    alertOrConsole(mainViz.getParentElement());
}


function getURL() {
    alertOrConsole(mainViz.getUrl());
}


function getWorkbook() {
    alertOrConsole(mainViz.getWorkbook().getName());
}

function pauseAutomaticUpdatesAsync() {
    if (mainViz === null) {
        alertOrConsole("No Viz has been rendered");
        return;
    } else {
        mainViz.pauseAutomaticUpdatesAsync();
    }
}

function refreshData() {
    if (mainViz === null) {
        alertOrConsole("No Viz has been rendered");
        return;
    } else {
        mainViz.refreshDataAsync();
    }
}

function resumeAutomaticUpdates() {
    if (mainViz === null) {
        alertOrConsole("No Viz has been rendered");
        return;
    } else {
        mainViz.resumeAutomaticUpdatesAsync();
    }
}

function revertAll() {
    if (mainViz === null) {
        alertOrConsole("No Viz has been rendered");
        return;
    } else {
        mainViz.revertAllAsync();
    }
}

function setFrameSize() {
    if (mainViz === null) {
        alertOrConsole("No Viz has been rendered");
        return;
    } else {
        mainViz.setFrameSize(900, 480);
    }
}

function showShareDialog() {
    if (mainViz === null) {
        alertOrConsole("No Viz has been rendered");
        return;
    } else {
        mainViz.showShareDialog();
    }
}

function toggleAutomaticUpdates() {
    if (mainViz === null) {
        alertOrConsole("No Viz has been rendered");
        return;
    } else {
        mainViz.toggleAutomaticUpdatesAsync();
    }
}

function activateEventListeners() {

    alert("Activating event listeners. Try: selecting marks, creating / loading / deleting custom views, changing filters, changing parameters, switching tabs. When you're tried of pop-ups, Deactivate event listeners");

    mainViz.addEventListener("marksselection", onMarksSelection);
    mainViz.addEventListener("parametervaluechange", onParameterChanged);
    mainViz.addEventListener("filterchange", onFilterChanged);
    mainViz.addEventListener("customviewload", onCustomViewLoaded);
    mainViz.addEventListener("customviewsave", onCustomViewUpdated);
    mainViz.addEventListener("customviewremove", onCustomViewRemoved);
    mainViz.addEventListener("customviewsetdefault", onCustomViewSetDefault);
    mainViz.addEventListener("tabswitch", onTabSwitch);
    mainViz.addEventListener("STORYPOINTSWITCH", onStoryPointSwitch);
}


function onMarksSelection() {
    alertOrConsole('onMarksSelection event');
}

function onParameterChanged() {
    alertOrConsole('onParameterChanged event');
}

function onFilterChanged() {
    alertOrConsole('onFilterChanged event');
}

function onCustomViewLoaded() {
    alertOrConsole('onCustomViewLoaded event');
}

function onCustomViewUpdated() {
    alertOrConsole('onCustomViewUpdated event');
}

function onCustomViewRemoved() {
    alertOrConsole('onCustomViewRemoved event');
}

function onCustomViewSetDefault() {
    alertOrConsole('onCustomViewSetDefault event');
}

function onTabSwitch() {
    alertOrConsole('onTabSwitch event');
}

function  onStoryPointSwitch(event) {
    alertOrConsole("Moved from StoryPoint '" + event.getOldStoryPointInfo().getCaption()  + "' to '" + event.getNewStoryPoint().getCaption() + "'");
}
function deactivateEventListeners() {


    mainViz.removeEventListener("marksselection", onMarksSelection);
    mainViz.removeEventListener("parametervaluechange", onParameterChanged);
    mainViz.removeEventListener("filterchange", onFilterChanged);
    mainViz.removeEventListener("customviewload", onCustomViewLoaded);
    mainViz.removeEventListener("customviewsave", onCustomViewUpdated);
    mainViz.removeEventListener("customviewremove", onCustomViewRemoved);
    mainViz.removeEventListener("customviewsetdefault", onCustomViewSetDefault);
    mainViz.removeEventListener("tabswitch", onTabSwitch);
    mainViz.removeEventListener("STORYPOINTSWITCH", onStoryPointSwitch);
    alert("Listeners deactivated");
}

function changeParameterValueAsync() {

    mainWorkbook = mainViz.getWorkbook();
    // Set Top Customers parameter to 10
    mainWorkbook.changeParameterValueAsync('Top Customers', 10).then(function () {
        alertOrConsole("'Top Customers' parameter set to 10");
    });
}

// In this next Custom View section, I'm a bit lazy - not implementing promises. Sue me.

function revertAllAsync() {
    mainWorkbook = mainViz.getWorkbook();
    mainWorkbook.revertAllAsync();

}

function rememberCustomViewAsync() {
    mainWorkbook = mainViz.getWorkbook();
    mainWorkbook.rememberCustomViewAsync("Test");
}

function removeCustomViewAsync() {
    mainWorkbook = mainViz.getWorkbook();
    mainWorkbook.removeCustomViewAsync("Test");

}

function showCustomViewAsync() {
    mainWorkbook = mainViz.getWorkbook();
    mainWorkbook.showCustomViewAsync("Test");

}

function setActiveCustomViewAsDefaultAsync() {
    mainWorkbook = mainViz.getWorkbook();
    mainWorkbook.setActiveCustomViewAsDefaultAsync();
}

function getActiveCustomView() {
    mainWorkbook = mainViz.getWorkbook();
    var activeSheet = mainWorkbook.getActiveCustomView();
    if (activeSheet === null) {
        alertOrConsole('A *Custom View* is not currently active. Switch to one, then try again');
    } else {
        alertOrConsole("Sheet : " + activeSheet.getName() + "\nOwner: " + activeSheet.getOwnerName() + "\nCustom URL: " + activeSheet.getUrl());
    }
}

function getActiveSheet() {
    var foo = mainViz.getWorkbook().getActiveSheet().getName();
    alertOrConsole("Sheet : " + foo);
}

function getName() {
    mainWorkbook = mainViz.getWorkbook();
    alertOrConsole("Workbook Name : " + mainWorkbook.getName());
}

function getParametersAsync() {
    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (params) {
        alertOrConsole("This workbook contains " + params.length + " parameters");
    };
    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.getParametersAsync().then(onSuccess, onError);

}


function getPublishedSheetsInfo() {
    mainWorkbook = mainViz.getWorkbook();
    var activeSheet = mainWorkbook.getPublishedSheetsInfo();
    var sheetArray = [];
    $.each(activeSheet, function (i, value) {
        sheetArray.push(value.getName());
    });

    alertOrConsole("Worksheet & Dashboard count: " + activeSheet.length + "\nNames: " + sheetArray.join(", "));
}

function customView() {
    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (view) {
        newCustomView = view;
    };
    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.rememberCustomViewAsync("Test2").then(onSuccess, onError);
}

function saveAsync() {

    // I'm being lazy and and assuming rememberCsutomViewAsync (above) was just called and that 
    // newCustomView is defined with a valid value
    newCustomView.saveAsync().then(function () {
        alertOrConsole("The URL for this new view is :" + newCustomView.getUrl());
    });
}

function setAdvertised() {

    // Allows other people to see this custom view   
    newCustomView.setAdvertised(true);
    //Re-Save
    newCustomView.saveAsync();
}

function setName() {

    newCustomView.setName("Renamed Test 2");
    //Re-Save
    newCustomView.saveAsync();
}

function showAsync() {

    mainWorkbook = mainViz.getWorkbook();
    mainWorkbook.showCustomViewAsync("Test2");
}

function activateSheetRange() {
    mainWorkbook = mainViz.getWorkbook().activateSheetAsync('Sales by Date');
}

function activateSheetCategorical() {
    mainWorkbook = mainViz.getWorkbook().activateSheetAsync('Profit by Subcategory');
}

function activateSheetDatePeriod() {
    mainWorkbook = mainViz.getWorkbook().activateSheetAsync('Shipped by Date');
}

function activateSheetRelative() {
    mainWorkbook = mainViz.getWorkbook().activateSheetAsync('Profit by Date');
}

function applyHierarchicalFilterAsync() {
    alertOrConsole("Sorry, this workbook isn't cube-connected, so I'm not implemented");
}

function applyFilterAsync() {
    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (sheet) {
        // Replace any current filter on Category with "Technology"
        sheet.applyFilterAsync("Category", "Technology", "REPLACE");
    };
    var onError = function (err) {
        alertOrConsole(err);
    };

    mainWorkbook.activateSheetAsync("Profit by Subcategory").then(onSuccess, onError);
}

function applyFilterMoreAsync() {
    mainWorkbook = mainViz.getWorkbook();
    // Assumes that Profit by Subcategory sheet is already active
    var newSheet = mainWorkbook.getActiveSheet();
    var onSuccess = function () {
        // Remove 'Technology' selection from the quick filter
        newSheet.applyFilterAsync("Category", "Technology", "REMOVE");

    };
    var onError = function (err) {
        alertOrConsole(err);
    };

    // ADD 'Furniture' and 'Office Supplies' selections to the quick filter, then 
    // call onSuccess function (above) to remove 'Technology'. It would be smarter 
    // just to use "REPLACE" below, but this is about showing options, not being smart.

    newSheet.applyFilterAsync("Category", ["Furniture", "Office Supplies"], "ADD").then(onSuccess, onError);
}

function applyAll() {
    mainWorkbook = mainViz.getWorkbook();
    // Assumes that Profit by Subcategory sheet is already active
    var newSheet = mainWorkbook.getActiveSheet();
    var onSuccess = function () {};
    // Select ALL members of this filter
    newSheet.applyFilterAsync("Category", "", "ALL");
}

function applyRangeFilterAsync() {
    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (sheet) {

        var beginDate = new Date("October 15, 2010");
        var endDate = new Date("December 1, 2011");
        // Specify range to be used by applyRangeFilterAsync
        var filterOptions = {
            min: beginDate,
            max: endDate
        };
        // Apply filter
        sheet.applyRangeFilterAsync("Order Date", filterOptions);

    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    // Make sure we're on 'Sales by Date' sheet, then apply a filter to it
    var newSheet = mainWorkbook.activateSheetAsync('Sales by Date').then(onSuccess, onError);

}

function applyRelativeDateFilterAsync() {

    mainWorkbook = mainViz.getWorkbook();


    var onSuccess = function (sheet) {
        // Change anchor date to Dec 1, and switch filter from "Last 4 years" to "lastRange376 days"
        sheet.applyRelativeDateFilterAsync(
            "Ship Date", {
                anchorDate: new Date("12/1/2012"),
                periodType: tableauSoftware.PeriodType.DAY,
                rangeType: tableauSoftware.DateRangeType.LASTN,
                rangeN: 376
            });
    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };


    var newSheet = mainWorkbook.activateSheetAsync('Shipped by Date').then(onSuccess, onError);
}

function clearHierarchicalFilter() {

    alertOrConsole("Not implemented");
}

function clearCategorical() {

    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (sheet) {
        sheet.clearFilterAsync("Category");
    };
    var onError = function (err) {
        alertOrConsole(err);
    };

    mainWorkbook.activateSheetAsync("Profit by Subcategory").then(onSuccess, onError);


}

function clearRangeFilter() {

    var onSuccess = function (sheet) {
        sheet.clearFilterAsync("Order Date");
    };
    var onError = function (err) {
        alertOrConsole(err);
    };

    mainWorkbook.activateSheetAsync("Sales by Date").then(onSuccess, onError);
}

function clearRelativeDateFilter() {

    var onSuccess = function (sheet) {
        sheet.clearFilterAsync("Ship Date");
    };
    var onError = function (err) {
        alertOrConsole(err);
    };

    mainWorkbook.activateSheetAsync("Shipped by Date").then(onSuccess, onError);
}

function selectMarksInsideDashboard() {

    // First, access the workbook. Ask for the active sheet (getActiveSheet), which will be sheet "Dashboard"
    // (assuming that the Dashboard sheet has focus). Ask the Dashboard sheet for the the collection
    // of worksheets it contains (getWorksheets). Finally, pull "Profit v. Sales" from that collection and assign it 
    // to a variable
    mainWorkbook = mainViz.getWorkbook();
    var worksheet = mainViz.getWorkbook().getActiveSheet().getWorksheets().get("Profit v Sales");

    worksheet.selectMarksAsync("Category", "Technology", "REPLACE");
}

function selectMarksAsync() {

    var onSuccess = function (newSheet) {
        newSheet.selectMarksAsync("Category", "Technology", "REPLACE");
    };
    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.activateSheetAsync('Profit v Sales').then(onSuccess, onError);
}

function selectMoreMarksAsync() {

    mainWorkbook = mainViz.getWorkbook();
    // Assumes Profit v. Sales sheet is still active from prevous activity.
    var newSheet = mainWorkbook.getActiveSheet();
    newSheet.selectMarksAsync("Category", "Office Supplies", "ADD");
}

function selectMarksTwoDimensionsAsync() {

    mainWorkbook = mainViz.getWorkbook();
    // Assumes Profit v. Sales sheet is still active from prevous activity.
    var newSheet = mainWorkbook.getActiveSheet();
    newSheet.clearSelectedMarksAsync().then(function () {
        // Create object to pass in multiple value pairs
        var myMarks = [
        new tableauSoftware.Mark([
        new tableauSoftware.Pair("Category", ["Technology"]),
        new tableauSoftware.Pair("Customer", ["Emily Phan", "Deborah Brumfield"])])];
        newSheet.selectMarksAsync(myMarks, tableauSoftware.FilterUpdateType.ADD);
    });

}

function clearMarksAsync() {

    // Assumes Profit v. Sales sheet is still active from prevous activity.
    var newSheet = mainWorkbook.getActiveSheet();
    newSheet.clearSelectedMarksAsync();

}

function changeSizeAsync() {

    // This sample is using a worksheet of type Dashboard because we only allow setting
    // an EXACT size on that type of worksheet. If we wanted a behavior of AUTOMATIC, 
    // we could use any sheet in the workbook. 

    mainWorkbook = mainViz.getWorkbook();

    mainWorkbook.activateSheetAsync("Dashboard").then(function (sheet) {
        // Create sheetSize options
        var sheetSize = {
            behavior: tableauSoftware.SheetSizeBehavior.EXACTLY,
            minSize: {
                width: 250,
                height: 150
            },
            maxSize: {
                width: 250,
                height: 150
            }
        };

        // Resize sheet
        sheet.changeSizeAsync(sheetSize);
    });
}


function getDataSourcesAsync() {

    var onSuccess = function (dataSources) {
        alertOrConsole("The datasource for this worksheet is named " + dataSources[0].getName());
    };

    var onError = function (err) {
        alertOrConsole("Whoops.");
    };

    mainViz.getWorkbook().activateSheetAsync('Sales by Date').then(function () {
        mainViz.getWorkbook().getActiveSheet().getDataSourcesAsync().then(onSuccess, onError);
    });
}

function getFiltersAsync() {

    // Get first worksheet in book
    var newSheet = mainWorkbook.getPublishedSheets()[0];

    var onSuccess = function (filters) {
        alertOrConsole("This worksheet has " + filters.length + " filter(s) associated with it.");
    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    // Switch to first worksheet in book, then get filters
    newSheet.activateAsync().then(function () {
        newSheet.getFiltersAsync().then(onSuccess, onError);
    });
}

function sheet_getIndex() {

    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (sheet) {
        alertOrConsole("The zero-based position of the 'Profit by Subcategory' sheet in the workbook is " + sheet.getIndex());
    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.activateSheetAsync("Profit by Subcategory").then(onSuccess, onError);

}

function sheet_getIsActive() {

    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (sheet) {
        alertOrConsole("Is the worksheet 'Sales by Date' inside the Dashboard currently active?:  " + sheet.getWorksheets().get("Sales by Date").getIsActive());
    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.activateSheetAsync("Dashboard").then(onSuccess, onError);
}

function sheet_getIsHidden() {

    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (sheet) {
        var msg = "";
        var sheet = mainWorkbook.getActiveSheet();
        // Get sheets in dashboard
        var dashboardWorksheets = sheet.getWorksheets();
        // Walk sheets and see if any are hidden
        for (i = 0; i < dashboardWorksheets.length; i++) {
            msg = msg + "Sheet '" + dashboardWorksheets[i].getName() + "': isHidden = " + dashboardWorksheets[i].getIsHidden() + "\n\r";
        }
        alertOrConsole(msg);

    };

    mainWorkbook.activateSheetAsync("Dashboard").then(onSuccess, onError);


}

function sheet_getName() {

    mainWorkbook = mainViz.getWorkbook();
    var activeSheet = mainWorkbook.getActiveSheet();

    alertOrConsole("The index of the current active worksheet is " + activeSheet.getIndex() + ".\nThe name of the sheet is " + activeSheet.getName());
}

function sheet_getObjects() {

    // Switch to the dashboard since we can only do getObjects() against a sheet of type DASHBOARD
    mainWorkbook = mainViz.getWorkbook();

    mainWorkbook.activateSheetAsync("Dashboard").then(function (activeSheet) {
        var dashboardObjects = activeSheet.getObjects();
        alertOrConsole("The worksheet named 'Dashboard' contains " + dashboardObjects.length + " objects");
    });

}

function getParentDashboard() {

    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (sheet) {
        alertOrConsole("The parent dashboard of 'Sales by Date' inside the Dashboard currently active?:  " + sheet.getWorksheets().get("Sales by Date").getParentDashboard().getName());
    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.activateSheetAsync("Dashboard").then(onSuccess, onError);

}


// Helper functions to deal with promise callback for getSelectedMarksAsync() 

function onSuccess(result) {

    var selectedMarks = result;
    var alertOutput = "";
    if (selectedMarks.length === 0) alertOrConsole("selectedMarks: empty list");
    else {
        // Each selected Mark
        $.each(selectedMarks, function (i, mark) {
            alertOutput = alertOutput + "selectedMarks:\n";
            // Each Mark has Pairs
            $.each(mark.getPairs(), function (j, pair) {
                alertOutput = alertOutput + "  " + (pair.fieldName) + ": " + pair.value;
            });
            alertOutput = alertOutput + "\n";
        });
    }
    alertOrConsole(alertOutput);
}

function onError(message) {
    alertOrConsole("Error: '" + message + "'");
}

function getSelectedMarksAsync() {

    mainWorkbook = mainViz.getWorkbook();
    // Assumes we're sitting on "Profit v Sales" sheet
    var newSheet = mainWorkbook.getActiveSheet();
    // See above for promise defintion of onSuccess, onError
    newSheet.getSelectedMarksAsync().then(onSuccess, onError);
}

function getSheetType() {

    mainWorkbook = mainViz.getWorkbook();
    alertOrConsole(mainWorkbook.getActiveSheet().getName() + "'s type is " + mainWorkbook.getActiveSheet().getSheetType());

}

function getSize() {

    mainWorkbook = mainViz.getWorkbook();
    var outputText;
    var sheet = mainWorkbook.getActiveSheet();
    // get SheetSize object 
    var sizeInfo = sheet.getSize();
    var behavior = sizeInfo.behavior;
    var maxSize = sizeInfo.maxSize || "NA";
    var minSize = sizeInfo.minSize || "NA";

    outputText = "Size behavior: " + behavior + "\n";
    if (maxSize != "NA") {
        outputText = outputText + "maxSize - Height: " + maxSize.height + ", Width: " + maxSize.width + "\n";
    } else {
        outputText = outputText + "maxSize - Height: NA, Width: NA\n";
    }
    if (minSize != "NA") {
        outputText = outputText + "minSize - Height: " + minSize.height + ", Width: " + minSize.width + "\n";
    } else {
        outputText = outputText + "minSize - Height: NA, Width: NA\n";
    }


    alertOrConsole(outputText);
}

function sheet_getWorkbook() {

    mainWorkbook = mainViz.getWorkbook();
    alertOrConsole("This sheet belongs to the " + mainWorkbook.getActiveSheet().getWorkbook().getName() + " workbook.");

}



function getDataSources() {


    var newSheet = mainWorkbook.getPublishedSheetsInfo();

    var onSuccess = function (foundDataSources) {
        dataSources = foundDataSources;
        alertOrConsole("Complete. Now try fetching fields");
    };
    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    // Find active sheet, ensure it is NOT of Type Dashboard
    mainWorkbook = mainViz.getWorkbook();
    var sheet = mainWorkbook.getActiveSheet();

    if (sheet.getSheetType() == tableauSoftware.SheetType.DASHBOARD) {
        alertOrConsole("Choose a sheet of type WORKSHEET, not of type DASHBOARD");
    } else { // Get the data source
        sheet.getDataSourcesAsync().then(onSuccess, onError);
    }



}

function getFields() {

    // I'm lazy - assumes the dataSources variable has already been populated by the function above
    var fields = dataSources[0].getFields();
    var outputString = "";
    $.each(fields, function (i, field) {
        outputString = outputString + field.getName() + ": " + field.getRole() + ", " + field.getAggregation() + "\n";
    });
    alertOrConsole(outputString);
}

function getIsPrimary() {

    alertOrConsole(dataSources[0].getIsPrimary());
}

function dataSourceGetName() {

    alertOrConsole(dataSources[0].getName());
}

function getObjects() {

    // Switch to the dashboard since we can only do getObjects() against a sheet of type DASHBOARD
    mainWorkbook = mainViz.getWorkbook();


    mainWorkbook.activateSheetAsync("Dashboard").then(function (activeSheet) {
        var dashboardObjects = activeSheet.getObjects();
        var outputString = "";
        $.each(dashboardObjects, function (i, dashboardObject) {
            // Not bothering with getSize() since it's been demonstrated elsewhere
            outputString = outputString + dashboardObject.getObjectType();
            if (dashboardObject.getObjectType() == "WORKSHEET") {
                outputString = outputString + ": " + dashboardObject.getWorksheet().getName();
            }
            outputString = outputString + "- xpos: " + dashboardObject.getPosition().x + " ypos: " + dashboardObject.getPosition().y + "\n";
        });
        alertOrConsole(outputString);

    });

}

function getWorksheets() {

    // Switch to the dashboard since we can only do getWorksheets() against a sheet of type DASHBOARD
    mainWorkbook = mainViz.getWorkbook();


    var onSuccess = function (activeSheet) {
        alertOrConsole(" There are " + activeSheet.getWorksheets().length + " worksheets in this dashboard");
    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };


    mainWorkbook.activateSheetAsync("Dashboard").then(onSuccess, onError);

}

function setActiveSheetDashboard() {

    // Switch to the dashboard since we can only do getWorksheets() against a sheet of type DASHBOARD
    mainWorkbook = mainViz.getWorkbook();


    var onSuccess = function (activeSheet) {
        alertOrConsole(" There are " + activeSheet.getWorksheets().length + " worksheets in this dashboard");
    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.activateSheetAsync("Dashboard").then(onSuccess, onError);

}

function changeStorySizeAsync() {

    // This sample is using a worksheet of type Story because we only allow setting
    // an EXACT size on worksheets of type Dashboard and Story. If we wanted a behavior of AUTOMATIC, 
    // we could use any sheet in the workbook. 

    mainWorkbook = mainViz.getWorkbook();

    mainWorkbook.activateSheetAsync("Story").then(function (sheet) {
        // Create sheetSize options
        var sheetSize = {
            behavior: tableauSoftware.SheetSizeBehavior.EXACTLY,
            minSize: {
                width: 250,
                height: 150
            },
            maxSize: {
                width: 250,
                height: 150
            }
        };

        // Resize sheet
        sheet.changeSizeAsync(sheetSize);
    });
}

function activateStoryPointAsync() {
    mainWorkbook = mainViz.getWorkbook();

    mainWorkbook.activateSheetAsync("Story").then(function (sheet) {
        // Activate 2nd story point
        sheet.activateStoryPointAsync(1);
    });
}

function activateNextStoryPointAsync() {
    mainWorkbook = mainViz.getWorkbook();

    mainWorkbook.activateSheetAsync("Story").then(function (sheet) {
        // Activate Next Point
        sheet.activateNextStoryPointAsync();
    });
}

function activatePreviousStoryPointAsync() {
    mainWorkbook = mainViz.getWorkbook();

    mainWorkbook.activateSheetAsync("Story").then(function (sheet) {
        // Activate Previous story point
        sheet.activatePreviousStoryPointAsync();
    });
}


function revertStoryPointAsync() {
    mainWorkbook = mainViz.getWorkbook();

    mainWorkbook.activateSheetAsync("Story").then(function (sheet) {
        // get the index of the active StoryPoint and use it to revert any changes to that storypoint
        storyPoint = sheet.getActiveStoryPoint();
        sheet.revertStoryPointAsync(sheet.getActiveStoryPoint().getIndex());
    });
}

function story_getName() {
    mainWorkbook = mainViz.getWorkbook();

    mainWorkbook.activateSheetAsync("Story").then(function (sheet) {
        // Return Name of Story
        alertOrConsole("The name of this story is '" + sheet.getName() + "'");
    });
}

function story_getIndex() {

    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (sheet) {
        alertOrConsole("The zero-based position of the 'Story' sheet in the workbook is " + sheet.getIndex());
    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.activateSheetAsync("Story").then(onSuccess, onError);

}

function story_getIsActive() {

    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (sheet) {
        alertOrConsole("Is the Story 'Story' currently active?:  " + sheet.getIsActive());
    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.activateSheetAsync("Story").then(onSuccess, onError);
}

function story_getIsHidden() {

    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (sheet) {
        var msg = "";
        var sheet = mainWorkbook.getActiveSheet();
        msg = msg + "Sheet '" + sheet.getName() + "': isHidden = " + sheet.getIsHidden();

        alertOrConsole(msg);

    };

    mainWorkbook.activateSheetAsync("Story").then(onSuccess, onError);

}


function story_getType() {

    mainWorkbook = mainViz.getWorkbook();
    alertOrConsole(mainWorkbook.getActiveSheet().getName() + "'s type is " + mainWorkbook.getActiveSheet().getSheetType());
}


function story_getWorkbook() {
    mainWorkbook = mainViz.getWorkbook();
    alertOrConsole(mainWorkbook.getActiveSheet().getName() + "'s parent workbook is " + mainWorkbook.getName());
}


function getStoryPointsInfo() {
    mainWorkbook = mainViz.getWorkbook();
    // Assign StoryPoints to an array, then check the length of the array
    storypoints = mainWorkbook.getActiveSheet().getStoryPointsInfo();
    alertOrConsole(storypoints.length + ' StoryPoints retreived from this Story.');

}

function getActiveStoryPoint() {
    // Get the Active StoryPoint, then check its index.
    alertOrConsole("StoryPoint " + mainWorkbook.getActiveSheet().getActiveStoryPoint().getIndex() + " (zero-based) is active in this Story.");
}


function storyPoint_getIndexAndCaption()
{
    // Make sure we're sitting on a Story, just in case:
    
    mainWorkbook.activateSheetAsync("Story").then(function (sheet) {
        alertOrConsole("StoryPoint '" + mainWorkbook.getActiveSheet().getActiveStoryPoint().getCaption() + "' is currently active in this Story, and is at index "  + mainWorkbook.getActiveSheet().getActiveStoryPoint().getIndex());
    });
}

function storyPoint_getIsActive()
{
    alertOrConsole("Is StoryPoint '" + mainWorkbook.getActiveSheet().getActiveStoryPoint().getCaption() + "' currently active in this Story?: " + mainWorkbook.getActiveSheet().getActiveStoryPoint().getIsActive());
}

function storyPoint_getIsUpdated()
{
    alertOrConsole("isUpdated Property for StoryPoint '" + mainWorkbook.getActiveSheet().getActiveStoryPoint().getCaption() + "' is: " + mainWorkbook.getActiveSheet().getActiveStoryPoint().getIsUpdated());
}

function storyPoint_getContainedSheet()
{
    alertOrConsole("The sheet contained by StoryPoint '" + mainWorkbook.getActiveSheet().getActiveStoryPoint().getCaption() + "' is '" + mainWorkbook.getActiveSheet().getActiveStoryPoint().getContainedSheet().getName() + "'");
}

function storyPoint_getParentStory()
{
    alertOrConsole("The Story which contains StoryPoint '" + mainWorkbook.getActiveSheet().getActiveStoryPoint().getCaption() + "' is named '" + mainWorkbook.getActiveSheet().getActiveStoryPoint().getParentStory().getName() + "'");
}

function storyPointInfo_getIndexAndCaption()
{
    // Make sure we're sitting on a Story, just in case:
    
    mainWorkbook.activateSheetAsync("Story").then(function (sheet) {
        // get the an array of StoryPointInfo objects
        storyPoints = sheet.getStoryPointsInfo();
        // String building
        var msg="";
        // Walk the array
        $.each(storyPoints, function (i, value) {
            msg = msg + "Storypoint '" + value.getCaption() + "' in Story '" + value.getParentStory().getName();
            msg = msg + " is index " + value.getIndex() + ".\n\r";
        });
        alertOrConsole(msg);
    });
    
}

function storyPointInfo_getIsActive()
{
    
    storyPoints = mainWorkbook.getActiveSheet().getStoryPointsInfo();
        // String building
        var msg="";
        // Walk the array
        $.each(storyPoints, function (i, value) {
            msg = msg + "Storypoint '" + value.getCaption() 
            msg = msg + (value.getIsActive() === true ? "' IS ACTIVE \r\n" : "' is inactive \r\n")
        });
        alertOrConsole(msg);
    
}

function storyPointInfo_getIsUpdated()
{
    
    storyPoints = mainWorkbook.getActiveSheet().getStoryPointsInfo();
        // String building
        var msg="";
        // Walk the array
        $.each(storyPoints, function (i, value) {
            msg = msg + "Storypoint '" + value.getCaption() 
            msg = msg + (value.getIsUpdated() === true ? "' has not been updated. \n\r" : "' has been updated! \n\r")
        });
        alertOrConsole(msg);
    
}

function storyPointInfo_getParentStory()
{
    
    storyPoints = mainWorkbook.getActiveSheet().getStoryPointsInfo();
        // String building
        var msg="";
        // Walk the array
        $.each(storyPoints, function (i, value) {
            msg = msg + "The parent Story of StoryPoint '" + value.getCaption()
            msg = msg + "' is '" + value.getParentStory().getName() + "'\n\r";
        });
        alertOrConsole(msg);
    
}

function parameters_getParametersAsync() {

    mainWorkbook = mainViz.getWorkbook();
    var onSuccess = function (params) {
        alertOrConsole("This workbook contains " + params.length + " parameters");
    };
    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.getParametersAsync().then(onSuccess, onError);
}

function parameters_getCurrentValue() {

    //Numeric Parameter

    mainWorkbook = mainViz.getWorkbook();
    var onSuccess = function (params) {
        var outputText = "Name: ";
        // Param Name
        outputText = outputText + params.get("Top Customers").getName() + "\n\n";

        // Current Values:
        var dataValue = params.get("Top Customers").getCurrentValue();

        // Or use dataValue.formattedValue instead of dateValue.value
        outputText = outputText + "\nCurrent Value: " + dataValue.value;

        alertOrConsole(outputText);

    };
    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.getParametersAsync().then(onSuccess, onError);

}

function parameters_getDataType() {

    //Numeric Parameter

    mainWorkbook = mainViz.getWorkbook();
    var onSuccess = function (params) {
        var outputText = "Name: ";
        // Param Name
        outputText = outputText + params.get("Top Customers").getName() + "\n\n";

        // Data Type:
        outputText = outputText + "\nData Type: " + params.get("Top Customers").getDataType();

        alertOrConsole(outputText);

    };
    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.getParametersAsync().then(onSuccess, onError);

}

function parameters_getAllowableValuesType() {

    //Numeric Parameter

    mainWorkbook = mainViz.getWorkbook();
    var onSuccess = function (params) {
        var outputText = "Name: ";
        // Param Name
        outputText = outputText + params.get("Top Customers").getName() + "\n\n";

        //  Allowable Type:
        outputText = outputText + "\nAllowable Values Type: " + params.get("Top Customers").getAllowableValuesType();

        alertOrConsole(outputText);

    };
    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.getParametersAsync().then(onSuccess, onError);

}

function parameters_getAllowableValues() {

    //String Parameter

    mainWorkbook = mainViz.getWorkbook();
    var onSuccess = function (params) {
        var outputText = "Name: ";
        // Param Name
        outputText = outputText + params.get("Cute Animals").getName() + "\n\n";

        var foo = params.get("Top Customers");
        // Allowable Values
        var allValues = [];
        $.each(params.get("Cute Animals").getAllowableValues(), function (Value, i) {
            //use .value or .formattedValue of the DataValue object represented by variable i
            var str = i.value;
            allValues.push(str);
        });
        outputText = outputText + "Allowable Values: " + allValues.join(", ");

        alertOrConsole(outputText);

    };
    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.getParametersAsync().then(onSuccess, onError);


}

function parameters_getMinMaxValue() {

    //Numeric Parameter 

    mainWorkbook = mainViz.getWorkbook();
    var onSuccess = function (params) {
        var outputText = "Name: ";
        // Param Name
        outputText = outputText + params.get("Top Customers").getName() + "\n\n";

        //  minValues/maxValue
        outputText = outputText + "\nminValue: " + params.get("Top Customers").getMinValue().value;
        outputText = outputText + "\nmaxValue: " + params.get("Top Customers").getMaxValue().value;


        alertOrConsole(outputText);

    };
    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.getParametersAsync().then(onSuccess, onError);


}

function parameters_getStepSize() {

    //Numeric Parameter only

    mainWorkbook = mainViz.getWorkbook();
    var onSuccess = function (params) {
        var outputText = "Name: ";
        // Param Name
        outputText = outputText + params.get("Top Customers").getName() + "\n\n";

        //  StepSize
        outputText = outputText + "\nStepSize: " + params.get("Top Customers").getStepSize();

        alertOrConsole(outputText);

    };
    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.getParametersAsync().then(onSuccess, onError);

}

function parameters_getDateStepPeriod() {

    // Date Parameter

    mainWorkbook = mainViz.getWorkbook();
    var onSuccess = function (params) {
        var outputText = "Name: ";
        // Param Name
        outputText = outputText + params.get("Dates Dates Dates").getName() + "\n\n";

        // This parameter is a date. Use date-specific property
        outputText = outputText + "\nStep Period: " + params.get("Dates Dates Dates").getDateStepPeriod();

        alertOrConsole(outputText);

    };
    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.getParametersAsync().then(onSuccess, onError);

}

function parametersDate() {

    // Date Parameter

    mainWorkbook = mainViz.getWorkbook();
    var onSuccess = function (params) {
        var outputText = "Name: ";
        // Param Name
        outputText = outputText + params.get("Dates Dates Dates").getName() + "\n\n";
        // Param Data Type
        outputText = outputText + "Date Type: " + params.get("Dates Dates Dates").getDataType();

        // This parameter is a date. Use date-specific property
        // Determine if this date parameter steps by Year, Quarter, Month, Week, etc... 
        outputText = outputText + "\nStep Period: " + params.get("Dates Dates Dates").getDateStepPeriod();

        // Step Size
        outputText = outputText + "\nStep Size: " + params.get("Dates Dates Dates").getStepSize();
        // Allowable Value Type (All, List, Range)
        outputText = outputText + "\nAllowable Value Type: " + params.get("Dates Dates Dates").getAllowableValuesType();

        //Minimum, Maximum, and Current Values:
        // Use .formattedValue property of returned DataObject
        outputText = outputText + "\nMin & Max Values, Current Value: " + params.get("Dates Dates Dates").getMinValue().formattedValue + ", " + params.get("Dates Dates Dates").getMaxValue().formattedValue + ", " + params.get("Dates Dates Dates").getCurrentValue().formattedDate;

        var foo = params.get("Dates Dates Dates").getAllowableValues();


        alertOrConsole(outputText);

    };
    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.getParametersAsync().then(onSuccess, onError);

}

function parametersString() {

    //String Parameter

    mainWorkbook = mainViz.getWorkbook();
    var onSuccess = function (params) {
        var outputText = "Name: ";
        // Param Name
        outputText = outputText + params.get("Cute Animals").getName() + "\n\n";
        // Param Data Type
        outputText = outputText + "Date Type: " + params.get("Cute Animals").getDataType();

        outputText = outputText + "\nAllowable Value Type: " + params.get("Cute Animals").getAllowableValuesType();

        // Current Values:
        outputText = outputText + "\nCurrent Value: " + params.get("Cute Animals").getCurrentValue().value;

        // Allowable Values
        var allAnimals = [];
        $.each(params.get("Cute Animals").getAllowableValues(), function (animal, i) {
            // use .value property of each DataValue object
            var str = i.value;
            allAnimals.push(str);
        });
        outputText = outputText + "\nAllowable Values: " + allAnimals.join(", ");

        alertOrConsole(outputText);

    };
    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.getParametersAsync().then(onSuccess, onError);

}

function parametersNumeric() {

    //Numeric Parameter

    mainWorkbook = mainViz.getWorkbook();
    var onSuccess = function (params) {
        var outputText = "Name: ";
        // Param Name
        outputText = outputText + params.get("Top Customers").getName() + "\n\n";
        // Param Data Type
        outputText = outputText + "Date Type: " + params.get("Top Customers").getDataType();

        outputText = outputText + "\nAllowable Value Type: " + params.get("Top Customers").getAllowableValuesType();

        // Current Values:
        outputText = outputText + "\nCurrent Value: " + params.get("Top Customers").getCurrentValue().formattedValue;

        var foo = params.get("Top Customers");

        // Step Size, Min & Max Values
        outputText = outputText + "\nStep Size, Min & Max Values: " + params.get("Top Customers").getStepSize() + ", " + params.get("Top Customers").getMinValue().value + "-" + params.get("Top Customers").getMaxValue().value;

        alertOrConsole(outputText);

    };
    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.getParametersAsync().then(onSuccess, onError);

}

function getFiltersAsyncAgain() {

    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (filters) {
        alertOrConsole("This worksheet has " + filters.length + " filter(s) associated with it.");
    };
    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    // Launch Shipped by Date sheet, then call getFilterAsync and show the number of filters in the onSuccess promise 
    mainWorkbook.activateSheetAsync("Shipped by Date").then(function (newSheet) {
        newSheet.getFiltersAsync().then(onSuccess, onError);
    });
}

function filterCategoricalAppliedValues() {

    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (filters) {
        var outputText = "";
        var selectedCategories = [];
        // filter[0] = Category Filter
        $.each(filters[0].getAppliedValues(), function (filter, i) {
            // use .value property of each DataValue object
            var str = i.value;
            selectedCategories.push(str);
        });
        outputText = outputText + "Applied Values: " + selectedCategories.join(", ");

        alertOrConsole(outputText);
    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.activateSheetAsync("Shipped by Date").then(function (newSheet) {
        newSheet.getFiltersAsync().then(onSuccess, onError);
    });


}

function filterCategoricalField() {

    // Step 3: Parse returned field
    var fieldOnSuccess = function (field) {
        var outputText = "Field Name: " + field.getName();
        outputText = outputText + "\nAggregation: " + field.getAggregation();
        outputText = outputText + "\nData Source: " + field.getDataSource().getName();
        outputText = outputText + "\nRole: " + field.getRole();
        alertOrConsole(outputText);
    };

    var fieldOnError = function (err) {
        alertOrConsole("Whoops");
    };

    // Step 2: getFields
    var onSuccess = function (filters) {
        filters[0].getFieldAsync().then(fieldOnSuccess, fieldOnError);
    };
    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    // Step 1: Get worksheet, call getFiltersAsynch
    mainWorkbook.activateSheetAsync("Shipped by Date").then(function (newSheet) {
        newSheet.getFiltersAsync().then(onSuccess, onError);
    });

}

function filterCategoricalFieldName() {

    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (filters) {
        alertOrConsole(filters[0].getFieldName());
    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.activateSheetAsync("Shipped by Date").then(function (newSheet) {
        newSheet.getFiltersAsync().then(onSuccess, onError);
    });
}

function filterCategoricalFilterType() {

    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (filters) {
        alertOrConsole(filters[0].getFilterType());
    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.activateSheetAsync("Shipped by Date").then(function (newSheet) {
        newSheet.getFiltersAsync().then(onSuccess, onError);
    });

}

function filterCategoricalIsExcludeMode() {

    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (filters) {
        alertOrConsole(filters[0].getIsExcludeMode());
    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.activateSheetAsync("Shipped by Date").then(function (newSheet) {
        newSheet.getFiltersAsync().then(onSuccess, onError);
    });

}

function filterCategoricalWorksheet() {

    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (filters) {
        alertOrConsole(filters[0].getWorksheet().getName());
    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.activateSheetAsync("Shipped by Date").then(function (newSheet) {
        newSheet.getFiltersAsync().then(onSuccess, onError);
    });
}

function filterQuantitativeDomainMinValue() {

    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (filters) {
        alertOrConsole(filters[1].getDomainMin().formattedValue);
    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.activateSheetAsync("Shipped by Date").then(function (newSheet) {
        newSheet.getFiltersAsync().then(onSuccess, onError);
    });

}

function filterQuantitativeDomainMaxValue() {

    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (filters) {
        alertOrConsole(filters[1].getDomainMax().formattedValue);
    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.activateSheetAsync("Shipped by Date").then(function (newSheet) {
        newSheet.getFiltersAsync().then(onSuccess, onError);
    });
}

function filterQuantitativeMinValue() {

    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (filters) {
        alertOrConsole(filters[1].getMin().formattedValue);
    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.activateSheetAsync("Shipped by Date").then(function (newSheet) {
        newSheet.getFiltersAsync().then(onSuccess, onError);
    });
}

function filterQuantitativeMaxValue() {

    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (filters) {
        alertOrConsole(filters[1].getMax().formattedValue);
    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.activateSheetAsync("Shipped by Date").then(function (newSheet) {
        newSheet.getFiltersAsync().then(onSuccess, onError);
    });
}

function filterQuantitativeIncludeNullValues() {

    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (filters) {
        alertOrConsole(filters[1].getIncludeNullValues());
    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.activateSheetAsync("Shipped by Date").then(function (newSheet) {
        newSheet.getFiltersAsync().then(onSuccess, onError);
    });

}

function filterRelativeDatePeriod() {

    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (filters) {
        alertOrConsole(filters[2].getPeriod());
    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.activateSheetAsync("Shipped by Date").then(function (newSheet) {
        newSheet.getFiltersAsync().then(onSuccess, onError);
    });

}

function filterRelativeDateRange() {

    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (filters) {
        alertOrConsole(filters[2].getRange());
    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.activateSheetAsync("Shipped by Date").then(function (newSheet) {
        newSheet.getFiltersAsync().then(onSuccess, onError);
    });

}

function filterRelativeDateRangeN() {

    mainWorkbook = mainViz.getWorkbook();

    var onSuccess = function (filters) {
        alertOrConsole(filters[2].getRangeN());
    };

    var onError = function (err) {
        alertOrConsole("Whoops");
    };

    mainWorkbook.activateSheetAsync("Shipped by Date").then(function (newSheet) {
        newSheet.getFiltersAsync().then(onSuccess, onError);
    });
}

function filterHierarchicalAppliedFieldNames() {

    alertOrConsole("Sorry, this filter type needs a cube behind it, and I don't have one for you.");

    // I didn't test this code because I'm lazy.


    //	mainWorkbook = mainViz.getWorkbook();

    //	var onSuccess = function(filters) {
    //    	 alertOrConsole(filters[].getAppliedFieldNames().join(", "));
    //     };
    //	
    //	var	onError =  function (err) { alertOrConsole("Whoops"); };
    //	
    //	mainWorkbook.activateSheetAsync("Shipped by Date").then (function (newSheet) {
    //		newSheet.getFiltersAsync().then(onSuccess, onError);
    //	});


}