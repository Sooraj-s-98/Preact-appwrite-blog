# 🔖 Todo With Preact

A simple todo app built with Appwrite and Preact

If you simply want to try out the App, go ahead and check out the demo at 



We need to make a few configuration changes to your Appwrite server.

1. Add a new Web App in Appwrite and enter the endpoint of your website (localhost, <project-name>.vercel.app etc)



2. Create a new collection with the following properties



3. Add the following permissions to your collection.




## 🎬 Getting Started

### 🤘 Install Appwrite 
Follow our simple [Installation Guide](https://appwrite.io/docs/installation) to get Appwrite up and running in no time. You can either deploy Appwrite on your local machine or, on any cloud provider of your choice. 

> Note: If you setup Appwrite on your local machine, you will need to create a public IP so that your hosted frontend can access it.
  
We need to make a few configuration changes to your Appwrite server. 



### 🚀 Deploy the Front End
You have two options to deploy the front-end and we will cover both of them here. In either case, you will need to fill in these environment variables that help your frontend connect to Appwrite.

* PREACT_APP_ENDPOINT - Your Appwrite endpoint
* PREACT_APP_PROJECT - Your Appwrite project ID
* PREACT_APP_COLLECTION_ID - Your Appwrite collection ID 
* PREACT_APP_DATABASE_ID - Your Appwrite database ID

### **Run locally**

Follow these instructions to run the demo app locally

```sh
$ git clone https://github.com/Sooraj-s-98/Preact-appwrite-blog
$ cd Preact-appwrite-blog
```

Run the following command to generate your `.env` vars  

```sh
$ cp .env.example .env
```

Now fill in the envrionment variables we discussed above in your `.env`

Now run the following commands and you should be good to go 💪🏼 
```
$ npm install
$ npm run dev
```
