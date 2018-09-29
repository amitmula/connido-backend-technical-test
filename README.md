
- [Articles API](#articles-api)
      - [Article Model :](#article-model)
  - [Dev env setup](#dev-env-setup)
    - [Prerequisites :](#prerequisites)
  - [apiDocs documentation](#apidocs-documentation)
    - [Create article](#create-article)
      - [Parameters](#parameters)
    - [Delete article](#delete-article)
    - [Retrieve article](#retrieve-article)
    - [Retrieve articles](#retrieve-articles)
      - [Parameters](#parameters)
    - [Update article](#update-article)
      - [Parameters](#parameters)
	
# Articles API

An API to create, read(search), upadte and Delete Articles

#### Article Model :
```javascript
article {
  keywords : [
    type: String
  ],
  title: {
    type: String
  },
  content: {
    type: String
  },
  author: {
    type: String
  },
  createdAt : {
    type: Date
  },
  updatedAt : {
    type: Date    
  }
}
```

## Dev env setup

### Prerequisites :

Mongo DB should be installed and running on port 27017

Run the following commnads in a terminal :
```sh
git clone https://github.com/amitmula/connido-backend-technical-test.git

npm i

npm run dev
```

api will be hosted on localhost:9000


## apiDocs documentation


### Create article



	POST /articles


#### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| title			| 			|  <p>Article's title.</p>							|
| content			| 			|  <p>Article's content.</p>							|
| author			| 			|  <p>Article's author.</p>							|

createdAt and updatedAt properties will be automatically injected by mongoose schema

### Delete article



	DELETE /articles/:id


### Retrieve article



	GET /articles/:id


### Retrieve articles



	GET /articles


#### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

query can be used to search for keywords in title & author fields. For this, mongoose-keywords plugin has been used, which adds a keywords field to the schema

Sample query request :

```
/articles?q=searchText&limit=1&page=1&sort=-createdAt&fields=title,author
```
### Update article



	PUT /articles/:id


#### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| title			| 			|  <p>Article's title.</p>							|
| content			| 			|  <p>Article's content.</p>							|
| author			| 			|  <p>Article's author.</p>							|
| date_created			| 			|  <p>Article's date_created.</p>							|
| date_updated			| 			|  <p>Article's date_updated.</p>							|


The API docs have been generated using apiDocs

<a href="http://htmlpreview.github.com/?https://github.com/amitmula/connido-backend-technical-test/blob/master/docs/index.html" target="_blank">https://github.com/amitmula/connido-backend-technical-test/blob/master/docs/index.html</a>