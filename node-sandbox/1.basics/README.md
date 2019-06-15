# What is node?

1. asynchronous, event driven Javascript runtime
2. scalabale network applications
3. many connections handled concurrently
4. framework for web server development
5. based around callbacks
6. lockless therefore no worry for deadlocking

Node is built against modern versions of the [V8](https://v8.dev/) engine. This ensures that the newest features of the [ECMA-262](http://www.ecma-international.org/publications/standards/Ecma-262.htm) specification are included in node.js.

You can check what features are safe to use [here](https://node.green/)

Run: `node --v8-options | grep "in progress"` to see what features are in progress.

Find what version of V8 node is running: `node -p process.versions.v8`

## V8?

"V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. It implements ECMAScript and WebAssembly, and runs on Windows 7 or later, macOS 10.12+, and Linux systems that use x64, IA-32, ARM, or MIPS processors. V8 can run standalone, or can be embedded into any C++ application."

[V8 Homepage](https://v8.dev/)

## Similar libraries

1. Ruby's Event Machine
2. Python's Twisted

## What is Node.js' event loop?

Click [here](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/) for the docs.

### In Summary

The event loop is the mechanism that allows Node.js to perform non blocking I/O operations even though it is single-threaded. Operations are offloaded to the system kernel whenever possible. This is ideal beacuse the kernel is multithreaded and can communicate with Node.js to tell it when an operation, executing in the background, has completed.

### The event loop

1. Node starts and initiates the event loop
2. Processes the provided input script or drops into [REPL](https://nodejs.org/api/repl.html#repl_repl) (Read, Eval, Print, Loop) which may make async calls, shedules or `process.nextTick()`
3. Phases are executed which each execute their FIFO queue of callbacks. When queue is exhausted, the loop moves to the next phase.

### The phases

1. **timers:** This phase executes callbacks sheduled by setTimeout() and setInterval().
2. **pending callbacks:** executes I/O callbacks deffered to the next loop iteration.
3. **idle, prepare:** only used internally
4. **poll:** retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and `setImmediate()`); node will **block** here when appropriate.
5. **check:** `setImmediate()` callbacks are invoked here
6. **close callbacks:** some close callbacks, e.g. socket.on('close' ...)

### The phases in detail

1. `node timers.js`

2.
