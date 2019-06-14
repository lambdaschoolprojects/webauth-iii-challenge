/**
 * Return nodes with the given data-test attribute
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
const findElementByAttrs = (wrapper, attr) => {
    const selector = `[data-test="${attr}"]`;

    return wrapper.find(selector);
}