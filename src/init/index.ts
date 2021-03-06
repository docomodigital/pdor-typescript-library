/**
 * @memberof YourLibrary
 * @function init
 * @description Return the message + ' world'
 * @param {Object} options (see attributes below)
 * @param {String} [options.message=''] message to show
 * @returns {String} Your message + ' world'

 *
 * @example
 * // Initialize YourLibrary
 *  var foo = YourLibrary.init({
 *      message: 'hello'
 *  });
 *  console.log(foo);
 */

export default (options: {message: string}) => {
  return `${options.message} world`;
};
