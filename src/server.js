import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
    let server = createServer({
        environment,

        models: {
            lodge: Model,
            users: Model,
        },

        seeds(server) {
            server.create("lodge", {
                id: 1,
                name: "Crystal Vista Manor",
                imageUrl: "/images/luxury-house-2.png",
                price: 380,
                type: "luxury",
                description:
                    "A breathtaking hilltop estate with panoramic glass walls offering stunning mountain and lake views, perfect for those who love elegance and comfort.",
                hostId: "456",
            });
            server.create("lodge", {
                id: 2,
                name: "Forest Creek Haven",
                imageUrl: "/images/simple-house-3.png",
                price: 185,
                type: "simple",
                description:
                    "A cozy getaway tucked beside a gentle creek, ideal for quiet weekends surrounded by lush green trees and the sound of flowing water.",
                hostId: "123",
            });
            server.create("lodge", {
                id: 3,
                name: "Wilderness Outpost",
                imageUrl: "/images/rugged-house.png",
                price: 220,
                type: "rugged",
                description:
                    "A sturdy timber lodge deep in the wild, perfect for adventurers who want to be close to hiking trails, wildlife, and nature’s raw beauty.",
                hostId: "789",
            });
            server.create("lodge", {
                id: 4,
                name: "Pine Whisper Cabin",
                imageUrl: "/images/simple-house.png",
                price: 175,
                type: "simple",
                description:
                    "A charming pinewood cabin that blends simplicity and comfort, with a front porch perfect for morning coffee and listening to the forest.",
                hostId: "123",
            });
            server.create("lodge", {
                id: 5,
                name: "Royal Pine Retreat",
                imageUrl: "/images/luxury-house-3.png",
                price: 420,
                type: "luxury",
                description:
                    "An opulent retreat featuring a private spa, grand interiors, and a sweeping view of pine-covered hills — designed for ultimate relaxation.",
                hostId: "456",
            });
            server.create("lodge", {
                id: 6,
                name: "Mountain Trail Cabin",
                imageUrl: "/images/rugged-house-2.png",
                price: 245,
                type: "rugged",
                description:
                    "A hearty cabin perched near rugged mountain trails, built for explorers who value durability and a touch of rustic charm.",
                hostId: "123",
            });
            server.create("lodge", {
                id: 7,
                name: "Grand Forest Estate",
                imageUrl: "/images/luxury-house.png",
                price: 350,
                type: "luxury",
                description:
                    "A stately forest estate with expansive decks, high ceilings, and exquisite finishes — perfect for hosting guests or enjoying in peace.",
                hostId: "789",
            });
            server.create("lodge", {
                id: 8,
                name: "Meadow View Lodge",
                imageUrl: "/images/simple-house-2.png",
                price: 165,
                type: "simple",
                description:
                    "A warm and inviting lodge with views over open meadows, ideal for peaceful retreats and stargazing under clear skies.",
                hostId: "123",
            });

            server.create("user", {
                id: "123",
                email: "b@b.com",
                password: "p111",
                name: "bob",
            });
        },

        routes() {
            this.namespace = "api";
            this.logging = false;
            this.passthrough("https://firestore.googleapis.com/**");

            this.get("/lodges", (schema) => {
                return schema.lodges.all();
            });

            this.get("/lodge/:id", (schema, request) => {
                const id = request.params.id;

                return schema.lodges.find(id);
            });

            this.get("/host/lodges", (schema) => {
                return schema.lodges.where({hostId: "123"})
            })

            this.get("/host/lodges/:id", (schema, request) => {
                const id = request.params.id;

                return schema.lodges.findBy({id, hostId: "123"})
            })
        },
    });

    return server;
}
