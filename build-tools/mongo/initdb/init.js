db = db.getSiblingDB('admin');
db.auth("admin", "admin");
db = db.getSiblingDB("business_trips");
db.createUser(
    {
        user: "bt",
        pwd: "bt",
        roles: [
            {
                role: "readWrite",
                db: "business_trips"
            }
        ] 
    }
)

db.createCollection("test");