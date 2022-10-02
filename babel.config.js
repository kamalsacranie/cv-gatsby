module.exports = function(api) {
    api.cache.never(); // api.cache(false)
    return {
        plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            "macros",
        ],
        presets: ["babel-preset-gatsby"],
    };
};
