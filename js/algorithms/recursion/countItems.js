function  countItems(items) {
    if (!items.length) return 0;

    items.pop();

    return 1 + countItems(items)
}