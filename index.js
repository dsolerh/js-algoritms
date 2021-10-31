const { CacheManager } = require("ds-cache-manager");
CacheManager.setSize(5);

CacheManager.set("test", "d1", { a: 1, b: 1 });
CacheManager.set("test", "d2", { a: 2, b: 2 });
CacheManager.set("test", "d3", { a: 3, b: 3 });
CacheManager.set("test", "d4", { a: 4, b: 4 });

require("./other");

console.log("🚀 ~ file: index.js ~ line 5 ~ CacheManager", CacheManager);
