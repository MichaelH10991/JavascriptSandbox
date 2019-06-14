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
