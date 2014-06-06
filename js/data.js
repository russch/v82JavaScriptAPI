//////////////////////////////////////////////////////////////////////////////
// Data
//////////////////////////////////////////////////////////////////////////////

var sideBarData = [
  {
    displayName: "Start Here.",
    activities: [
      {
        displayName: "Render Viz",
        color: "#231F20",
		describe: "To begin, you MUST render a viz. So, start here."
      },
	  {
        displayName: "Render Viz with more Options",
        color: "#231F20",
		describe: "Render a viz with a filter and parameter selection in place"
      }

    ]
  },
  {
    displayName: "Viz Class",
    activities: [
      {
        displayName: "Dispose viz",
        color: "#002261",
		describe: "Clear out the current viz being displayed"
      },
	  {
        displayName: "Download Workbook",
        color: "#002261",
		describe: "Download the workbook you are viewing"
      },
	  {
        displayName: "Export Crosstab",
        color: "#002261",
		describe: "Broken in b7: Doesn't allow an export of a worksheet inside a dashboard like it should"
      },
	  {
        displayName: "Export Data",
        color: "#002261",
		describe: "Launches View Data dialog for 'Sales by Date' view"
      },
	  {
        displayName: "Export Image",
        color: "#002261",
		describe: "Exports the the active sheet as an image"
      },
	  {
        displayName: "Export PDF",
        color: "#002261",
		describe: "Exports the the active sheet as as a PDF"
      },
	  {
        displayName: "Hide Viz",
        color: "#002261",
		describe: "If a viz has been rendered and is currently visible, hide it"
      },
	  {
        displayName: "Pause automatic updates",
        color: "#002261",
		describe: "Pause automatic updates - just like on the toolbar"
      },
	  {
        displayName: "Refresh Data",
        color: "#002261",
		describe: "Refresh Data - just like on the toolbar"
      },
	  {
        displayName: "Resume automatic updates",
        color: "#002261",
		describe: "Resume updates - just like on the toolbar"
      },
	  {
        displayName: "Revert All",
        color: "#002261",
		describe: "Revert the viz - just like on the toolbar"
      },
	  {
        displayName: "Set frame size",
        color: "#002261",
		describe: "Change the frame size (to a smaller size, in this case)"
      },
	  {
        displayName: "Show share dialog",
        color: "#002261",
		describe: "Make the Share Dialog appear"
      },
	  {
        displayName: "Show Viz",
        color: "#002261",
		describe: "If a viz and rendered but hidden, show it"
      },

	  {
        displayName: "Toggle automatic updates",
        color: "#002261",
		describe: "Toggle automatic updates - like on the Toolbar"
      },
	  { 
        displayName: "Viz Property: AreAutomaticUpdatesPaused",
        color: "#002261",
		describe: "Check to see if autoamatic updates are currently paused"
      },
	  { 
        displayName: "Viz Property: AreToolbarsHidden",
        color: "#002261",
		describe: "Check to see if the Toolbar is hidden"
      },
	  {
        displayName: "Viz Property: AreTabsHidden",
        color: "#002261",
		describe: "Check to see if Tabs are hidden"
      },
	  {
        displayName: "Viz Property: IsHidden",
        color: "#002261",
		describe: "Is this viz currently hidden?"
      },	  
	  {
        displayName: "Viz Property: IsInteractive",
        color: "#002261",
		describe: "Cut in Beta 8: Is this viz currently interactive?"
      },
	  {
        displayName: "Viz Property: ParentElement",
        color: "#002261",
		describe: "What is the parent HTML element into which this viz is embedded"
      },
  	  {
        displayName: "Viz Property: Url",
        color: "#002261",
		describe: "What is the URL of this viz"
      },
	  {
        displayName: "Viz Property: Workbook",
        color: "#002261",
		describe: "Return the Workbook object - message box output won't be interesting"
      } ,
	  {
        displayName: "Activate event listeners",
        color: "#002261",
		describe: "Turn on event listeners. You'll get annoyed after a while"
      },
	  {
        displayName: "Deactivate event listeners",
        color: "#002261",
		describe: "Turn off event listeners and enjoy the silence"
      }
	  
	  
    ]
  },
  {
    displayName: "Workbook Class",
    activities: [
      {
        displayName: "Change Parameter Value Async",
        color: "#231F20",
		describe: "Change the paramter 'Top Customers' to show 10 instead of 25"
      },
	  	  {
      displayName: "Revert all async",
        color: "#231F20",
		describe: "Revert changes in this workbook - similar to the same method on the Viz class "
      },
	  {
         displayName: "Save as custom view named 'test'",
        color: "#231F20",
		describe: "Please Make some changes to the current dashboard, then click me to save them as a Custom View named 'test' "
      },
	  {
         displayName: "Remove custom view 'test'",
        color: "#231F20",
		describe: "If you have created a custom view (above), delete it. Please be kind to the next user and clean up after yourself"
      },
	    {
        displayName: "Set Active Sheet - Categorical Example",
        color: "#231F20",
		describe: "Switch to the 'Profit by Subcategory' tab. Use me before applying a category filter"
      },
	  {
        displayName: "Set Active Sheet - Date Period",
        color: "#231F20",
		describe: "Switch to the 'Shipped by Date' tab. Use me before applying a Date Period filter"
      },
	  {
        displayName: "Set Active Sheet - Range Example",
        color: "#231F20",
		describe: "Switch to the 'Sales by Date' tab. Use me before applying a Range filter"
      },
	  {
        displayName: "Set Active Sheet - Relative Date",
        color: "#231F20",
		describe: "Switch to the 'Profit by Date' tab. Use me before applying a Relative Date filter"
      },
	  {
      displayName: "Show custom view 'test'",
        color: "#231F20",
		describe: "Show the Custom View you created earlier"
      },  
	  {
      displayName: "Set active view as default",
        color: "#231F20",
		describe: "Make your 'test' Custom View the default for the currently logged in user"
      },
	  {
       displayName: "WB Property: ActiveCustomView",
        color: "#231F20",
		describe: "Will show info about a Custom View IF a custom view is currently active"
      },
  	  {
       displayName: "WB Property: ActiveSheet",
        color: "#231F20",
		describe: "Shows information about the current active sheet or dashboard"
      },
	  {
       displayName: "WB Property: Name",
        color: "#231F20",
		describe: "What is the name of this workbook?"
      },
	  {
       displayName: "WB Property: Parameters",
        color: "#231F20",
		describe: "Return a collection of parameters that exist in this workbook. This example also counts them."
      },
  	  {
       displayName: "WB Property: PublishedSheetsInfo",
        color: "#231F20",
		describe: "Get information about the sheets in this dashboard "
      }
    ]
  },
    {
    displayName: "Custom View Class",
    activities: [
      {
        displayName: "Create Custom View",
        color: "#231F20",
		describe: "Create a custom view named 'Test 2' via the Workbook class"
      },
      {
        displayName: "Save Custom View",
        color: "#231F20",
		describe: "Saves the 'Test 2' custom view in order to generate a custom URL - Works only directly after 'Create Custom View'"
      },
      {
        displayName: "Share Custom View",
        color: "#231F20",
		describe: "'Advertises' the 'Test 2' Custom View as a Shared View"
      },
	  {
        displayName: "Rename Custom View",
        color: "#231F20",
		describe: "Rename custom view 'Test 2' to 'Renamed Test 2'."
      },
	  {
        displayName: "Show Custom View",
        color: "#231F20",
		describe: "Show custom view 'Test2'"
      }

    ]
  },
    {
    displayName: "Sheet Class",
    activities: [
	
	  {
        displayName: "Apply Hierarchical Filter",
        color: "#231F20",
		describe: "I am not implemented because this workbook is not connected to a cube and we only get hierarchical filters from cubes"
      },
	  {
        displayName: "Apply Categorical Filter",
        color: "#231F20",
		describe: "Apply a simple filter to the 'Profit by Subcategory' Sheet"
      },
	  {
        displayName: "Remove and Add a Categorical Filter",
        color: "#231F20",
		describe: "Remove a value from the filter and add another two. Try this after you apply the simple filter above."
      },
	  {
        displayName: "Apply All to Categorical Filter",
        color: "#231F20",
		describe: "Apply 'All' to Categorical Filter."
      },
	  {
        displayName: "Apply Range Filter",
        color: "#231F20",
		describe: "Apply a range filter (min - max) to the 'Sales by Date' sheet"
      },
	  {
        displayName: "Apply Relative Date Filter",
        color: "#231F20",
		describe: "Apply a Relative Date filter to 'Shipped by Date' sheet, changing 'Last 4 Years' to 'Last 376 Days'"
      },
	   {
        displayName: "Change Size",
        color: "#231F20",
		describe: "Call changeSizeAsync() to change a sheet's (of type 'dashboard') size"
      },
	  {
        displayName: "Clear Hierarchical Filter",
        color: "#231F20",
		describe: "I'm not implemented b/c this workbook isn't connected to a cube"
      },
	  {
        displayName: "Clear Categorical",
        color: "#231F20",
		describe: "Clearing filter selections is the same as selecting 'All'."
      },
	  {
        displayName: "Clear Range Filter",
        color: "#231F20",
		describe: "Clear Range Filter"
      },
	  {
        displayName: "Clear Relative Date Filter",
        color: "#231F20",
		describe: "Clear Relative Date Filter"
      },
	  {
        displayName: "Select Marks Inside Dashboard",
        color: "#231F20",
		describe: "Select some Marks in the scatterplot INSIDE the dashboard"
      },
	  {
        displayName: "Select Marks",
        color: "#231F20",
		describe: "Select some Marks in the scatterplot - navigate to the 'Profit v. Sales' sheet first."
      },
	  {
        displayName: "Select More Marks",
        color: "#231F20",
		describe: "You've already selected 'Technology' marks, now add 'Office Supplies' marks, too"
      },
	  {
        displayName: "Select Marks using two dimensions",
        color: "#231F20",
		describe: "Clear the previous marks you selected and choose only Technology marks from customers Emily and Deborah"
      },
	  {
        displayName: "Clear Marks",
        color: "#231F20",
		describe: "Clear the previous marks you selected"
      },
  	  {
        displayName: "Sheet Property: DataSources",
        color: "#231F20",
		describe: "Get DataSource associated with a worksheet"
      },
	  {
        displayName: "Sheet Property: Index",
        color: "#231F20",
		describe: "The index of sheet within the workbook (zero-based)"
      },
	  {
        displayName: "Sheet Property: IsActive",
        color: "#231F20",
		describe: "Indicates whether a sheet is currectly active"
      },
  	  {
        displayName: "Sheet Property: IsHidden",
        color: "#231F20",
		describe: "Are any sheets shown in the dashboard hidden in the workbook itself?"
      },
	  {
        displayName: "Sheet Property: Name",
        color: "#231F20",
		describe: "Find the current active sheet in the workbook, then display its name"
      },
  	  {
        displayName: "Sheet Property: Objects",
        color: "#231F20",
		describe: "Use this to retrieve the items found in a sheet of type DASHBOARD. Play with the Dashboard class methods for better examples"
      },
  	  {
        displayName: "Sheet Property: ParentDashboard",
        color: "#231F20",
		describe: "Identity the parent dashboard of a worksheet nested within another sheet of type 'Dashboard'"
      },
	  {
        displayName: "Sheet Property: Selected Marks",
        color: "#231F20",
		describe: "Switch to the 'Profit v. Sales' tab, choose *a few* marks, then use this method to see what you selected"
      },
  	  {
        displayName: "Sheet Property: Sheet Type",
        color: "#231F20",
		describe: "Is the active sheet of type 'Sheet' or 'Dashboard'"
      },
	  {
        displayName: "Sheet Property: Sheet Size",
        color: "#231F20",
		describe: "Check the size behavior and min/max size settings of active sheet"
      },
	  {
        displayName: "Sheet Property: Workbook",
        color: "#231F20",
		describe: "What workbook does the current sheet belong to?"
      }
	  
    ]
  },
{
    displayName: "Data Source Class",
    activities: [
      {
        displayName: "Get Data Source",
        color: "#231F20",
		describe: "Get the Data Source associated with a sheet of type Worksheet"
      },
      {
        displayName: "Fetch Fields",
        color: "#231F20",
		describe: "Iterate through the fields in the data source"
      },
      {
        displayName: "Data Source Property: IsPrimary",
        color: "#231F20",
		describe: "In cases of blending, is this the primary data source?"
      },
	  {
        displayName: "Date Source Property: Name",
        color: "#231F20",
		describe: "Name of this data source"
      }

    ]
  },
{
    displayName: "Dashboard Class",
    activities: [
      {
        displayName: "Get Dashboard Objects",
        color: "#231F20",
	describe: "Get the Data Source associated with a sheet of type Worksheet"
      },
      {
        displayName: "Get Worksheets",
        color: "#231F20",
		describe: "Retreives an array of Worksheets which live in the dashboard"
      },

    ]
  }, 
{
    displayName: "Story Class",
    activities: [       
      {
        displayName: "activateStoryPointAsync()",
        color: "#231F20",
		describe: "Activates the StoryPoint at the specified index"
      },   
      {
        displayName: "activateNextStoryPointAsync()",
        color: "#231F20",
		describe: "Activates the next StoryPoint if one exists. Ignored if currently active StoryPoint is also the last one"
      },  
      {
        displayName: "activatePreviousStoryPointAsync()",
        color: "#231F20",
		describe: "Activates the previous StoryPoint if one exists. Ignored if currently active StoryPoint is also the first one"
      },
      {
        displayName: "revertStoryPointAsync()",
        color: "#231F20",
		describe: "Reverts the StoryPoint at the specified index"
      },
      {
        displayName: "changeSizeAsync() - Story",
        color: "#231F20",
		describe: "Resizes the current Story"
      }, 
        {
        displayName: "Story Property: Name",
        color: "#231F20",
	   describe: "Use getName() to retreive the name of the Story (sheet)"
      },
      {
        displayName: "Story Property: Index",
        color: "#231F20",
		describe: "The index of Story within the workbook (zero-based)"
      },
      {
        displayName: "Story Property: isActive",
        color: "#231F20",
		describe: "Indicates whether a Story is currectly active"
      },
      {
        displayName: "Story Property: isHidden",
        color: "#231F20",
		describe: "Are any sheets shown in the Story hidden in the workbook itself?"
      },
      {
        displayName: "Story Property: Story Type",
        color: "#231F20",
		describe: "Returns the type of the sheet - should specify 'Story'"
      },
      {
        displayName: "Story Property: Story Size",
        color: "#231F20",
		describe: "Check the size behavior and min/max size settings of active Story"
      }, 
      {
        displayName: "Story Property: Url",
        color: "#231F20",
		describe: "Get the URL of this Story"
      },
      {
        displayName: "Story Property: Workbook",
        color: "#231F20",
		describe: "Gets the workbook to which this Story belongs"
      }, 
      {
        displayName: "Story Property: StoryPointsInfo",
        color: "#231F20",
		describe: "Returns an array of StoryPointInfo objects, which represent each story point in a single story"
      },
      {
        displayName: "Story Property: ActiveStoryPoint",
        color: "#231F20",
		describe: "Returns an index of the currently active StoryPoint (zero based) in the active Story"
      }
    ]
  }, 
{
    displayName: "StoryPoint Class",
    activities: [
      {
        displayName: "StoryPoint Property - Index",
        color: "#231F20",
		describe: "Returns zero-based position of this StoryPoint within the parent Story sheet"
      },        
      {
        displayName: "StoryPoint Property - Caption",
        color: "#231F20",
		describe: "Returns the text description for this StoryPoint"
      },   
      {
        displayName: "StoryPoint Property - IsActive",
        color: "#231F20",
		describe: "Indicates whether this is the currently active StoryPoint in the parent Story"
      },  
      {
        displayName: "StoryPoint Property - IsUpdated",
        color: "#231F20",
		describe: "Returns 'False' if the StoryPoint has been modified but has not yet been reverted with the orange revert symbol. Otherwise, returns 'True'."
      },
      {
        displayName: "StoryPoint Property - ContainedSheet",
        color: "#231F20",
		describe: "Returns the sheet (Dashboard, worksheet) contained by the StoryPoint. Null if the StoryPoint contains neither"
      },  
        {
        displayName: "StoryPoint Property - ParentStory",
        color: "#231F20",
	   describe: "Returns the Story object which contains this StoryPoint"
      }
    ]
  },        
{
    displayName: "StoryPointInfo Class",
    activities: [
      {
        displayName: "StoryPointInfo Property - Index",
        color: "#231F20",
		describe: "Returns zero-based position of this StoryPoint within the parent Story sheet"
      },        
      {
        displayName: "StoryPointInfo Property - Caption",
        color: "#231F20",
		describe: "Returns the text description for this StoryPoint"
      },   
      {
        displayName: "StoryPointInfo Property - IsActive",
        color: "#231F20",
		describe: "Indicates whether this is the currently active StoryPoint in the parent Story"
      },  
      {
        displayName: "StoryPointInfo Property - IsUpdated",
        color: "#231F20",
		describe: "BUG - ALWAYS RETURNING TRUE IN BETA 5: Returns 'True' if the StoryPoint has been modified since it was 'captured' in design mode"
      }, 
      {
       displayName: "StoryPointInfo Property - ParentStory",
       color: "#231F20",
	   describe: "Returns the Story object which contains this StoryPoint"
      }
    ]
  },        
  
 {
    displayName: "Parameter Class",
    activities: [
	   {
        displayName: "Get Parameters",
        color: "#231F20",
		describe: "Get the parameters in this workbook"
      },
	  {
        displayName: "Parameter Property: CurrentValue",
        color: "#231F20",
		describe: "The current value of the 'Top 25 Customers' parameter"
      },
	  {
        displayName: "Parameter Property: DataType",
        color: "#231F20",
		describe: "The data type of the parameter"
      },	
	  {
        displayName: "Parameter Property: AllowableValuesType",
        color: "#231F20",
		describe: "The type of values the parameter can accept: ALL, LIST, RANGE"
      },
	  {
        displayName: "Parameter Property: AllowableValues",
        color: "#231F20",
		describe: "The set of allowable values contained in a LIST or RANGE driven parameter"
      },
	  {
        displayName: "Parameter Property: MinimumValue",
        color: "#231F20",
		describe: "Returns minimum allowable value on a RANGE parameter "
      },
	  {
        displayName: "Parameter Property: MaximumValue",
        color: "#231F20",
		describe: "Returns maximum allowable value on a RANGE parameter"
      },
	  {
        displayName: "Parameter Property: StepSize",
        color: "#231F20",
		describe: "Returns the step size for RANGE parameters"
      },
	  {
      displayName: "Parameter Property: DateStepPeriod",
        color: "#231F20",
		describe: "Returns the period (month, year, etc.) that we will step by - for a DATE RANGE parameters"
      },		  
      {
        displayName: "Examine Parameter #1",
        color: "#231F20",
		describe: "Examines a DATE parameter using the DateType, DateStepPeriod, StepSize and other properties"
      },
      {
        displayName: "Examine Parameter #2",
        color: "#231F20",
		describe: "Examines a parameter of type string, returns DataType, AllowableValueType, Current,  AllowableValues"
      },
	  {
        displayName: "Examine Parameter #3",
        color: "#231F20",
		describe: "Examines a parameter of type Integer, returns DataType, AllowableValueType, Current,  MinimumValue, MaximumValue, AllowableValues"
      }	  

    ]
  },

 {
    displayName: "Filter Class",
    activities: [
      {
        displayName: "Get Filters",
        color: "#231F20",
	describe: "Get the filters for a specific worksheet - Do this before you use any of the other methods or properties"
      },
      {
        displayName: "Filter Property: Applied Values - #1",
        color: "#231F20",
	describe: "What values are selected in the Category filter for sheet 'Shipped by Date'?"
      },
	  {
        displayName: "Filter Property: Field - #1",
        color: "#231F20",
	describe: "Gets information about the database field associated with the Category filter in sheet 'Shipped by Date'"
      }, 
      {
        displayName: "Filter Property: FieldName - #1",
        color: "#231F20",
	describe: "Returns the field being filtered by the Category filter for sheet 'Shipped by Date'"
      },
      {
        displayName: "Filter Property: FilterType - #1",
        color: "#231F20",
	describe: "Returns the FilterType of the Category filter for sheet 'Shipped by Date'"
      },
      {
        displayName: "Filter Property: IsExcludeMode - #1",
        color: "#231F20",
	describe: "Reflects whether Category filter for sheet 'Shipped by Date' is in 'Exclude' mode"
      },
      {
       displayName: "Filter Property: Worksheet - #1",
       color: "#231F20",
       describe: "Returns the worksheet to which the Category filter is bound"
      },
      {
       displayName: "Filter Property: DomainMinValue - #2",
       color: "#231F20",
	   describe: "Returns the minimum allowable value for the Quantitative Filter 'Sales'"
      },
      {
       displayName: "Filter Property: DomainMaxValue - #2",
       color: "#231F20",
	   describe: "Returns the maxmimum allowable value for the Quantitative Filter 'Sales'"
      },
      {
       displayName: "Filter Property: MinValue - #2",
       color: "#231F20",
	   describe: "Returns the current 'low' value for the Quantitative Filter 'Sales'"
      }, 
      {
       displayName: "Filter Property: MaxValue - #2",
       color: "#231F20",
	   describe: "Returns the current 'high' value for the Quantitative Filter 'Sales'"
      },
      {
       displayName: "Filter Property: IncludeNullValues - #2",
       color: "#231F20",
	   describe: "Indicates if NULL values are included in the Quantitative Filter 'Sales'"
      },
      {
       displayName: "Filter Property: Period - #3",
       color: "#231F20",
	   describe: "Returns the Period (Year, Month, etc.) of the  Relative Date Filter 'Ship Date'"
      } ,
      {
       displayName: "Filter Property: Range - #3",
       color: "#231F20",
	   describe: "Returns the range (LAST(N), NEXT(N), CURRENT, TODATE, etc.) of a Relative Date Filter"
      } ,
      {
       displayName: "Filter Property: RangeN - #3",
       color: "#231F20",
	   describe: "Returns the N value from the Range of a Relative Date Filter"
      },
      {
       displayName: "Filter Property: AppliedFieldNames - #4",
       color: "#231F20",
	   describe: "Returns a collection of field names set on a Hierarchical filter"
      }      	  

    ]
  }   

];
