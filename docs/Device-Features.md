---
id: device-features
title: Device Features
sidebar_label: Device Features
description:
keywords:
  - buildfire
  - device
  - features
slug: /device-features
---

# BuildFire Device Features
This section of `buildfire.js` helps you access different features on the device that normally wouldnt be accessible to a browser

## `buildfire.device.calendar`
### `buildfire.device.calendar.addEvent(event,callback)`
this function allows you to add an event to the devices calendar
#### Arguments
- `event` an object with the following properties
       * `title` a string representing the title of the event
       * `location (optional)` a string representing the location of the event 
       * `notes (optional)` a string of representing event notes
       * `startDate` a JavaScript Date property (not a string) representing the date and time of when the event begins
       * `endDate (optional)` a JavaScript Date property (not a string) representing the when event ends. if you leave empty the OS will default a value
       * `options` 
           * `firstReminderMinutes (optional)` minutes before the event before it reminds the user. Default is 60, pass in null for no reminder (alarm)
           * `secondReminderMinutes (optional)` minutes before the event before it reminds the user again. Pass in null for no reminder (alarm) 
           * `recurrence (optional)` a string with one of the following values [daily, weekly, monthly, yearly]
           * `recurrenceEndDate` a JavaScript Date that represents when the recurrence will end. Leave null to add events into infinity and beyond
        
- `callback` is a function that is called on completion with two arguments 
    - `error` an object with error information, null it no error
    - `result` an OS's return value of adding a calendar event

#### Example
```
 buildfire.device.calendar.addEvent(
                {
                    title: 'Dannys Birthday'
                    , location: '1950 Main st, NYC, NY'
                    , notes: 'Better bring a gift'
                    , startDate: new Date(2015, 10, 20, 8, 0, 0)
                    , endDate: new Date(2015, 10, 20, 10, 0, 0)
                    , options: {
                        firstReminderMinutes: 120
                        , secondReminderMinutes: 5
                        , recurrence: "yearly"
                        , recurrenceEndDate: new Date(2025, 6, 1, 0, 0, 0, 0, 0)
                    }
                }
                ,
                function (err,result) {
                    if (err)
                        alert(err);
                    else
                        alert('worked ' + JSON.stringify(result) );
                }
        );
```


## `buildfire.device.share`
### `buildfire.device.share(messageObj,callback)`
this function allows you to share a message 
#### Arguments
- `messageObj` an object with the following properties (one or more of these properties must be filled)
       * `subject` a string representing the subject of the message
       * `text` a string representing the text of the message 
       * `image` a string representing an image url (This option will cause issue with some share applications.)
       * `link` a string representing a url
- `callback` is a function that is called on completion with two arguments 
    - `error` an object with error information, null it no error
    - `result` returns true when there is no error

#### Example
```
 buildfire.device.share({ 
	subject:'my message title',
	text:'my message text',
	image: 'http://myImageUrl',
	link: 'http://anyLink'
 }, function (err,result) {
	if (err)
		alert(err);
	else
		alert('sharing invoked');
 });

```

> Note that this function requires the plugin to have the [build feature](/docs/plugin-json-file) '**sharing**' set in plugin.json

> When the device '**sharing**' feature is not available the message will be sent to the user's mail client using [mailto protocol](https://tools.ietf.org/html/rfc2368) which is helpful when testing on the web emulator

#### Sharing Apps Usage and Limitation
**Sharing on Facebook**:
- On iOS/Android a message text can not be shared. Only a link or an image can be shared (Facebook App Issue)
- On Android urls must be real domain names like .com, .net

**Sharing on Mail App**:
- No support for images




## `buildfire.device.onAppBackgrounded`
### `buildfire.device.onAppBackgrounded(event,callback)`
this function allows you to add an event to fires when an application is put into the background.
#### Arguments  
- `callback` is a function that is called on when the application is put into the background
- `allowMultipleHandlers` optional bool param that tells the method to override all other handlers. Default false

#### Example
```
 buildfire.device.onAppBackgrounded(
                function () {
                        alert('application is put into the background');
                }
        );
```



## `buildfire.device.onAppResumed`
### `buildfire.device.onAppResumed(event,callback)`
this function allows you to add an event to fires when an application is retrieved from the background.
#### Arguments  
- `callback` is a function that is called on when the application is retrieved from the background
- `allowMultipleHandlers` optional bool param that tells the method to override all other handlers. Default false

#### Example
```
 buildfire.device.onAppResumed(
                function () {
                        alert('application is retrieved from the background');
                }
        );
```
