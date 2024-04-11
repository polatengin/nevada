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

## How to use a Named Pipe?

Named pipes can be used in a similar way to regular files. You can read from and write to a named pipe using standard file I/O functions. For example, you can use `open`, `read`, and `write` to interact with a named pipe.

When the named pipe is created, it will appear as a file in the file system. You can use the `ls` command to list the named pipe:

```bash
ls -lah
```

This will show the named pipe in the directory where it was created.

We can also check the information of the named pipe using the `stat` command:

```bash
stat server.fifo
```

This will show the information of the named pipe, including the file type, permissions, and other details.

```bash
  File: server.fifo
  Size: 0               Blocks: 0          IO Block: 4096   fifo
Device: 8,48    Inode: 252064      Links: 1
Access: (0644/prw-r--r--)  Uid: ( 1000/ enpolat)   Gid: ( 1000/ enpolat)
Access: 2024-01-10 16:53:47.589330815 -0700
Modify: 2024-01-10 16:53:47.589330815 -0700
Change: 2024-01-10 16:53:47.589330815 -0700
 Birth: 2024-01-10 16:53:47.589330815 -0700
```

We can check the file type by executing;

```bash
stat -c %F /tmp/server.fifo
```

## Writing to and reading from a Named Pipe

We can split the terminal to demonstrate the writing and reading operations on the named pipe.

```bash
# Terminal 1
echo "Hello, World!" > /tmp/server.fifo

# Terminal 2
cat /tmp/server.fifo
```

> Until there is a reader, the writer will be blocked. The same is true for the reader. If there is no data in the named pipe, the reader will be blocked.

We used the named pipe like a channel to send data between two processes.

If we add one more reader to the named pipe, we can see that the data is visible to only one of the readers.

```bash
# Terminal 3
cat /tmp/server.fifo
```
