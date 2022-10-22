export const Server = {
    endpoint : process.env.PREACT_APP_ENDPOINT,
    project: process.env.PREACT_APP_PROJECT,
    collectionID : process.env.PREACT_APP_COLLECTION_ID,
    databaseID : process.env.PREACT_APP_DATABASE_ID,
}

console.log(Server)