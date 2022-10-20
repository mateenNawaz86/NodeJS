import os from "os";

// It return the current register version of your system
console.log(os.arch());

// It return the free space in your system in byt's format
console.log(`${os.freemem() / 1024 / 1024 / 1024} GB space available`);

// it return the hostname
console.log(os.hostname());

// Release date of your system
console.log(os.release());

// It return the current system operating system version
console.log(os.platform());

// It return the current operating system type
console.log(os.type());
