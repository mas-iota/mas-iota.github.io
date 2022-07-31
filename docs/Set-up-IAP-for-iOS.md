---
id: set-up-iap-for-ios
title: Configuring IAP in iTunes Connect
sidebar_label: Set up IAP for iOS
keywords:
  - buildfire
  - in
  - app
  - purchases
  - ios
  - iap
slug: /set-up-iap-for-ios
---

## Configuring IAP in iTunes Connect

Note: The first submission of IAP, requires a new version to be submitted to Apple. Subsequent submissions of IAPs do not require a new app submission.
### Set up Agreements, Tax and Banking. 
This is very important. If you do not have a paid apps contract with Apple, you cannot use IAP. In iTunes Connect select the Agreements, Tax and Banking icon:

![](	 https://s3-us-west-2.amazonaws.com/pluginserver.prod/docResources/IAP/iOS/agreements-tax-bankinbg.png)     ￼
    
You need to request the Paid Applications contract. Then you need to fill out your contact, banking and tax information. If any of these are not completed, IAP will not work. 
    When you are completed, your contracts should look like this (Note, contract number has been redacted)
    ￼
![](https://s3-us-west-2.amazonaws.com/pluginserver.prod/docResources/IAP/iOS/agreements-setup.png)

For more information on setting up contracts, please read [this article](https://developer.apple.com/library/content/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/ManagingContractsandBanking.html).
If you need help with your tax info, please contact an certified accountant.

### Set up products in iTunes Connect.
     
* Once you have your agreements, set up in iTunes, you need to create products for your app.

![](https://s3-us-west-2.amazonaws.com/pluginserver.prod/docResources/IAP/iOS/my-apps.png)
* Under the app that you want to add purchases to, select "Features" and select "In- App Purchases"

![](https://s3-us-west-2.amazonaws.com/pluginserver.prod/docResources/IAP/iOS/IAP+Menu.png)
* Add an In App Purchase by selecting the + button

![](https://s3-us-west-2.amazonaws.com/pluginserver.prod/docResources/IAP/iOS/add-products.png)
* Select Non-Consumable Product. Note: Only Non-Consumable products are supported currently.
* Complete the form for your product. All information needs to be completed before your IAP will be valid. The most important field on this form is Product ID. This is a unique identifier which your app will use when completing transactions. It will also be needed when you enter these products into BuildFire. Also make sure that your product is "cleared for sale." If you have completed all fields, your list of purchases should look like this:
![](https://s3-us-west-2.amazonaws.com/pluginserver.prod/docResources/IAP/iOS/added-product.png)

For further information, please see [this link](https://developer.apple.com/library/content/documentation/LanguagesUtilities/Conceptual/ iTunesConnectInAppPurchase_Guide/Chapters/Introduction.html).

## Setting products up in BuildFire. 

* From the BuildFire control panel, select Settings->Purchase Settings:
![](https://s3-us-west-2.amazonaws.com/pluginserver.prod/docResources/IAP/iOS/BF-purchase-settings.png)
* On this menu, you add the products for both iOS and Android. Please note, for iOS, there is no key needed, your products are automatically associated with your application's bundle ID. Enter the product ID that you entered into iTunesConnect exactly as you entered it. This field is case sensitive and if there is any difference between your product ID in BuildFire and your productID in iTunes connect, IAP will not work.
* Once you have entered all the products that your app will be using, it is time to associate your product with a plugin that a user can purchase. The easiest way to do this is to navigate to a plugin you would like to sell. You will notice there is now a purchase tab on the plugin. Select "Require Purchase" and associate the product with the product you entered:
![](	 https://s3-us-west-2.amazonaws.com/pluginserver.prod/docResources/IAP/iOS/plugin-product.png)
* Finally, hit publish, so your settings are reflected on user's apps.
* An alternative way to add purchases to your app is to associate it with an action. Select "purchase" from the drop down and fill out much like the plugin. The difference here is you need to associate the action with a plugin.
![](https://s3-us-west-2.amazonaws.com/pluginserver.prod/docResources/IAP/iOS/action-item-product.png)
