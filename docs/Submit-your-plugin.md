---
id: how-to-submit-your-plugin
title: How to Submit Your Plugin
sidebar_label: How to Submit Your Plugin
keywords:
  - buildfire
  - plugin
  - deployment
  - submittion
  - submit
  - upload
slug: /how-to-submit-your-plugin
---

This article goes through the **steps for submitting a plugin** that you have created and getting it distributed widely through BuildFire developer portal.

For CLI version please refer to https://github.com/BuildFire/sdk-cli

## Steps
1. You have to register to our **Developer Portal**. 

2. When you login you will gain a **Development App ID** for testing your submitted plugins. 

3. Go to the **Plugin Manager**.

4. Click on **Upload plugin** and it will take you to **Upload Plugin** page.

5. Click on **Upload button** and choose your plugin.zip file.

6. Once uploaded, you will see your submitted plugin in your **Plugin Manager**.

***

### Plugin Manager
![file system](https://s3-us-west-2.amazonaws.com/pluginserver/docResources/PluginManager1.png)

***

### Potential errors while submitting plugins :


**1.Incorrect zip file structure**

_Reason_ 
*  you have to check your folder structure inside the zip file

_Example_ for the correct folder structure and files :

![file system](https://s3-us-west-2.amazonaws.com/pluginserver/docResources/structure.png?q=9) 


**2. Missing control folder**

_Reason_ 
* missing control folder inside the the zip file

**3. Missing resource folder**

_Reason_  
* missing resource folder inside the the zip file

**4. Missing `image.png` in resources folder**

_Reason_ 
* missing `image.png` file inside the resources folder , please pay attention to the image format should be `.png`


**5. Missing `icon.png` in resources folder**

_Reason_  
* missing `image.png` file inside the resources folder , please pay attention to the image format should be `.png`

**6. Missing `plugin.json` file**

_Reason_ 
* missing `plugin.json` file inside the main folder.

**7. Invalid `plugin.json` file format**

_Reason_ 
* the content of `plugin.json` file is incorrect `json` format 

**8. Missing widget folder**

_Reason_ 
* missing widget folder inside the main folder.
* missing the following code in `plugin.json`
`"widget":{`
`}`

**9-Missing control property in `plugin.json`**

_Reason_ 
* missing control property inside the `plugin.json`
* missing the following code in `plugin.json`

         `,"control":{`
         `"content":{`
         `"enabled":true`
         `}`
          `, "design":{`
        `"enabled":true`
         `}`
         `, "settings":{`
           `"enabled":false`
           `}`
          `}`


**10-Missing content folder in control folder**

_Reason_ 
* missing content folder inside the control folder and the property for content folder is enabled in the `plugin.json` file .
*you can enable or disable the content from the following code in `plugin.json`

     `"control":{`
      `"content":{`
        `"enabled":true`
      `}`

**11-Missing design folder in control folder**

_Reason_ 
* missing design folder inside the control folder and the property for design folder is enabled in the `plugin.json` file .
* you can enable or disable the design from the following code in `plugin.json`

    ` "control":{ `
       `"design":{ `
        `"enabled":true `
        `}`
 
**12-Missing settings folder in control folder**

_Reason_ 
* missing settings folder inside the control folder and the property for settings folder is enabled in the `plugin.json` file.
* you can enable or disable the settings from the following code in `plugin.json`

`"control":{`
 `"settings":{`
   `"enabled":true`
 `}`


**13-Missing `pluginName` property in `plugin.json`**

_Reason_ 
* missing `pluginName` property in `plugin.json`.
* missing the following code in `plugin.json` 
`"`pluginName`":"Example Plugin"`

**14-Missing `pluginDescription` property in `plugin.json`**

_Reason_
* missing `pluginDescription` property in `plugin.json`
* missing the following code in `plugin.json` 
" `pluginDescription` ":"This is a simple test plugin"


**15-Missing features array property in `plugin.json`**

_Reason_ 
* missing features property in `plugin.json` and it should be an array .
* missing the following code in `plugin.json` 
`"features" : [{"name" : "GPS"} ,{"name" : "Bluetooth"}]`


**16-Missing features languages property in `plugin.json`**

_Reason_ 
* missing languages property in `plugin.json` and it should be an array of objects .
* missing the following code in `plugin.json` 
`"languages" : ["en" , "fr"]`

***

For more detailed documentation on `plugin.json` please refer to [How to Fill in "plugin.json" File](/docs/plugin-json-file)
