window.localStorage.getItem = function(key) {
    if (key.startsWith("RPG ")) {
        key = key.substring(4).toLowerCase();
    }
    return __fix_localStorage.getItem(key);
};
window.localStorage.setItem = function(key, value) {
    if (key.startsWith("RPG ")) {
        key = key.substring(4).toLowerCase();
    }
    setTimeout(function() {
        __fix_localStorage.setItem(key, value);
    }, 0);
};
window.localStorage.removeItem = function(key) {
    if (key.startsWith("RPG ")) {
        key = key.substring(4).toLowerCase();
    }
    setTimeout(function() {
        __fix_localStorage.removeItem(key);
    }, 0);
};
