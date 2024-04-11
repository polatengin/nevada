# Linux Named Pipes

Linux named pipes are a method for inter-process communication. They are similar to unnamed pipes, but instead of being created by a process, they are created as a file in the file system. Named pipes are also known as FIFOs (First In, First Out).

Here is the FIFO implementation in the Linux Kernel source code; [pipe.c / fifo_open()](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/fs/pipe.c#n1105)

