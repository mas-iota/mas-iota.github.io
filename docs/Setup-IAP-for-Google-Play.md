---
id: set-up-iap-for-google-play
title: Configuring IAP in Google Play
sidebar_label: Set up IAP for Google Play
keywords:
  - buildfire
  - in
  - app
  - purchases
  - google
  - play
  - android
  - iap
slug: /set-up-iap-for-google-play
---

## Getting Your License Key from Google Play
 
In order to be able to use in app purchases for Google Play the license key must be retrieved which will next be saved in Buildfire.

From the Google Play Developer Console navigate first to the Buildfire app you wish to enable purchases for.

The license key can be retrieved from the Google Play app under “Services & APIs” as highlighted below in red.

![Key](https://s3-us-west-2.amazonaws.com/pluginserver.prod/docResources/IAP/KEY.png)

***

## Setting Your Google Billing Key in Buildfire
 
To set Google Billing Key in Buildfire go to “Purchase Settings” under “Settings” and add your billing there. Make sure you remove any spaces.

![Buildfire Key 2](https://s3-us-west-2.amazonaws.com/pluginserver.prod/docResources/IAP/BF-KEY.png)
![Buildfire Key](https://s3-us-west-2.amazonaws.com/pluginserver.prod/docResources/IAP/BF-KEY-CLOSE.png)

***

## Adding Products in Google Play
 
After you have set your billing key you need to publish in order to get a new build with your billing key in.
When you set your key the first time in Buildfire or change it this will trigger a new app submission that has the key injected in your new app submission build.
If your new build has not been uploaded to the store yet you won’t be able to add products. You will be seeing the following screen when trying to access the in-app products page on your Google Play developer account for that app.

![No Products](https://s3-us-west-2.amazonaws.com/pluginserver.prod/docResources/IAP/NO-PRODUCTS.png)
Once the new build has been uploaded to the store it will have the proper permissions to enable adding products and “+ Add new product” button will be visible.
 
To add a product click on “Add new product” as shown below.
![Add Products](https://s3-us-west-2.amazonaws.com/pluginserver.prod/docResources/IAP/PRODUCTS.png)

The following popup will appear. Make sure that you select “Managed product” as the subscription based services are not supported at this moment.

![Managed](https://s3-us-west-2.amazonaws.com/pluginserver.prod/docResources/IAP/ADD-MANAGED.png)


A Product ID is the identifier of the product you will be using for purchases and that you will be adding later in Buildfire.
Once you set the ID and hit continue you will be able to add the title, description and a price. 

![Product Details](https://s3-us-west-2.amazonaws.com/pluginserver.prod/docResources/IAP/PRODUCT-DETAILS.png)

Remember to Activate the product as shown below.

![Activate Products](https://s3-us-west-2.amazonaws.com/pluginserver.prod/docResources/IAP/ACTIVATE-PRODUCT.png)

After you have activated your product you can now add it to Buildfire and start using it.

***

## Linking Products in BuildFire
 
Now that your products have been added in Google Play you can now link them in Buildfire by going to “Purchase Settings” under “Settings”.

Make sure to fill in the Android Product Id with the same ID you used to register the product in Google Play. The Name field is the name that will be showing to the user when trying to purchase.

![Link](https://s3-us-west-2.amazonaws.com/pluginserver.prod/docResources/IAP/LINK.png)
![Link 2](https://s3-us-west-2.amazonaws.com/pluginserver.prod/docResources/IAP/LINK-CLOSE.png)
