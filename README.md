# Linux Named Pipes

Linux named pipes are a method for inter-process communication. They are similar to unnamed pipes, but instead of being created by a process, they are created as a file in the file system. Named pipes are also known as FIFOs (First In, First Out).

Here is the FIFO implementation in the Linux Kernel source code; [pipe.c / fifo_open()](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/fs/pipe.c#n1105)

## How to create a Named Pipe?

Named pipes can be created using the `mkfifo` command. The syntax is as follows:

```bash
mkfifo <pipe_name>
```

For example, to create a named pipe called `server.fifo`, you can run the following command:

```bash
cd /tmp

mkfifo server.fifo
```

This will create a named pipe with the specified name. You can then use the named pipe to read and write data between processes.

