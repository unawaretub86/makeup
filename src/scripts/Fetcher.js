class Fetcher {
    // this func creates a route to fetch with database information
    constructor() {
        if (!Fetcher.instance) {
            Object.defineProperty(this, "events", {
                writable: false,
                configurable: false,
                value: {
                    fetchStart: () => null,
                    fetchEnd: () => null,
                    on: (event, cb) => (this.events[event] = cb),
                },
            });

            // define properties
            Object.defineProperty(this, "fetch", {
                writable: false,
                configurable: false,
                value: async (url, method, params) => {
                    this.events.fetchStart();
                    const newUrl = url.includes("http")
                        ? url
                        : `${window.location.origin}${url}`;
                    const res = await fetch(newUrl, {
                        method: method || "GET",
                        body: JSON.stringify(params),
                    });
                    this.events.fetchEnd();
                    if (res.status === 500) {
                        throw await res.json();
                    }
                    return await res.json();
                },
            });

            Fetcher.instance = this;
        }
    }
}

const instance = new Fetcher();
Object.freeze(instance);

export const fetcher = instance.fetch;

export default instance;
