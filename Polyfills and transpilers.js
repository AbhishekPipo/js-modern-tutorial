/**
 * @transspilers- js new features added - in 2020 there is no nullis 
 * operator now we have, when we 
 * use nullish operator that leands to misinformation
 * hence transpilers used to convrt the new source code to 
 * new source code
 * 
 * 
 * @polyfills:-New language features may include not only syntax constructs and operators, but also built-in functions.

For example, Math.trunc(n) is a function that “cuts off” the decimal part of a number, e.g Math.trunc(1.23) returns 1.

In some (very outdated) JavaScript engines, there’s no Math.trunc, so such code will fail.

As we’re talking about new functions, not syntax changes, there’s no need to transpile anything here. We just need to declare the missing function.

A script that updates/adds new functions is called “polyfill”. It “fills in” the gap and adds missing implementations.

For this particular case, the polyfill for Math.trunc is a script that implements it, like this:


 */
if (!Math.trunc) { // if no such function
    // implement it
    Math.trunc = function(number) {
      // Math.ceil and Math.floor exist even in ancient JavaScript engines
      // they are covered later in the tutorial
      return number < 0 ? Math.ceil(number) : Math.floor(number);
    };
  }